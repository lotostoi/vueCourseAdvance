
import Vue from 'vue'

import * as cartApi from "@/api/cart"

const DALAY = 3000

export default {
    namespaced: true,

    state: {

        goodsInCart: [],

        status: false,

        clearCartBlok: false,

    },
    getters: {

        goodsInCart: state => state.goodsInCart,

        checkInCart: state => id => state.goodsInCart.find(e => e.id === id),

        indexInCart: state => id => state.goodsInCart.findIndex(e => e.id === id),

        total: (...arg) => {
            let [state, , , allGet = rootGetters] = arg
            return {
                price: state.goodsInCart.reduce((total, e) => total + e.cnt * allGet['cotalog/getGood'](e.id).price, 0),
                cnt: state.goodsInCart.length,
            }
        },
        goodsDitailed: (...arg) => {

            let [state, , , allGet = rootGetters] = arg

            let good = allGet['cotalog/getGood']

            return state.goodsInCart.map(e => {
                return { ...e, ...good(e.id) }
            })

        }

    },
    mutations: {

        getCart(state, { data, token }) {
            state.goodsInCart = data
            state.token = token
        },

        addCart({ goodsInCart }, id) {
            goodsInCart.push({ id: id, cnt: 1 })
        },

        incCart({ goodsInCart }, index) {
            ++goodsInCart[index]['cnt']
        },

        decCart({ goodsInCart }, index) {
            --goodsInCart[index]['cnt']
        },

        delCart({ goodsInCart }, index) {
            goodsInCart.splice(index, 1)
        },

        chengCart({ goodsInCart }, { index, val }) {
            Vue.set(goodsInCart[index], 'cnt', val)
        },

        clearCart({ goodsInCart }) {
            goodsInCart.splice(0, goodsInCart.length)
        },

        changeStatus(state) { 
          state.status = !state.status
        },

        clearCartBlok(state) {

            state.clearCartBlok = !state.clearCartBlok

        },


    },
    actions: {

        // get all cart

        async getCart({ dispatch, commit }) {

            let oldToken = localStorage.getItem('CART__TOKEN')

            try {

                let { cart, token, needUpdate } = await cartApi.all(oldToken)


                if (needUpdate) {

                    localStorage.setItem('CART__TOKEN', token)

                }
                commit('changeStatus')
                commit('getCart', { token: token, data: cart })


            } catch (e) {

                dispatch('alerts/add', { text: "Error by loading cart. You need to reload page" }, { root: true })

            }

        },


        async addCart({ commit, state, dispatch }, { id }) {

            try {
                // blocking button
                dispatch('cotalog/cInProc', { id: id }, { root: true })

                await cartApi.add(state.token, id)

                dispatch('cotalog/cInProc', { id: id }, { root: true })
                // unblocking button
                commit('addCart', id)

            } catch (e) {
                // unblocking button
                dispatch('cotalog/cInProc', { id: id }, { root: true })
                // show message about error
                dispatch('alerts/add', { text: "Error by adding good to cart", timeout: DALAY }, { root: true })
            }

        },

        async incCart({ commit, getters, state, dispatch }, { id }) {

            let { goodsInCart, checkInCart, indexInCart } = getters

            let cnt = goodsInCart[indexInCart(id)]['cnt']

            if (checkInCart(id)) {

                try {

                    dispatch('cotalog/cInProc', { id: id }, { root: true })

                    await cartApi.change(state.toke, id, ++cnt)

                    dispatch('cotalog/cInProc', { id: id }, { root: true })

                    commit('incCart', indexInCart(id))

                } catch (e) {

                    dispatch('cotalog/cInProc', { id: id }, { root: true })

                    dispatch('alerts/add', { text: "Error by changing amount of goods in the cart", timeout: DALAY }, { root: true })

                }

            }

        },

        async decCart({ commit, getters, state, dispatch }, { id }) {

            let { goodsInCart, checkInCart, indexInCart } = getters

            let cnt = goodsInCart[indexInCart(id)]['cnt']

            if (checkInCart(id)) {

                // уменьшаем количество

                if (cnt > 1) {

                    try {

                        dispatch('cotalog/cInProc', { id: id }, { root: true })

                        await cartApi.change(state.token, id, --cnt)

                        dispatch('cotalog/cInProc', { id: id }, { root: true })

                        commit('decCart', indexInCart(id))
                    } catch (e) {

                        dispatch('cotalog/cInProc', { id: id }, { root: true })

                        dispatch('alerts/add', { text: "Error by changing amount of goods in the cart", timeout: DALAY }, { root: true })

                    }
                }

                // удаляем из коризны

                else if (cnt === 1) {
                    try {

                        dispatch('cotalog/cInProc', { id: id }, { root: true })

                        await cartApi.remove(state.token, id)

                        commit('delCart', indexInCart(id))

                        dispatch('cotalog/cInProc', { id: id }, { root: true })
                    } catch (e) {

                        dispatch('cotalog/cInProc', { id: id }, { root: true })

                        dispatch('alerts/add', { text: "Error by deleting good from cart", timeout: DALAY }, { root: true })

                    }

                }

            }

        },


        async chengCart({ commit, getters, state }, { id, e }) {

            let { checkInCart, indexInCart } = getters

            if (checkInCart(id)) {

                try {

                    let cnt = parseInt(e.target.value)

                    let newCnt = (isNaN(cnt) || cnt < 1) ? 1 : cnt

                    await cartApi.change(state.token, id, newCnt)

                    commit('chengCart', { index: indexInCart(id), val: false })

                    commit('chengCart', { index: indexInCart(id), val: newCnt })
                } catch (e) {

                    dispatch('cotalog/cInProc', { id: id }, { root: true })

                    dispatch('alerts/add', { text: "Error by changing amount of goods in the cart", timeout: DALAY }, { root: true })

                }

            }

        },

        async clearCart({ commit, state }) {

            try {

                commit('clearCartBlok')

                await cartApi.clear(state.token)

                commit('clearCartBlok')

                commit('clearCart')
            } catch (e) {

                commit('clearCartBlok')

                dispatch('alerts/add', { text: "Error by clearing of cart", timeout: DALAY }, { root: true })

            }

        },


    }

}
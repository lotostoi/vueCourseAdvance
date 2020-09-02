
import Vue from 'vue'

import { getData } from "@/server.js"

export default {
    namespaced: true,
    state: {
        goodsInCart: [],
        status: false,
        statusMesseg: 'Some Error',
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
        changeStatus(state, val) {

            state.status = val

        },
        clearCartBlok(state) {

            state.clearCartBlok = !state.clearCartBlok

        },


    },
    actions: {

        async getCart({ commit,state }) {

            let oldToken = localStorage.getItem('CART__TOKEN')
            try {
                let { cart, token, needUpdate } = await getData(`cart/load.php?token=${oldToken}`)


                if (needUpdate) {

                    localStorage.setItem('CART__TOKEN', token)
                }
                commit('getCart', { token: token, data: cart })

                commit('changeStatus', true)


            } catch (e) {


                commit('changeStatus', false)


            }

        },


        async addCart({ commit, state, dispatch }, { id }) {


            dispatch('cotalog/cInProc', { id: id }, { root: true })


            let res = await getData(`cart/add.php?token=${state.token}&id=${id}`)

            dispatch('cotalog/cInProc', { id: id }, { root: true })

            res && commit('addCart', id)


        },

        async incCart({ commit, getters, state, dispatch }, { id }) {

            let { goodsInCart, checkInCart, indexInCart } = getters

            let cnt = goodsInCart[indexInCart(id)]['cnt']

            if (checkInCart(id)) {

                if (cnt > 0) {

                    dispatch('cotalog/cInProc', { id: id }, { root: true })

                    let res = await getData(`cart/change.php?token=${state.token}&id=${id}&cnt=${++cnt}`)

                    dispatch('cotalog/cInProc', { id: id }, { root: true })

                    res && commit('incCart', indexInCart(id))

                }

            }

        },

        async decCart({ commit, getters, state, dispatch }, { id }) {

            let { goodsInCart, checkInCart, indexInCart } = getters

            let cnt = goodsInCart[indexInCart(id)]['cnt']

            if (checkInCart(id)) {

                // уменьшаем количество

                if (cnt > 1) {

                    dispatch('cotalog/cInProc', { id: id }, { root: true })

                    let res = await getData(`cart/change.php?token=${state.token}&id=${id}&cnt=${--cnt}`)

                    dispatch('cotalog/cInProc', { id: id }, { root: true })

                    res ? commit('decCart', indexInCart(id)) : false
                }

                // удалем из коризны

                else if (cnt === 1) {

                    dispatch('cotalog/cInProc', { id: id }, { root: true })


                    let res = await getData(`cart/remove.php?token=${state.token}&id=${id}`)


                    res && commit('delCart', indexInCart(id))

                    dispatch('cotalog/cInProc', { id: id }, { root: true })


                }

            }

        },


        async chengCart({ commit, getters, state }, { id, e }) {

            let { checkInCart, indexInCart } = getters

            if (checkInCart(id)) {

                let cnt = parseInt(e.target.value)

                let newCnt = (isNaN(cnt) || cnt < 1) ? 1 : cnt

                let res = await getData(`cart/change.php?token=${state.token}&id=${id}&cnt=${newCnt}`)

                if (res) {

                    commit('chengCart', { index: indexInCart(id), val: false })

                    commit('chengCart', { index: indexInCart(id), val: newCnt })
                    
                }


            }

        },

        async clearCart({ commit, state }) {

            commit('clearCartBlok')

            let res = await getData(`cart/clean.php?token=${state.token}`)
            
            commit('clearCartBlok')

            res && commit('clearCart') 

        },


    }

}
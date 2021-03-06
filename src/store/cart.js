
import Vue from 'vue'

import router from "@/router"

import * as cartApi from "@/api/cart"

const DALAY = 3000

const ERRORCODE = 401

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

                let { data: { cart, token, needUpdate } } = await cartApi.all(oldToken)


                if (needUpdate) {

                    localStorage.setItem('CART__TOKEN', token)

                }
                commit('changeStatus')

                commit('getCart', { token: token, data: cart })

 
            } catch (e) {

                    commit('changeStatus')

                    dispatch('cotalog/blockButtons', null, { root: true })
              
            } 

        },


        async addCart({ commit, state, dispatch }, { id }) {

                dispatch('cotalog/cInProc', { id: id }, { root: true })

                await cartApi.add(state.token, id)

                dispatch('cotalog/cInProc', { id: id }, { root: true })
                // unblocking button
                commit('addCart', id)

        },

        async incCart({ commit, getters, state, dispatch }, { id }) {

            let { goodsInCart, checkInCart, indexInCart } = getters

            let cnt = goodsInCart[indexInCart(id)]['cnt']

            if (checkInCart(id)) {

                    dispatch('cotalog/cInProc', { id: id }, { root: true })

                    await cartApi.change(state.toke, id, ++cnt)

                    dispatch('cotalog/cInProc', { id: id }, { root: true })

                    commit('incCart', indexInCart(id))

            }

        },

        async decCart({ commit, getters, state, dispatch }, { id }) {

            let { goodsInCart, checkInCart, indexInCart } = getters

            let cnt = goodsInCart[indexInCart(id)]['cnt']

            if (checkInCart(id)) {

                // уменьшаем количество

                if (cnt > 1) {

             

                        dispatch('cotalog/cInProc', { id: id }, { root: true })

                        await cartApi.change(state.token, id, --cnt)

                        dispatch('cotalog/cInProc', { id: id }, { root: true })

                        commit('decCart', indexInCart(id))

                }


                else if (cnt === 1) {
              
                        dispatch('cotalog/cInProc', { id: id }, { root: true })

                        await cartApi.remove(state.token, id)

                        commit('delCart', indexInCart(id))

                        dispatch('cotalog/cInProc', { id: id }, { root: true })


                }

            }

        },


        async chengCart({ commit, getters, state }, { id, e }) {

            let { checkInCart, indexInCart } = getters

            if (checkInCart(id)) {


                    let cnt = parseInt(e.target.value)

                    let newCnt = (isNaN(cnt) || cnt < 1) ? 1 : cnt

                    await cartApi.change(state.token, id, newCnt)

                    commit('chengCart', { index: indexInCart(id), val: false })

                    commit('chengCart', { index: indexInCart(id), val: newCnt })


            }

        },

        async clearCart({ commit, state }) {


                commit('clearCartBlok')

                await cartApi.clear(state.token)

                commit('clearCartBlok')

                commit('clearCart')


        },


    },


     claerCartSimple({ commit }) {

         commit('clearCart')

    }

}
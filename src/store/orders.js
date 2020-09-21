
import * as ordersApi from "@/api/orders"

export default {
    namespaced: true,
    state: () => ({

        orders: null
        
    }),
    getters: {

        orders: state => state.orders

    },
    mutations: {

        getOrders: (state, orders) => state.orders = orders

    },
    actions: {

        async getAll({ commit }) {

            try {

                let res = await ordersApi.all()
                let { ok, data: { orders } } = res
                commit('getOrders', orders)

            } catch {

                return false

            }

        },

        claerOrders({ commit }) { 

            commit('getOrders',null)

        }
    }
}


import Vue from 'vue'

import router from "@/router"

import * as cotalogApi from "@/api/cotalog"

let addParams = {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi qui possimus delectus reprehenderit iusto quidem dolorum deserunt corporis non dolor sunt culpa, inventore, veritatis voluptates. Cupiditate voluptas earum ut necessitatibus, animi harum, ipsum similique quis, reprehenderit praesentium sint voluptatibus iste dolorem placeat laborum. Aperiam, maxime voluptatum alias illum dolor magnam sunt sequi, vitae nostrum, possimus tenetur facere praesentium fugit ipsam. Alias molestias doloremque, magnam quod nulla optio voluptas dicta debitis ut amet. Magnam ipsa porro perferendis similique magni? Odit soluta aut ad assumenda maxime eius architecto rem et, ipsa optio quasi nulla dolorum necessitatibus neque. Asperiores dolorum perspiciatis eum.",
    img: "http://placehold.it/200",
    inProcessing: false
}


export default {
    namespaced: true,
    state: {
        goods: [

        ]
    },
    getters: {
        goods: state => state.goods,
        indexInGoods: state => id => state.goods.findIndex(e => e.id === id),
        getGood: state => id => {
            if (state.goods.findIndex(e => e.id == id) != -1) {
                return state.goods[state.goods.findIndex(e => e.id == id)]
            }
        }
    },
    mutations: {
        getGoods(state, data) {
            state.goods = data
        },
        changeInProcessing({ goods }, id) {

            let index = goods.findIndex( g => g.id.toString() === id.toString())

            let value = goods[index]['inProcessing']
            
            Vue.set(goods[index], 'inProcessing', !value) 
        },
        blockAllButtons (state) {
            console.log(state.goods)
            console.log('block')
             state.goods.map(g => Vue.set(g, 'inProcessing', !g.inProcessing))
            console.log(state.goods)
        }
    },
    actions: {
        async getGoods({ commit, state }) {

            let data = await cotalogApi.all()

            commit('getGoods', data.map(e => {
                return { ...e, ...addParams }
            }))

        },

        cInProc({ commit }, { id }) {

    
            commit('changeInProcessing', id )

        },

        blockButtons: ({ commit }) => commit('blockAllButtons')

    }

}
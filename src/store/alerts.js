// module for working with alerts


export default {

    namespaced: true,

    state: {

        // array of all alerts
        all: []
    },
    getters: {
        all: state => state.all
    },
    mutations: {
        add(state, payload) {
            state.all.push(payload)

            console.log(state.all)

            return state.all.length - 1

        },
        dellByIndex(state, index) {
            state.all.splice(index, 1)
        }

    },
    actions: {
        add({ commit }, payload) {

            let index = commit('add', payload)

            if (payload.timeout) {
                setTimeout(() => commit('dellByIndex', index), payload.timeout)
            }

        }
    }



}


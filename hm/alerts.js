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
            
            // adding object of error in the array
            state.all.push(payload)

            // return index of added object
            return state.all.length - 1

        },

        // deleteing  object by index
        
        dellByIndex(state, index) {
            state.all.splice(index, 1)
        }

    },
    actions: {
        add({ commit }, payload) {

            // adding error's object and return its index
            let index = commit('add', payload)

            if (payload.timeout) {
              //  if the "timeout" property is defined, then we are deleting this object from the array, after <timeout> ms
                setTimeout(() => commit('dellByIndex', index), payload.timeout)
            }
        }
    }

}


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

        },

        // deleteing  object by index

        dellByIndex(state, id) {
            const index = state.all.findIndex(a => a.id === id)
            state.all.splice(index, 1)
        }

    },
    actions: {
        add({ commit, state }, payload) {

            console.log('alert')

            const id = Date.now()

            // adding error's object 
            commit('add', { ...payload, id: id })

            if (payload.timeout) {

                //  if the "timeout" property is defined, then we are deleting this object from the array, after <timeout> ms
                setTimeout(() => commit('dellByIndex', id), payload.timeout)
            }
        }
    }

}

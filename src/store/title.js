export default {
    namespaced: true,
    state: () => ({
        title: null
    }),
    getters: {
        title: state => state.title
    },
    mutations: {
        setTitle(state, title) { state.title = title }
    },

    actions: {
        setTitle({ state, commit }, title) {

            commit('setTitle', title)

            if (process.isClient) {

                document.title = state.title

            }

        }
    }

}
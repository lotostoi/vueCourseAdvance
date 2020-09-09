import * as userApi from "@/api/user"

import router from "@/router"


let autoLog

let endLoad = new Promise(resolve => {
    autoLog = resolve
})


export default {
    namespaced: true,

    state: {
        user: null
    },

    getters: {

        user: state => state.user,

        isLogin: state => state.user !== null,

        ready: () => endLoad

    },

    mutations: {
        setUser(state, user) {
            state.user = user
          
        }
    },

    actions: {
        async login({ commit, dispatch }, { login, password }) {

            try {

                let { ok , data} = await userApi.login(login, password);

                if (ok && data) {
                  
                    commit('setUser', data.user);
                }

                return data;

            } catch {
                dispatch('alerts/add', { text: "Error by logging", timeout: DALAY }, { root: true })
            }

        },

        async autoLogin({ commit, dispatch }) {

            try {
                let { ok, data } = await userApi.check();

                if (ok && data)  {

                    commit('setUser', data.user);
         
                } else {
                    commit('setUser', null);
                }

                autoLog()

                return data;

            } catch (e) {

               return false
              
            }

        },

        async logOut({ commit, dispatch }) {
    
            await userApi.logOut()

            commit('setUser', null)

        },
      
    }

}
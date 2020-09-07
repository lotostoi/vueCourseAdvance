import * as userApi from "@/api/user"

import router from "@/router"

const DALAY = 3000

export default {
    namespaced: true,
    state: {
        user: null
    },
    getters: {
        user: state=> state.user,
        isLogin: state => state.user !== null,
    },
    mutations: {
        setUser(state, user) { 
            state.user = user
        }
    },
    actions: {
        async login({ commit, dispatch }, { login, password }) {

            try {
                let data = await userApi.login(login, password);

                if (data.res && data.user) {
                    commit('setUser', data.user);
                }

                return data;

            } catch { 
                dispatch('alerts/add', { text: "Error by logging", timeout: DALAY }, { root: true })
            }
          
        },

        async autoLogin({ commit, dispatch }) {

            try {
                let data = await userApi.check();

                if (data.res && data.user) {
                    commit('setUser', data.user);
                } else { 
                    commit('setUser', null);
                }

                return data;

            } catch(e) { 
               // dispatch('alerts/add', { text: "Error by autologging", timeout: DALAY }, { root: true })
                console.log(e)
            }
          
        },

        async logOut({ commit, dispatch }) { 
            try {

                await userApi.logOut()

                commit('setUser', null)

            } catch (error) {

                dispatch('alerts/add', { text: "Error by exit", timeout: DALAY }, { root: true })

            }
        },
       ///  промис для роутов на страници с авторизацией, все работает но при переходе по сслыкам,всегда  вызывается это промис и есть небольшие тормаза 
        // искал но не нашел, как зарезолвить промисс по событию резолва другого промиса где-то вызванного. Незнаю можно так сделать или нет.
        async loadUser({ dispatch}) { 
            return new Promise(async (res, rej) => { 

                res(await dispatch('autoLogin'))

            })
        }
        
    }

}
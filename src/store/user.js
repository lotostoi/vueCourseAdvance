import * as userApi from "@/api/user"

import router from "@/router"


import { setTokens, getJWTPayload, getAccessToken } from "../utils/tokens"


let autoLog

let endLoad = new Promise(resolve => { autoLog = resolve })


export default {
    namespaced: true,

    state: {
        user: null
    },

    getters: {

        user: state => state.user,

        isLogin: state => state.user !== null,

        ready: () => endLoad,

        checkRole: state => allowedRoles => state.user !== null && allowedRoles.some(role => state.user.roles.includes(role))

    },

    mutations: {
        setUser(state, user) {
            state.user = user

        }
    },

    actions: {
        async login({ commit, dispatch }, { login, password }) {

            try {

                let { ok, data } = await userApi.login(login, password);

                if (ok && data.res) {

                    // save token in localstorage
                    setTokens(data.accessToken)

                    //  picking user's data up from token

                    let { login, name, roles } = getJWTPayload(data.accessToken)

                    commit('setUser', { login, name, roles });

                }

                return data;

            } catch {
                dispatch('alerts/add', { text: "Error by logging", timeout: DALAY }, { root: true })
            }

        },

        async autoLogin({ commit, dispatch }) {

            try {
                let { ok, data } = await userApi.check();

                if (ok && data) {

                    let { login, name, roles } = getJWTPayload(getAccessToken())

                    commit('setUser', { login, name, roles });

                } else {
                    commit('setUser', null);
                }

                autoLog()

                return data;

            } catch (e) {
              
                console.log(e)

            }

        },

        async logOut({ commit, dispatch }) {

            await userApi.logOut()

            commit('setUser', null)

        },

    }

}
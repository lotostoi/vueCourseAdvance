//import * as userApi from "@/api/user"

import { setTokens, getJWTPayload, getAccessToken } from "../utils/tokens"

export default userApi => {

    let autoLog
    let endLoad = new Promise(resolve => { autoLog = resolve })

    return {

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
                    console.log(ok)
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

            async autoLogin({ commit }) {

                try {
                    if (process.isClient) {
                        let { ok, data } = await userApi.check();

                        if (ok && data) {
                            let { login, name, roles } = getJWTPayload(getAccessToken())
                            commit('setUser', { login, name, roles });
                        } else {
                            commit('setUser', null);
                        }


                        //   return data;
                    }

                    autoLog()


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
}
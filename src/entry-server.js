import Vue from 'vue'
import App from './App.vue'

import store from './store';
import router from "./router"

const creatApp = () => {
    return new Promise(
        async (resolve, reject) => {

            try {

                store.dispatch('user/autoLogin')
                await store.dispatch('cotalog/getGoods')

                const app = new Vue({
                    el: '#app',
                    render: h => h(App),
                    store,
                    router
                })


                resolve(app)


            } catch (e) {

                reject(new Vue({
                    template: `<h1>We have following error: ${e} </h1>`
                })
                )

            }

        }
    )
}

export default creatApp



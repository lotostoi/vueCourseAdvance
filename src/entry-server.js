import Vue from 'vue'
import App from './App.vue'

import store from './store';
import router from "./router"


const creatApp = ({ url }) => new Promise((resolve, reject) => {

    

    router.onReady(async () => {
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

            const app = new Vue({
                template: `<h1>We have following error: ${e} </h1>`
            })
            reject(app)

        }

    })
    
    router.push(url)

})

export default creatApp



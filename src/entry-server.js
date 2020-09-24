import Vue from 'vue'
import App from './App.vue'

import createStore from './store';
import routerFunc from "./router"
import createHttp from "@/utils/http"
import createApi from "@/api/index"
import interceptor from "@/utils/interceptor"



const createApp = ({ url }) => new Promise(async (resolve, reject) => {

    let http = createHttp()
    let api = createApi(http)
    const store = createStore(api)
    const router = routerFunc(store)

    interceptor(store, router, http)

    store.dispatch('user/autoLogin')
    let getData = await store.dispatch('cotalog/getGoods')

  


   store.getters['cotalog/goods'].forEach(good => router.getMatchedComponents(`/cotalog/${good.id}`)[0].waite(store, good.id))
      
    

    router.onReady(async () => {
        try {

           // await getData

            new Vue({
                el: '#app',
                render: h => h(App),
                store,
                router,
                created() {
                    //this.$store.getters['cotalog/goods'].forEach(good => console.log(router.getMatchedComponents(`/cotalog/${good.id}`)[0].waite(store, good.id)))
                    resolve(this)
                }
            })

        } catch (e) {

            const app = new Vue({
                template: `<h1>We have following error: ${e} </h1>`
            })
            reject(app)

        }

    })

    router.push(url)

})

export default (context) => new Promise(async res => {

    const app = await createApp(context)

    context.rendered = () => context.title = app.$store.getters['title/title']

 

    res(app)

})





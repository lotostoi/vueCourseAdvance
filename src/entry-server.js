import Vue from 'vue'
import App from './App.vue'

import createStore from './store';
import routerFunc from "./router"
import createHttp from "@/utils/http"
import createApi from "@/api/index"
import interceptor from "@/utils/interceptor"


import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/css/bootstrap-vue.css'

const createApp = ({ url }) => new Promise(async (resolve, reject) => {

  let http = createHttp()
  let api = createApi(http)
  const store = createStore(api)
  const router = routerFunc(store)

  interceptor(store, router, http)

  store.dispatch('user/autoLogin')
  let getData = store.dispatch('cotalog/getGoods')

  router.onReady(async () => {
    try {

      await getData

      new Vue({
        el: '#app',
        render: h => h(App),
        store,
        router,
        created() {
          resolve({ app: this, store, router, error: null })
        }
      })

    } catch (e) {

      const app = new Vue({
        template: `<h1>We have following error: ${e} </h1>`
      })
      reject(resolve({ app, store, router, error: 500 }))

    }

  })

  router.push(url)

})

export default (context) => new Promise(async res => {

  const { app, store, router } = await createApp(context)

  context.rendered = () => {
    context.title = store.getters['title/title']
    context.state = store.state
  }

  let { params } = router.currentRoute

  Promise.all(
    router.getMatchedComponents().filter(cmp => cmp.waite).map(cmp => cmp.waite(store, params.id))
  ).then(() => {
    let routers = router.getMatchedComponents()
    let error = router.length === 0  || (('components' in routers[0]) && ('Spa404' in routers[0].components)) ? 404 :null 
    res({app, error :error})
  })



})





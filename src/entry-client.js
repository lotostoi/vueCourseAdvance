import Vue from 'vue'
import App from './App.vue'

import storeFunc from './store';
import routerFunc from "./router"
import createHttp from "@/utils/http"
import interceptor from "@/utils/interceptor"
import createApi from "@/api/index"

import 'bootstrap/dist/css/bootstrap.css'

let http = createHttp()
let api = createApi(http)
const store = storeFunc(api)
const router = routerFunc(store)

interceptor(store, router, http)

store.dispatch('user/autoLogin')
store.dispatch('cotalog/getGoods')

  .then(() => {
    new Vue({
      el: '#app',
      render: h => h(App),
      store,
      router
    })

  })
  .catch((err) => document.querySelector('body').innerHTML = err)
  .finally(() => store.dispatch('cart/getCart'))







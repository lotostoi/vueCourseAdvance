import Vue from 'vue'
import App from './App.vue'

import store from './store';
import router from "./router"

import 'bootstrap/dist/css/bootstrap.css'



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







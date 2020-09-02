import Vue from 'vue'
import App from './App.vue'

import store from './store';
import router from "./router"

import 'bootstrap/dist/css/bootstrap.css'

store.dispatch('cotalog/getGoods')
store.dispatch('cart/getCart')


new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})



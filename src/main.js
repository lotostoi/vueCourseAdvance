import Vue from 'vue'
import App from './App.vue'

import store from './store';
import router from "./router"

import 'bootstrap/dist/css/bootstrap.css'
import { BCardBody } from 'bootstrap-vue';


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






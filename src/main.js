import Vue from 'vue'
import App from './App.vue'

import store from './store';
import router from "./router"

import 'bootstrap/dist/css/bootstrap.css'





/* import { addResponseHandler } from '@/api/http';

addResponseHandler(

  response => {

    if ('errorSuppression' in response.config && response.status === 200) {

      response.data = { ok: true, data: response.data };
    }

    return response;
  },

  error => {
    let es = error.config.errorSuppression;

    console.log('errorSup')

    if (error.response.status === 401 && !('check' in es)) {

      store.dispatch('user/logOut')

      store.dispatch['cart/clearCartSimple'] = []

      store.dispatch['orders/clearOrders'] = []

      return router.push({ name: 'Login' })

    }


    if (!('errorSuppression' in error.config)) {

      return Promise.reject(error);
    }

    if ('exclude' in es && es.exclude.includes(error.response.status)) {

      return Promise.reject(error);
    }


    if ('text' in es) {

      let alert = { text: `Ошибка ответа от сервера ${es.text}` };

      if ('critical' in es) {

        alert.text += ' Рекомендуем перезагрузить страницу!';
      }
      else {

        alert.timeout = 3000;

      }

      store.dispatch('alerts/add', alert);

    }

    return { data: { ok: false } };
  }

);
 */




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






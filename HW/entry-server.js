import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

async function createApp(options) {

  const URL = options.url

  router.push(URL)

  return new Promise(resolve => {

    router.onReady(() => {

      const obj = new Vue({
        router,
        render: h => h(App)
      })

      resolve(obj)

    })

  })
}

export default createApp;
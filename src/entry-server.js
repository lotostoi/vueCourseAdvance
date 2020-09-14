import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

function createApp(){
  return new Vue({
    render: h => h(App)
  });
}

export default createApp;
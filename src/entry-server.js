import Vue from 'vue'
import App from './App.vue'

import craetStore from './store';
import routerFunc from "./router"

const store = craetStore()
const router = routerFunc()

const creatApp = ({ url }) => new Promise((resolve, reject) => {

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

    const app = await creatApp(context)
 
    context.rendered = () => context.title = app.$store.getters['title/title']

    console.log( app.$store.getters['title/title'])

    res(app)

})





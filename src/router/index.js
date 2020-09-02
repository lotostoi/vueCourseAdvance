
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Cart from "@/views/Cart"
import Cotalog from "@/views/Cotalog"
import Main from "@/views/Main"
import Spa404 from "@/views/404"
import PageGood from "@/views/PageGood"


const routes = [
    {
        path: "/AlexanderPlotnitcov.io/",
        component: Main
    },
    {
        name: 'Main',
        path: "/",
        component: Main
    },
    {
        name: 'Cotalog',
        path: "/cotalog",
        component: Cotalog
    },
    {
        name: 'Cart',
        path: "/toCart",
        component: Cart
    },
    {   name: 'Good',
        path: '/cotalog/:id',
        component: PageGood
    },
    {
        name: '404',
        path: "*",
        component: Spa404
    },
]


export default new VueRouter({
    mode: 'history',
    routes
})

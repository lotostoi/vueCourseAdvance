
import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store';

Vue.use(VueRouter)

import Cart from "@/views/Cart"
import Cotalog from "@/views/Cotalog"
import Main from "@/views/Main"
import Spa404 from "@/views/404"
import PageGood from "@/views/PageGood"
import Login from "@/views/Login"
import OfficeBase from '@/views/office/Base';
import OfficeIndex from '@/views/office/Index';
import OfficeOrders from '@/views/office/Orders';



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
    {
        name: 'Good',
        path: '/cotalog/:id',
        component: PageGood
    },
    {
        name: 'Login',
        path: "/login",
        component: Login
    },
    {  ///  это решение работает, но мне не нравится что эта ссылка всегда немного тормазит даже без (sleep)
        path: '/office',
        component: OfficeBase,
        meta: { auth: true },
        beforeEnter : async (to, from, next) => {

            await store.dispatch('user/autoLogin')

            if (to.path === '/office') {

                if (store.getters['user/user']) { next() }
                else {
                    next({ name: "Login" })
                }

            } else {
                next()
            }
        },
        children: [
            {
                name: 'office',
                path: '',
                component: OfficeIndex
            },
            {
                name: 'office-orders',
                path: 'orders',
                component: OfficeOrders
            }
        ]
    },
    {
        name: '404',
        path: "*",
        component: Spa404
    },
]


const router = new VueRouter({
    mode: 'history',
    routes,

})




export default router
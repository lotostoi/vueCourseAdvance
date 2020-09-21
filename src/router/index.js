
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
    {  
        path: '/office',
        component: OfficeBase,
        meta: { auth: true },
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


const routerFunc = () => new VueRouter({
    mode: 'history',
    routes,

})


routerFunc().beforeEach(async (to, from, next) => {

    if (to.path.includes("/office")) {

        await store.getters['user/ready']

        console.log('test')

        if (store.getters['user/user']) {

            next()
        }
        else {

            next({ name: "Login" })
        }

    } else {
        next()
    }

})



export default routerFunc
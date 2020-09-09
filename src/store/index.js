import Vue from 'vue';
import Vuex from 'vuex';

import router from "@/router"

Vue.use(Vuex);

import Cart from "./cart"
import Cotalog from "./cotalog"
import Alerts from "./alerts"
import User from "./user"
import Orders from "./orders"


import { addResponseHandler } from '@/api/http';

const store = new Vuex.Store({

	modules: {
		cart: Cart,
		cotalog: Cotalog,
		alerts: Alerts,
		user: User,
		orders: Orders
	},


	strict: process.env.NODE_ENV !== 'production'
});


addResponseHandler(

	response => {

		if ('errorSuppression' in response.config && response.status === 200) {

			response.data = { ok: true, data: response.data };
		}

		return response;
	},

	error => {
		let es = error.config.errorSuppression;

		if (!('errorSuppression' in error.config)) {

			return Promise.reject(error);
		}

		if ('exclude' in es && es.exclude.includes(error.response.status)) {

			return Promise.reject(error);
		}


		if (error.response.status === 401 && !('check' in es)) {



			store.dispatch('user/logOut')

			store.dispatch['cart/clearCartSimple'] = []
			
			store.dispatch['orders/clearOrders'] = []

			return router.push({ name: 'Login' })

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


export default store
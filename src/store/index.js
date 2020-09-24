import Vue from 'vue';
import Vuex from 'vuex';



Vue.use(Vuex);

import Cart from "./cart"
import Cotalog from "./cotalog"
import Alerts from "./alerts"
import User from "./user"
import Orders from "./orders"
import Title from "./title"


//import { addResponseHandler } from '@/api/http';




export default api => {


	const store = new Vuex.Store({
		modules: {
			cart: Cart(api.cart),
			cotalog: Cotalog(api.cotalog),
			alerts: Alerts,
			user: User(api.user),
			orders: Orders(api.orders),
			title: Title,
		},


		strict: process.env.NODE_ENV !== 'production'
	})

	

	return store
};



import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Cart from "./cart"
import Cotalog from "./cotalog"
import Alerts from "./alerts"
import User from "./user"

export default new Vuex.Store({

	modules: {
		cart: Cart,
		cotalog: Cotalog,
		alerts: Alerts,
		user: User,
	},

	
	strict: process.env.NODE_ENV !== 'production'
});
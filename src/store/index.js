import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Cart from "./cart"
import Cotalog from "./cotalog"

export default new Vuex.Store({

	modules: {
		cart: Cart,
		cotalog: Cotalog
	},

	
	strict: process.env.NODE_ENV !== 'production'
});
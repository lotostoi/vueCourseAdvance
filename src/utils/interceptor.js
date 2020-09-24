export default (store, router, http)=> http.interceptors.response.use(
	response => {
		if ('errorSuppression' in response.config && response.status === 200) {
			response.data = { ok: true, data: response.data };
		}
		return response;
	},

	error => {
//	console.log(error)

		if (!('response' in error) || !(error.response) || !('config' in error) || !('errorSuppression' in error.config)) {
			return Promise.reject(error);
		}

		let es = error.config.errorSuppression;

		if (error.response.status === 401 && !('check' in es)) {
			store.dispatch('user/logOut')
			store.dispatch['cart/clearCartSimple'] = []
			store.dispatch['orders/clearOrders'] = []
			return router.push({ name: 'Login' })
		}

		if ('exclude' in es && es.exclude.includes(error.response.status)) {
			return Promise.reject(error);
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
 
    
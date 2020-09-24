
export default myhttp => ({

    async all(token) {

        let { data } = await myhttp('cart.php', {
            params: { token },
            errorSuppression: { text: 'при загрузке корзины', critical: true }
        });
        return data;

    },

    async add(token, id) {

        let { data } = await myhttp.post('cart.php', { token, id }, {
            errorSuppression: { text: 'при добавлении товара' }
        });
        return data;

    },

    async change(token, id, count) {

        let { data } = await myhttp.put('cart.php', { token, id, cnt: count }, {
            errorSuppression: { text: 'при изменении количества товара', exclude: [422] }
        });
        return data;

    },

    async remove(token, id) {

        let { data } = await myhttp.delete('cart.php', {
            params: { token, id },
            errorSuppression: { text: 'при удалении товара' }
        });
        return data;

    },

    async clear(token) {

        let { data } = await myhttp.delete('cart.php', {
            params: { token },
            errorSuppression: { text: 'при очистке корзины' }
        });
        return data;

    }
})


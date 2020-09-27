export default myhttp => ({
    async all() {

        let { data } = await myhttp('products.php')
        return data

    },

    async getRating(id) {

        let { data } = await myhttp('ratings.php', {
            params: { id },
            errorSuppression: { text: 'при получении рейтинга товара' }
        } )
       
        return data

    },

    async sentRating(id, mark) {

        let { data } = await myhttp.put('ratings.php', { id: id, mark: mark }, { errorSuppression: { text: 'при отправке рейтинга. Повторите действие, если ошибка повториться, отбратитесь в слушжбу поддержки...' } })
        return data

    }

})






export default myhttp => ({
    async all() {

        let { data } = await myhttp.get('orders.php', {

            errorSuppression: { text: 'при разлогинивании' }

        });

        return data;

    }
})


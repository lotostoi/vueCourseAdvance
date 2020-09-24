


export default myhttp => ({

    async login(login, password) {
        let { data } = await myhttp.post('auth/login.php', { login, password }, {
            errorSuppression: { text: 'при попытке логина' }
        });
        return data;
    },

    async check() {
        let { data } = await myhttp.get('auth/check.php?sleep', {
            errorSuppression: { check: true }
        });
        return data;
    },

    async logOut() {

        let { data } = await myhttp.get('auth/logout.php', {
            errorSuppression: { text: 'при разлогинивании' }
        })
        return data

    }

})


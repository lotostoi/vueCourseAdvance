import myhttp from "@/api/http"


export async function login(login, password) {
    let { data } = await myhttp.post('auth/login.php', { login, password }, {
        errorSuppression: { text: 'при попытке логина' }
    });
    return data;
}

export async function check() {
    let { data } = await myhttp.get('auth/check.php?sleep', {
        errorSuppression: { check: true }
    });
    return data;
}

export async function logOut() {

    let { data } = await myhttp.get('auth/logout.php', {
        errorSuppression: { text: 'при разлогинивании' }
    })
    return data

}
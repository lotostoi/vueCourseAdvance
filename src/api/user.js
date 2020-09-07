import myhttp from "@/api/http"

export async function login(login, password) {

    let { data } = await myhttp.post('auth/login.php', {login, password})
    return data

}

export async function check() {

    let { data } = await myhttp.get('auth/check.php?sleep')
    return data

}

export async function logOut() {

    let { data } = await myhttp.get('auth/logout.php')
    return data

}
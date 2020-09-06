import  myhttp  from "@/api/http"



export async function all(oldToken) {

    return await myhttp(`cart.php?token=${oldToken}`)

}

export async function add(oldToken, id) {

    return await myhttp.post(`cart.php?token=${oldToken}&id=${id}`)

}

export async function change(oldToken, id, cnt) {

    return await myhttp.put(`cart.php?token=${oldToken}&id=${id}&cnt=${cnt}`)

}

export async function remove(oldToken, id) {

    return await myhttp.delete(`cart.php?token=${oldToken}&id=${id}`)

}

export async function clear(oldToken) {

    return await myhttp.delete(`cart.php?token=${oldToken}`)

}
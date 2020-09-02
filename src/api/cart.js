import { myhttp } from "@/api/http"



export async function all(oldToken) {

    return await myhttp(`cart/load.php?token=${oldToken}`)

}

export async function add(oldToken, id) {

    return await myhttp(`cart/add.php?token=${oldToken}&id=${id}`)

}

export async function change(oldToken, id, cnt) {

    return await myhttp(`cart/change.php?token=${oldToken}&id=${id}&cnt=${cnt}`)

}

export async function remove(oldToken, id) {

    return await myhttp(`cart/remove.php?token=${oldToken}&id=${id}`)

}

export async function clear(oldToken) {

    return await myhttp(`cart/clean.php?token=${oldToken}`)

}
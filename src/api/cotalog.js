import myhttp from "@/api/http"



export async function all() {

    let { data } = await myhttp('products.php')
    return data

}


export async function getRating(id) {

    let { data } = await myhttp('ratings.php', { params: { id } })

    return data

}

export async function sentRating(id, mark) {

    let { data } = await myhttp.put('ratings.php', { id: id, mark: mark }, { errorSuppression: { text: 'при отправке рейтинга. Повторите действие, если ошибка повториться, отбратитесь в слушжбу поддержки...' } })

    return data

}


import myhttp from "@/api/http"



export async function all( token ) {

    let { data } = await myhttp.get('cart.php', {

        params: { token },

        errorSuppression: { text: 'при загрузке корзины', critical: true }

    });

    return data;

}

export async function add(token, id) {

    let { data } = await myhttp.post('cart.php', { token, id }, {

        errorSuppression: { text: 'при добавлении товара' }

    });

    return data;

}

export async function change(token, id, count) {

    let { data } = await myhttp.put('cart.php', { token, id, cnt: count }, { 

        errorSuppression: { text: 'при изменении количества товара', exclude: [422] }

    });

    return data;

}

export async function remove(token, id) {

    let { data } = await myhttp.delete('cart.php', {

        params: { token, id },

        errorSuppression: { text: 'при удалении товара' }

    });

    return data;

}

export async function clear(token) {


    let { data } = await myhttp.delete('cart.php', {

        params: { token },

        errorSuppression: { text: 'при очистке корзины'}

    });

    return data;

   

}
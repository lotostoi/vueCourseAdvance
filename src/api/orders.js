import myhttp from "@/api/http"

export async function all() {

    let { data } = await myhttp.get('orders.php', {

        errorSuppression: { text: 'при разлогинивании' }

    });
    
    return data;

}


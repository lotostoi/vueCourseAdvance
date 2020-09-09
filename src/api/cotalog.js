import myhttp from "@/api/http"



export async function all() {

    let { data } = await myhttp('products.php')
    return data

}


import { myhttp } from "@/api/http"



export async function all() {

    let data = await myhttp('products/all.php')
    return data

}
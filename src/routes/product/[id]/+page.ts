export const prerender = true;
import type { PageLoad } from "./$types";
import type { Product } from "../../../interfaces/ClothingStore";
import { request } from "../../../stores/apiRequests";

export const load: PageLoad = async ({ params }) => { 
    const product = await request<Product>(`https://fakestoreapi.com/products/${params.id}`)

    return {
        product
    }
}
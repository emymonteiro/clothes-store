import type { PageLoad } from "./$types";
import type { Product } from "../interfaces/ClothingStore";
import { request } from "../store/ApiRequests";

export const load: PageLoad = async () => {
    const title = 'List of available produtcts';
    const products = await request<Product[]>('https://fakestoreapi.com/products')

    const filteredProducts = products.filter((el) => {
        return(el.category === "men's clothing" || el.category === "women's clothing")
    })
    
    return {
        title,
        filteredProducts
    }

};
import { writable } from "svelte/store"
import { persistStore } from "./persistStore"

import type { Product } from "../interfaces/ClothingStore"

export const isOpen = writable<boolean>(false)

export function handleButton() {
    isOpen.update(open => !open)
}

export const shoppingCart = persistStore('shoppingCart', [] as Product[])

export const handleCart = {
    addToCart: (product: Product) => {
        const newProduct = { ...product, amount: 1 } as Product

        shoppingCart.update(items => {
            const itemIndex = items.findIndex(item => item.id === newProduct.id);
            const itemToUpdate = items[itemIndex];
            if (itemToUpdate && itemToUpdate.amount !== undefined) {
                itemToUpdate.amount += 1;
                return items
            } else {
                return [...items, newProduct]
            }
        })
    },
    removeItem: (product: Product) => {
        shoppingCart.update(items => items.filter(list => list.id !== product.id))
    },
    removeUnity: (product: Product) => {
        shoppingCart.update(items => {
            const itemIndex = items.findIndex(item => item.id === product.id)
            const itemToUpdate = items[itemIndex]
            if (itemToUpdate && itemToUpdate.amount !== undefined) {
                itemToUpdate.amount -= 1
                if (itemToUpdate.amount < 1) return items.filter(list => list.id !== product.id)
                else return items
            }
            return items
        })
    },
    clearCart: () => {
        shoppingCart.update(items => {
            return [] as Product[]
        })
    }
}

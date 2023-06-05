import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { browser } from '$app/environment';

export const persistStore = <T>(key: string, initial: T) =>{
    const data: T = fromLocalStorage(key, initial)

    const store: Writable<T> = writable(data, () => {
        const unsubscribe = store.subscribe(value => {
            if (browser) {
			    const storageValue = (typeof value === 'object') 
				? JSON.stringify(value)
				: value
				
			    window.localStorage.setItem(key, storageValue as string)
	        }
        })
        return unsubscribe
    })
    return store
}

function fromLocalStorage<T>(storageKey: string, fallbackValue: T) {
	if (browser) {
		const storedValue = window.localStorage.getItem(storageKey)
		
		if (storedValue !== 'undefined' && storedValue !== null) {
			return (typeof fallbackValue === 'object') 
				? JSON.parse(storedValue)
				: storedValue
		}
	}
	
	return fallbackValue
}
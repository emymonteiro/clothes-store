<script lang="ts">
	import type { Product } from '../interfaces/ClothingStore';
	import { isOpen, handleButton, shoppingCart, handleCart } from '../stores/shoppingCart';
	import IconifyIcon from '@iconify/svelte';
	import CartItem from './CartItem.svelte';
	import { page } from '$app/stores';
	import { redirectRoute } from '../stores/apiRequests';

	function gotoRoute(route: string) {
		redirectRoute($page.url.origin, route);
	}

	const getTotal = (ShoppingCart: Product[]) => {
		return ShoppingCart.reduce((prev, value) => {
			return prev + (value.amount || 0) * Number(value.price);
		}, 0).toFixed(2);
	};
</script>

<div
	class={`${
		$isOpen ? 'right-0' : '-right-full'
	} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px[35px] content-stretch flex flex-col`}
>
	<div class="flex items-center justify-between py-6 border-b">
		<div class="open-sans uppercase text-sm font-semibold">
			Shopping Bag ({$shoppingCart.length})
		</div>
		<button
			on:click={() => handleButton()}
			class="cursor-pointer w-8 h-8 flex justify-center items-center"
		>
			<IconifyIcon icon="ph:arrow-right-bold" class="text-2xl" />
		</button>
	</div>
	<div class="flex flex-col justify-between h-full">
		<div
			class="overflow-y-auto flex flex-col gap-y-2 max-h-[520px] lg:max-h-[640px] overflow-x-hidden border-b"
		>
			{#each $shoppingCart as cartItem}
				<div class="border-b">
					<CartItem {cartItem} />
				</div>
			{/each}
		</div>

		<div class="flex flex-col w-full items-center gap-3 py-3 open-sans">
			<div class="flex items-center justify-between w-full font-bold open-sans text-lg uppercase">
				<div class="text-md font-semibold">
					Total: $ {getTotal($shoppingCart)}
				</div>
				<button
					class="ml-auto transition bg-red-500 p-2"
					title="Clear cart"
					on:click={() => handleCart.clearCart()}
				>
					<IconifyIcon icon="ion:trash-sharp" class="text-white" />
				</button>
			</div>
			<button
				class="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
				on:click={() => gotoRoute('/')}>Checkout</button
			>
			<button
				class="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
				on:click={() => handleButton()}>Continue shopping</button
			>
			<button on:click={() => gotoRoute('/')} class="underline"> View cart </button>
		</div>
	</div>
</div>

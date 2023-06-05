<script lang="ts">
	import type { Product } from '../interfaces/ClothingStore';
	import { isOpen, handleButton, shoppingCart, handleCart } from '../stores/shoppingCart';
	import IconifyIcon from '@iconify/svelte';
	import CartItem from './CartItem.svelte';

	shoppingCart.subscribe((val) => {
		console.log(val);
	});

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
		<div class="uppercase text-sm font-semibold">Shopping Bag ({$shoppingCart.length})</div>
		<button
			on:click={() => handleButton()}
			class="cursor-pointer w-8 h-8 flex justify-center items-center"
		>
			<IconifyIcon icon="ph:arrow-right-bold" class="text-2xl" />
		</button>
	</div>
	<div class="flex flex-col justify-between h-full">
		<div class="max-h-[650px] overflow-auto">
			{#each $shoppingCart as cartItem}
				<div class="border-b">
					<CartItem {cartItem} />
				</div>
			{/each}
		</div>

		<div class="items-center flex flex-col w-full justify-center gap-3 py-5">
			<div class="flex items-center justify-between w-full font-bold open-sans text-lg uppercase">
				<div class="ml-auto">
					<span class="text-md">Total:</span> $ {getTotal($shoppingCart)}
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
				class="w-full bg-lime-600 shadow text-white rounded-md p-1 open-sans tracking-wide font-bold"
				>Checkout</button
			>
			<button
				class="w-full bg-purple-900 shadow text-white rounded-md p-1 open-sans tracking-wide font-bold"
				>Continue shopping</button
			>
			<button class="underline"> View cart </button>
		</div>
	</div>
</div>

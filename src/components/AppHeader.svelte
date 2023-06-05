<script lang="ts">
	import IconifyIcon from '@iconify/svelte';
	import { handleButton, shoppingCart } from '../stores/shoppingCart';
	import type { Product } from '../interfaces/ClothingStore';

	const getLenght = (object: Product[]) => {
		return object.length;
	};
</script>

<header class="bg-pink-50 flex items-center justify-center p-5">
	<h1 class="great-vibe text-4xl text-red-400 ml-auto">Clothing Store</h1>
	<button
		class="ml-auto relative hover:text-red-400 cursor-pointer"
		on:click={() => handleButton()}
	>
		<IconifyIcon class="h-10 w-10" icon="iconamoon:shopping-bag-thin" />
		{#if getLenght($shoppingCart) > 0}
			<div
				class="text-xs -bottom-0 -right-0 font-bold bg-red-500 text-white rounded-full absolute w-5 h-5 flex items-center justify-center"
				style="font-size: 0.6rem;"
			>
				{getLenght($shoppingCart) > 9 ? '+9' : getLenght($shoppingCart)}
			</div>
		{/if}
	</button>
</header>

<script lang="ts">
	import IconifyIcon from '@iconify/svelte';
	import { handleButton, shoppingCart } from '../stores/shoppingCart';
	import type { Product } from '../interfaces/ClothingStore';

	const getLenght = (object: Product[]) => {
		return object.length;
	};

	let y: number;
</script>

<svelte:window bind:scrollY={y} />

<header
	class={`${y > 60 ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}
>
	<div class="container mx-auto flex items-center justify-between h-full">
		<a href="/" class="great-vibe text-4xl text-red-400 ml-auto">Clothing Store</a>
		<button
			class="ml-auto relative hover:text-red-400 cursor-pointer"
			on:click={() => handleButton()}
		>
			<IconifyIcon class="h-10 w-10" icon="iconamoon:shopping-bag-thin" />
			{#if getLenght($shoppingCart) > 0}
				<span
					class="text-xs -bottom-0 -right-0 font-bold text-white bg-red-500 w-5 h-5 rounded-full absolute flex items-center justify-center"
					style="font-size: 0.6rem;"
				>
					{getLenght($shoppingCart) > 9 ? '+9' : getLenght($shoppingCart)}
				</span>
			{/if}
		</button>
	</div>
</header>

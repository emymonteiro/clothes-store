<script lang="ts">
	import type { Product } from '../interfaces/ClothingStore';
	import { goto } from '$app/navigation';
	import IconifyIcon from '@iconify/svelte';
	import { handleCart } from '../stores/shoppingCart';
	export let product: Product;
	const { id, image, category, title, price } = product;

	function productRoute(id: number) {
		goto(`product/${id}`);
	}
</script>

<div>
	<div
		class="border border-[#e4e4e4] h-[300px] mb-4
	relative overflow-hidden group transition"
	>
		<div class="w-full h-full flex justify-center items-center mx-auto">
			<img
				class="max-h-[160px] group-hover:scale-110
				transition duration-300"
				src={image}
				alt=""
			/>
		</div>
		<div
			class="absolute top-6 lg:top-3 right-11 group-hover:right-5 lg:group-hover:right-2 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
		>
			<button on:click={() => handleCart.addToCart(product)}>
				<div class="flex justify-center items-center text-white w-12 h-12 bg-red-400">
					<IconifyIcon class="text-3xl" icon="ic:round-plus" />
				</div>
			</button>
			<button
				on:click={() => productRoute(id)}
				class="w-12 h-12 bg-white flex justify-center items-center drop-shadow-xl"
			>
				<IconifyIcon icon="mdi:eye" />
			</button>
		</div>
	</div>
	<div>
		<div class="text-sm capitalize text-gray-500 mb-1">{category}</div>
		<button on:click={() => productRoute(id)} class="text-left">
			<h2 class="font-semibold mb-1">{title}</h2>
		</button>
		<div class="font-semibold">$ {price}</div>
	</div>
</div>

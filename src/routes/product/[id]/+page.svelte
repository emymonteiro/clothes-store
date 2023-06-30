<script lang="ts">
	import { page } from '$app/stores';
	import { handleCart } from '../../../stores/shoppingCart.js';

	export let data;
</script>

<section class="pt-32 pb-12 lg:py-32 min-h-screen flex items-center">
	<div class="container mx-auto">
		<div class="flex flex-col lg:flex-row items-center">
			<div class="flex flex-1 justify-center items-center mb-8 lg:mb-0">
				<img class="max-w-[200px] lg:max-w-sm" src={data.product.image} alt="" />
			</div>
			<div class="flex-1 text-center lg:text-left">
				<h1 class="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
					{data.product.title}
				</h1>
				<div class="text-xl text-red-500 font-medium mb-6">$ {data.product.price}</div>
				<p class="mb-8">{data.product.description}</p>
				<button
					on:click={() => handleCart.addToCart(data.product)}
					class="bg-primary py-4 px-8 text-white"
				>
					Add to cart
				</button>
			</div>
		</div>
	</div>
</section>

<script lang="ts">
	import Product from '../components/Product.svelte';

	export let data;
</script>

<section class="py-16">
	<div class="container mx-auto">
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
		max-w-sm mx-auto md:max-w-none md:mx-0"
		>
			{#each data.filteredProducts as item}
				<Product product={item} />
			{/each}
		</div>
	</div>
</section>

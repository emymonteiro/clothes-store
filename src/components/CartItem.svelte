<script lang="ts">
	import type { Product } from '../interfaces/ClothingStore';
	import { goto } from '$app/navigation';
	import IconifyIcon from '@iconify/svelte';
	import { handleCart } from '../stores/shoppingCart';
	export let cartItem: Product;
</script>

<div class="flex">
	<div class="w-full min-h-[150px] flex items-center gap-x-4">
		<button on:click={() => goto(`/product/${cartItem.id}`)}>
			<img class="max-w-[80px]" src={cartItem.image} alt="" />
		</button>
		<div class="flex flex-col w-full">
			<div class="flex justify-between pb-1">
				<button
					on:click={() => goto(`/product/${cartItem.id}`)}
					class="open-sans text-xs uppercase font-medium max-w-[240px] hover:underline text-left"
				>
					{cartItem.title}
				</button>
				<button on:click={() => handleCart.removeItem(cartItem)} class="text-xl mt-1">
					<IconifyIcon icon="ion:trash-sharp" class="text-gray-500 hover:text-red-500 transition" />
				</button>
			</div>
			<div class="flex flex-col gap-x-2 gap-y-1 w-full">
				<div class="text-sm text-gray-400 open-sans">Unity: $ {cartItem.price}</div>
				<div class="font-bold">
					Total: $ {((cartItem.amount || 1) * Number(cartItem.price)).toFixed(2)}
				</div>
			</div>
			<div class="flex items-center h-[36px] w-full justify-between bg-gray-200 mt-1">
				<button class="p-3" on:click={() => handleCart.removeUnity(cartItem)}>
					<IconifyIcon icon="material-symbols:remove" />
				</button>
				<div class="open-sans font-normal">
					{cartItem.amount}
				</div>
				<button class="p-3" on:click={() => handleCart.addToCart(cartItem)}>
					<IconifyIcon icon="material-symbols:add" />
				</button>
			</div>
		</div>
	</div>
</div>

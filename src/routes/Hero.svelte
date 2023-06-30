<script lang="ts">
	import { goto } from '$app/navigation';
	import woman from '$lib/assets/woman.png';
	const toImageUrl = (processedImagePath: string) =>
		`url('${processedImagePath.slice(1).replaceAll('\\', '/')}')`;
</script>

<section class="h-[800px] pt-24 bg-orange-100 relative select-none open-sans">
	<div class="container mx-auto flex justify-around h-full">
		<div class="flex flex-col justify-center">
			<div class="font-semibold flex items-center uppercase">
				<div class="w-10 h-[2px] bg-red-500 mr-3" />
				<div>New Trend</div>
			</div>
			<h1 class="text-[70px] leading-[1.1] font-light mb-4">
				SUMMER SALE STYLISH <br />
				<span class="font-semibold">WOMEN</span>
			</h1>
			<button
				on:click={() => goto('/')}
				class="self-start uppercase font-semibold border-b-2 border-primary"
			>
				Discover More
			</button>
		</div>
		<div class="hidden lg:block relative">
			<div class="flex items-end h-full">
				<img class="z-1" src={woman} alt="" />
			</div>
			<span
				class="kablammo hidden 3xl:block text-yellow-300 opacity-30 rotate-90 left-[70%] bottom-[50%] absolute text-8xl"
				>Summer</span
			>
		</div>
	</div>
</section>

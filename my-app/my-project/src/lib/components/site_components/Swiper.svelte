<script lang="ts">
	import { PUBLIC_DIRECTUS_ASSETS } from '$env/static/public';
	import { onMount } from 'svelte';

	import { register } from 'swiper/element/bundle';

	import IoIosArrowRoundForward from 'svelte-icons/io/IoIosArrowRoundForward.svelte';
	import IoIosArrowRoundBack from 'svelte-icons/io/IoIosArrowRoundBack.svelte';
	// register Swiper custom elements
	register();

	export let files;
	export let slidesPerView = 1;
	export let aspectRatio = '16 / 9';
	let assets = PUBLIC_DIRECTUS_ASSETS;

	// export let buttonId = "1"
	onMount(() => {
		const swiper = document.querySelector('#swiper');
		const buttonNext = document.querySelector('#slider_next');
		const buttonBack = document.querySelector('#slider_back');

		buttonNext.addEventListener('click', () => {
			swiper.swiper.slideNext();
		});

		buttonBack.addEventListener('click', () => {
			swiper.swiper.slidePrev();
		});
	});
	// console.log(files);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- breakpoints={{ 768: { slidesPerView: 2, }, 1280:{slidesPerView: 4,} }} -->
<swiper-container
	autoplay-delay="2500"
	slides-per-view={slidesPerView}
	space-between="16"
	speed="500"
	scrollbar="true"
	style="aspect-ratio: {aspectRatio};"
	id="swiper"
>
	{#each files as item}
		<swiper-slide class=" bg-base-content/5 rounded-lg overflow-hidden">
			<img
				class=" h-full w-full object-cover object-center"
				src="{assets + item.directus_files_id}?width=1024&format=webp"
				alt=""
			/>
		</swiper-slide>
	{/each}
</swiper-container>

<div class="flex justify-center w-full py-2 gap-2">
	<button class="btn btn-sm btn-ghost flex items-center" id={'slider_back'}>
		<!-- <span>Prev</span> -->
		<div class="icon">
			<IoIosArrowRoundBack class="ml-2" />
		</div>
	</button>
	<button class="btn btn-sm btn-ghost flex items-center" id={'slider_next'}>
		<!-- <span>Next</span> -->
		<div class="icon">
			<IoIosArrowRoundForward class="ml-2" />
		</div>
	</button>
</div>

<style lang="postcss">
	.icon {
		width: 2.5rem;
		height: 2.5rem;
	}
	.icon {
		@apply text-sabbath;
	}
</style>

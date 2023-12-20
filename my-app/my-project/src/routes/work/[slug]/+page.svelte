<script lang="ts">
	import Swiper from '$lib/components/site_components/Swiper.svelte';

	export let data;

	console.log(data);

	let gallery = data.data[0].gallery;

	let slides = 1;
</script>

<main class="page_container py-10">
	<div class="grid grid-cols-1 sm:grid-cols-2">
		<div class="left hidden sm:block page_container">hidden</div>
		<div class="right page_container">
			<Swiper slidesPerView={slides} files={gallery} />
			<div class="mobile sm:hidden page_container">hello</div>
		</div>
	</div>
</main>

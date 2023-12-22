<script lang="ts">
	import Seo from '$lib/components/site_components/Seo.svelte';
	import Swiper from '$lib/components/site_components/Swiper.svelte';
	import Mobile from './Mobile.svelte';

	export let data;

	console.log(data);
	let pr = data.data[0];
	console.log(pr);

	let gallery = data.data[0].gallery;

	let slides = 1;

	import Project from './project.svelte';
</script>

<Seo {pr} />

<main class="page_container py-10">
	<div class="grid grid-cols-1 lg:grid-cols-2">
		<div class="left hidden lg:block page_container">
			<Project {pr}></Project>
		</div>
		<div class="right page_container">
			<Swiper slidesPerView={slides} files={gallery} />
			<div class="mobile lg:hidden page_container">
				<Mobile {pr} />
			</div>
		</div>
	</div>
</main>

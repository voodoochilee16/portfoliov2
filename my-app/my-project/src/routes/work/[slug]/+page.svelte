<script lang="ts">
	import Seo from '$lib/components/site_components/Seo.svelte';
	import Swiper from '$lib/components/site_components/Swiper.svelte';
	import { onMount } from 'svelte';
	import MobileCard from './MobileCard.svelte';
	import ProjectCard from './ProjectCard.svelte';

	export let data;

	console.log(data);
	let pr = data.data[0];
	console.log(pr);

	let gallery = data.data[0].gallery;

	let slides = 1;
</script>

<Seo {pr} />

<div class="mockup-browser border border-sabbath">
	<div class="mockup-browser-toolbar">
		<div class="input border border-sabbath"><a href={pr.external_url}>{pr.external_url}</a></div>
	</div>
	<div class="flex justify-center px-4 py-16 border-t border-sabbath">
		<main class=" py-10 page_container">
			<div class="grid grid-cols-1 lg:grid-cols-2">
				<div class="left hidden lg:block">
					<ProjectCard {pr}></ProjectCard>
				</div>
				<div class="right">
					<Swiper slidesPerView={slides} files={gallery} />
					<div class="mobile lg:hidden">
						<MobileCard {pr} />
					</div>
				</div>
			</div>
		</main>
	</div>
</div>

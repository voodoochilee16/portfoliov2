<script lang="ts">
	import FullNav from '$lib/components/site_components/FullNav.svelte';
	import '../app.css';
	import { page } from '$app/stores';
	console.log($page);
</script>

<main>
	<!-- {#if $page.url.pathname === '/'}
		<div class="hidden">
			<FullNav />
		</div>
	{:else}
		<div>
			<FullNav />
		</div>
	{/if} -->
	<FullNav />
	<slot />
</main>

<style>
	main {
		background-color: black;
		color: white;
	}
</style>

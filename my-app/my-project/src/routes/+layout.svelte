<script lang="ts">
	import FullNav from '$lib/components/site_components/FullNav.svelte';
	import '../app.css';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	console.log($page);
	export let data;
</script>

<main>
	{#key data.url}
		<div in:fade={{ duration: 300, delay: 200 }} out:fade={{ duration: 200 }}>
			{#if data.url == '/'}
				<slot />
			{:else}
				<FullNav />
				<slot />
			{/if}
		</div>
	{/key}
</main>

<style>
	main {
		background-color: black;
		color: white;
	}
</style>

<script lang="ts">
	import Card from './Card.svelte';

	export let data;
	console.log(data);
	let projects = data.projects;
</script>

<div class="page_container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 h-full">
	{#each projects as pr}
		<Card {pr} />
	{/each}
</div>

<script lang="ts">
	export let pr;
	import FaExternalLinkAlt from 'svelte-icons/fa/FaExternalLinkAlt.svelte';
</script>

<div class="project_container flex flex-col space-y-10 py-10 items-center justify-center">
	<div class="flex gap-4 items-center justify-center">
		<h1 class="text-xl font-khu font-bold"><a href={pr.external_url}>{pr.title}</a></h1>
		<div class="icon"><FaExternalLinkAlt /></div>
	</div>

	<div class="description flex flex-col gap-2">
		{#each pr.full_desc.blocks as { data, type }}
			{#if type === 'paragraph'}
				<p class="text-sm text-justify">{@html data.text}</p>
			{/if}
		{/each}
	</div>

	<div class="tags flex flex-wrap justify-center items-center gap-2">
		{#each pr.tags as tag}
			<button class="btn btn-xs btn-ghost border-sabbath">{tag}</button>
		{/each}
	</div>
</div>

<style>
	.icon {
		height: 20px;
		width: 20px;
		color: #6d33a6;
	}
</style>

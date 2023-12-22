<script lang="ts">
	export let pr;
	import FaExternalLinkAlt from 'svelte-icons/fa/FaExternalLinkAlt.svelte';
</script>

<div class="project_container flex flex-col space-y-20 mx-10 items-center justify-center">
	<h1 class="text-2xl font-khu font-bold"><a href={pr.external_url}>{pr.title}</a></h1>
	<div class="description flex flex-col gap-y-5">
		{#each pr.full_desc.blocks as { data, type }}
			{#if type === 'paragraph'}
				<p>{@html data.text}</p>
			{/if}
		{/each}
	</div>

	<div class="tags flex justify-center items-center gap-4">
		{#each pr.tags as tag}
			<button class="btn btn-sm btn-ghost border-sabbath hover:btn-success">{tag}</button>
		{/each}
	</div>

	<div class="icon">
		<FaExternalLinkAlt />
	</div>
</div>

<style>
	.icon {
		height: 24px;
		width: 24px;
		color: #6d33a6;
	}
</style>

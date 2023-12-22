<script lang="ts">
	export let pr;
</script>

<div class="project_container flex flex-col space-y-20 items-center justify-center">
	<h1 class="text-xl font-khu font-bold">{pr.title}</h1>
	<div class="description">
		{#each pr.full_desc.blocks as { data, type }}
			{#if type === 'paragraph'}
				<p class="text-base">{@html data.text}</p>
			{/if}
		{/each}
	</div>

	<div class="tags flex justify-center items-center gap-4">
		{#each pr.tags as tag}
			<button class="btn btn-xs btn-ghost border-sabbath">{tag}</button>
		{/each}
	</div>
</div>

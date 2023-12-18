<script lang="ts">
	import Card from './Card.svelte';

	export let data;
	console.log(data);
	let projects = data.projects;
</script>

<div class="page_container grid grid-cols-2 md:grid-cols-4 gap-2 h-full">
	{#each projects as pr}
		<Card {pr} />
		<Card {pr} />
		<Card {pr} />
		<Card {pr} />
		<!-- <div class="items-center card">
			<div class="card border-sabbath border-2 rounded-lg p-4 text-center pt-10 h-[80vh]">
				<a href={'work/' + pr.slug}>
					<h1>{pr.title}</h1>
				</a>
				<p>{@html pr.desc}</p>
			</div>
		</div> -->
	{/each}
</div>

<style>
	/* .card {
		grid-column: span 1;
		transition: all 0.3s ease;
	}

	.card:hover {
		grid-column: span 2;
	} */
</style>

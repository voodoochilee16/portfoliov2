<script lang="ts">
	import { PUBLIC_DIRECTUS_ASSETS } from '$env/static/public';

	export let pr;
</script>

<div class="items-center card pt-10">
	<div
		class="card flex flex-col gap-5 border-sabbath border-2 rounded-lg p-4 text-center pt-10 h-[40vh] md:h-[80vh]"
	>
		<a href={'work/' + pr.slug}>
			<h1>{pr.title}</h1>
		</a>
		<!-- <p>{@html pr.desc}</p> -->
		<img class="object-cover rounded-lg" src={PUBLIC_DIRECTUS_ASSETS + pr.cover} alt="" />

		<h3>{pr.categorie}</h3>
	</div>
</div>

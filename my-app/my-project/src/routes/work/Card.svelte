<script lang="ts">
	import { PUBLIC_DIRECTUS_ASSETS } from '$env/static/public';

	export let pr;
</script>

<div class="items-center card pt-10">
	<div class="card flex flex-col gap-5 border-sabbath border-2 rounded-lg p-4 text-center pt-10">
		<a href={'work/' + pr.slug}>
			<h1 class="text-lg md:text-xl lg:text-2xl font-extrabold">{pr.title}</h1>
		</a>
		<!-- <p>{@html pr.desc}</p> -->
		<img
			class="object-cover rounded-lg"
			src={PUBLIC_DIRECTUS_ASSETS + pr.cover + '?quality=50&format=webp'}
			alt=""
		/>

		<!-- <h3>{pr.categorie}</h3> -->
	</div>
</div>

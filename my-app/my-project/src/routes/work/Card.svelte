<script lang="ts">
	import { PUBLIC_DIRECTUS_ASSETS } from '$env/static/public';

	export let pr;
</script>

<a data-sveltekit-preload-data data-sveltekit-reload href="work/{pr.slug}">
	<div class="items-center card pt-10">
		<div
			class="card flex flex-col gap-5 border-sabbath border-2 rounded-lg p-4 text-center pt-10 hover:"
		>
			<a href={'work/' + pr.slug}>
				<h1 class="text-lg md:text-xl lg:text-2xl font-extrabold font-os">{pr.title}</h1>
			</a>
			<!-- <p>{@html pr.desc}</p> -->
			<img
				class="object-cover rounded-lg"
				src={PUBLIC_DIRECTUS_ASSETS + pr.cover + '?quality=50&format=webp'}
				alt=""
			/>

			<h3>
				<button class="py-4 px-8 border border-sabbath rounded-lg text-xs lg:text-sm font-mono"
					>{pr.categorie}</button
				>
			</h3>
		</div>
	</div>
</a>

<script lang="ts">
	export let pr;
</script>

<div class="items-center card pt-10">
	<div class="card border-sabbath border-2 rounded-lg p-4 text-center pt-10 h-[40vh] md:h-[80vh]">
		<a href={'work/' + pr.slug}>
			<h1>{pr.title}</h1>
		</a>
		<p>{@html pr.desc}</p>
	</div>
</div>

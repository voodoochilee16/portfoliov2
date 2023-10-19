<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import Nav from './site_components/Nav.svelte';
</script>

<div class="relative h-full w-full">
	<Canvas>
			<Scene />
	</Canvas>

	<div class=" absolute top-0 left-0 h-full w-full [&>*]:pointer-events-none" id="int-target">
		<div class="relative top-6 left-6 text-white">
			<div class="text-orange text-sm font-bold uppercase">Voodoochilee web home</div>
			<div class="text-orange text-3xl font-bold">Keepin it groovy</div>
		</div>
	</div>
</div>
<!-- 
target.set(document.getElementById('int-target') ?? undefined)

const pos = spring({ x: 0, z: 0 })
const setRandomPos = () => {
  pos.set({
    x: Math.random() * 10 - 5,
    z: Math.random() * 10 - 5
  })
}
</script>

<Camera />

<T.AmbientLight intensity={0.4} />
<T.DirectionalLight position={[1, 2, 5]} />

<Box
on:click={setRandomPos}
position.x={$pos.x}
position.z={$pos.z}
/> -->

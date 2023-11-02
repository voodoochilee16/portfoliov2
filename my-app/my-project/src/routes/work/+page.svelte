<script lang="ts">
	import Scene from '$lib/components/Scene.svelte';
	import { Canvas } from '@threlte/core';
	import { World } from '@threlte/rapier';
</script>

<h1>hello</h1>

<div class="relative bg-black h-full w-full">
    <Canvas>
            <Scene />
    </Canvas>
</div>



<script>
	// 	import { Canvas } from '@threlte/core';
	// import { World } from '@threlte/rapier';

	// import Scene from '$lib/components/Scene.svelte';
	import Nav from '$lib/components/site_components/Nav.svelte';
    import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
  
    let canvasRef;
  
	let mouseX = 0;
let mouseY = 0;

function handleMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    // You can now use mouseX and mouseY in your simulation
}
    onMount(() => {
      import('webgl-fluid-enhanced').then(({ default: webGLFluidEnhanced }) => {
        webGLFluidEnhanced.splats();
        webGLFluidEnhanced.simulation(canvasRef, {
          SIM_RESOLUTION: 512,
          VELOCITY_DISSIPATION: 0.0,
          COLOR_PALETTE: ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8B00FF"],
 
        });
      });
    });

	
	let isWorkShow = false;
	let isMusicShow = false;

	function showWork() {
		isWorkShow = !isWorkShow;
	}

	function showMusic() {
		isMusicShow = !isMusicShow;
	}

	
  </script>

  <canvas on:mousemove={handleMouseMove}  bind:this={canvasRef} class="fixed w-[100vw] h-[100vh]"/>

  <main  class="relative z-10 flex flex-col items-center justify-center h-min" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);"> 
    <Nav />
	<div class="grid grid-cols-2 gap-8 justify-center">
		<div class="col1 flex flex-col items-center">
			<button class="border-2 border-white rounded-lg px-4 sm:px-6 sm:py-3 sm:w-40" on:click={showWork}>
				<h1 class="font-os text-lg sm:text-xl font-bold text-white">Work</h1>
				
			</button>
			{#if isWorkShow}
				<div class="flex flex-col text-center items-center justify-center space-y-3 mt-3" transition:fade={{ delay: 250, duration: 700 }}>
					<a href="https://www.portodesignbiennale.pt/">Porto Design Biennale</a>
					<a href="https://www.bluedesignalliance.pt/">Blue Design Alliance </a>
				</div>
			{/if}
			
		</div>
		<div class="col2 flex flex-col items-center">
			<button class="border-2 border-white rounded-lg px-4 sm:px-6 sm:py-3 sm:w-40" on:click={showMusic}>
				<h1 class="font-os text-lg sm:text-xl  font-bold text-white">Music</h1>
			</button>
			{#if isMusicShow}
				<div class="flex flex-col text-center items-center justify-center space-y-3 mt-3" transition:fade={{ delay: 250, duration: 700 }}>
					<a href="https://theblackwizards.bandcamp.com/album/reflections">Reflections</a>
					<a href="https://theblackwizards.bandcamp.com/album/what-the-fuzz">What the Fuzz!</a>
					<a href="https://theblackwizards.bandcamp.com/album/lake-of-fire">Lake of Fire</a>
				</div>
			{/if}
		</div>
	</div>
  </main>



    





<style lang="postcss">
	a {
		@apply text-white font-os;
	}
	p {
		@apply text-white font-os;
		
	}

	
	/* .canvas-wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #000000;
	}

  .controls-wrapper {
    position: fixed;
    top: 1rem;
    left: 1rem;
    padding: 0.75rem;
    background-color: #00000088;
    color: white
  } */
</style>

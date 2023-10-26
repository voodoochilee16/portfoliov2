<!-- <script>
	import Nav from '$lib/components/site_components/Nav.svelte';
    import { onMount } from 'svelte';
  
    let canvasRef;
  
    onMount(() => {
      import('webgl-fluid-enhanced').then(({ default: webGLFluidEnhanced }) => {
        webGLFluidEnhanced.splats();
        webGLFluidEnhanced.simulation(canvasRef, {
          SIM_RESOLUTION: 256,
          VELOCITY_DISSIPATION: 0.29,
          COLOR_PALETTE: ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8B00FF"],
        });
      });
    });
  </script>

  <canvas bind:this={canvasRef} class="fixed w-[100vw] h-[100vh]"/>

  <div class="relative z-10">
    <h1 class="text-white">HELLO</h1>
  </div>


    



  <div>HEllo</div> -->
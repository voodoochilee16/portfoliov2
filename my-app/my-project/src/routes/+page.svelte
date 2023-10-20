<script>
  import { Canvas } from '@threlte/core'
  import { World } from '@threlte/rapier'
  
  import Scene from '$lib/components/Scene.svelte'
  import Controls from '$lib/components/Controls.svelte'
</script>

<div class="canvas-wrapper">
  <Canvas>
    <World>
      <Scene />
    </World>
  </Canvas>
  
</div>

<style>
  .canvas-wrapper {
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
  }
</style>
<script>
  import { T } from '@threlte/core'
  import { Float, OrbitControls } from '@threlte/extras'
  import StarField from '$lib/components/starfield.svelte'
  import {
    count,
    color,
    innerRadius,
    outerRadius,
    starScale,
  } from '$lib/components/state'

  function getRandomHexColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
</script>

<T.PerspectiveCamera
  makeDefault
  position={[3500, 1, 12]}
  fov={65}
  far={3000}
>
  <OrbitControls />
</T.PerspectiveCamera>
<T.DirectionalLight position={[3, 2, 1]} intensity={0.875}/>
<T.HemisphereLight color="#00bfff" groundColor="orangered"/>

  <T.Mesh>
    <T.SphereGeometry args={[1, 64, 64]}/>
    <T.MeshStandardMaterial
      color="#ccffff"
      metalness={0.2}
      roughness={0.1}
    />
  </T.Mesh>


<StarField
  count={$count}
  innerRadius={$innerRadius}
  outerRadius={$outerRadius}
  color={getRandomHexColor()}
  starScale={$starScale}
/>

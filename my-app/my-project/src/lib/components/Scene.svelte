<script>
  import { T, useFrame } from '@threlte/core'
  import { Float, Instance, OrbitControls } from '@threlte/extras'
  import StarField from '$lib/components/starfield.svelte'
  import {
    count,
    color,
    innerRadius,
    outerRadius,
    starScale,
  } from '$lib/components/state'
  import { InstancedMesh } from '@threlte/extras'


  function getRandomHexColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

let dn = Date.now()
  useFrame(() => (dn = Date.now()))
</script>

<T.PerspectiveCamera
  makeDefault
  position={[200, 2500, 2500]}
  fov={50}
  far={3500}
>
  <OrbitControls />
</T.PerspectiveCamera>

<T.DirectionalLight position={[3, 2, 1]} intensity={0.875}/>

<T.HemisphereLight color="#00bfff" groundColor="orangered"/>

  <T.Mesh >
    <T.SphereGeometry args={[1, 64, 64]}/>
    <T.MeshStandardMaterial
      color="#ccffff"
      metalness={0.2}
      roughness={0.1}
    />
  </T.Mesh>

<InstancedMesh>
  <T.SphereGeometry args={[1, 64, 64]}/>
  <T.MeshStandardMaterial
    color="#ccffff"
    metalness={0.2}
    roughness={0.1}

  />

  <Instance
  position.x={-4}
  position.y={Math.sin(dn / 1000 + 40)}
/>
<Instance
  position.x={-8}
  position.y={Math.sin(dn / 1000 + 10)}
/>
<Instance
  position.x={4}
  position.y={Math.sin(dn / 1000 + 5)}
/>
<Instance
  position.x={8}
  position.y={Math.sin(dn / 1000 + 200)}
/>
<Instance
  position.x={12}
  position.y={Math.sin(dn / 1000 + 550)}
/>
</InstancedMesh>


<StarField
  count={$count}
  innerRadius={$innerRadius}
  outerRadius={$outerRadius}
  color={getRandomHexColor()}
  starScale={$starScale}
/>

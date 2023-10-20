<script>
	import { TetrahedronGeometry, MeshBasicMaterial, InstancedMesh, Matrix4, Vector3, SphereGeometry } from 'three';
	import { randInt, randFloat } from 'three/src/math/MathUtils';
	import { T } from '@threlte/core';
	import { Float } from '@threlte/extras';

	function getRandomHexColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
function getRandomNumber() {
    return Math.floor(Math.random() * (1000 - 100) + 100);
}
	export let count = 15000;
	export let innerRadius = 1000;
	export let outerRadius = 1000;
	export let color = getRandomHexColor();
	export let starScale = 0.5;


	const vec3OnSphere = (range) => {
		const length = randInt(range.min, range.max);
		return new Vector3().randomDirection().multiplyScalar(length);
	};

	let instMesh;
	function initMesh(c, r, geo, mat) {
		instMesh = new InstancedMesh(geo, mat, c);
		const matrix = new Matrix4();
		for (let i = 0; i < instMesh.count; i++) {
			matrix.setPosition(vec3OnSphere(r));
			instMesh.setMatrixAt(i, matrix);
		}
	}

	$: geometry = new SphereGeometry(starScale);
	$: material = new MeshBasicMaterial({ color });
	$: range = { min: innerRadius, max: outerRadius };
	$: if (count && range && geometry && material) {
		initMesh(count, range, geometry, material);
	}

	
</script>
<Float
	position={[0, 0, 0]}
	rotation={[5, 5, 5]}
	scale={[5, 5, 5]}
>
	<T is={instMesh} />
</Float>


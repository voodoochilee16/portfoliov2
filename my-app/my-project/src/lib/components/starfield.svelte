<script>
	import {
		SphereGeometry,
		MeshBasicMaterial,
		MeshStandardMaterial,
		InstancedMesh,
		Matrix4,
		Vector3
	} from 'three';
	import { randInt, randFloat } from 'three/src/math/MathUtils';
	import { T } from '@threlte/core';

	export let count = 5000;
	export let innerRadius = 450;
	export let outerRadius = 500;

	const geometry = new SphereGeometry(0.5);
	const material = new MeshStandardMaterial({ color: 'white' });

	function vec3OnSphere(range) {
		const length = randInt(range.min, range.max);
		return new Vector3(
			randFloat(-Math.PI, Math.PI),
			randFloat(-Math.PI, Math.PI),
			randFloat(-Math.PI, Math.PI)
		).clampLength(length, length);
	}

	let instMesh;
	function initMesh(c, r) {
		instMesh = new InstancedMesh(geometry, material, c);
		const matrix = new Matrix4();
		for (let i = 0; i < instMesh.count; i++) {
			matrix.setPosition(vec3OnSphere(r));
			instMesh.setMatrixAt(i, matrix);
		}
	}

	$: range = { min: innerRadius, max: outerRadius };
	$: initMesh(count, range);
</script>

{#if instMesh}
	<T.Starfield type={instMesh} />
{/if}

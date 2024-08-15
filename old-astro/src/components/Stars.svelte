<script lang="ts">
	import { onMount } from 'svelte';
	import { Stars } from '../stars/index';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const stars = new Stars(canvas);

		stars.beginDrawing();

		return stars.stop;
	});
</script>

<canvas id="stars" bind:this={canvas} />

<style lang="scss">
	#stars {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>

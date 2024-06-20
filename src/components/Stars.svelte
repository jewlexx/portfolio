<script lang="ts">
	import { onMount } from 'svelte';
	import { Stars } from '../stars/index';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const stars = new Stars(canvas);

		stars.beginDrawing();

		return () => {
			stars.stop();
			// I believe that we don't need to call this, as the object is dropped after `begin_drawing` is called
			// When calling this an error is logged saying that a null pointer was passed
			// stars.free();
		};
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

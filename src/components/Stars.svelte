<script lang="ts">
	import { onMount } from 'svelte';
	import { Stars } from 'stars';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const stars = new Stars(canvas);

		function drawLoop() {
			stars.draw();
			requestAnimationFrame(drawLoop);
		}

		drawLoop();

		return stars.free;
	});
</script>

<canvas id="stars" bind:this={canvas} />

<style lang="scss">
	#stars {
		position: fixed;
		width: 100vw;
		height: 100vh;
		z-index: -1;
	}
</style>

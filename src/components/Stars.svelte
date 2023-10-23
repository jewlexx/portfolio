<script lang="ts">
	import { onMount } from 'svelte';
	import * as stars from 'stars';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		stars.attach(canvas as HTMLCanvasElement);
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

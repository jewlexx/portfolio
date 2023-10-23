<script lang="ts">
	import { onMount } from 'svelte';
	import * as stars from 'stars';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		stars.attach(canvas as HTMLCanvasElement);
	});
</script>

<canvas id="stars" bind:this={canvas} />

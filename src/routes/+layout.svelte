<script>
	import '@fontsource/fira-mono';
	import '@fontsource/roboto';

	import Header from '$components/Header.svelte';
	import '$lib/styles/global.scss';
</script>

<div class="flex flex-col min-h-full">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	main {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 90vh;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

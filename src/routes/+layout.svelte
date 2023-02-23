<script>
	import '@fontsource/fira-mono';
	import '@fontsource/roboto';

	import Header from '$components/Header.svelte';
	import '$lib/styles/global.scss';
</script>

<div class="flex flex-col min-h-full">
	<Header />

	<main class="flex flex-col box-border mx-0 my-auto w-screen h-[90vh]">
		<slot />
	</main>
</div>

<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import Navigation from '$components/Navigation.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Navigation />
<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>

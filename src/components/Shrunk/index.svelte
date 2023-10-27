<script lang="ts">
	import { onMount } from 'svelte';

	export let long: string | undefined = undefined;
	export let short: string | undefined = long?.split(' ')[0];
	export let shrink: number | 'portrait' = 'portrait';
	export let hide: number | 'portrait' = 500;

	let shouldShrink = false;
	let hidden = false;

	onMount(() => {
		function updateTitle() {
			if (
				(shrink === 'portrait' && window.innerWidth < window.innerHeight) ||
				window.innerWidth < (shrink as number)
			) {
				if (!shouldShrink) {
					// Disable short title
					// titleDisplay = undefined;
					shouldShrink = true;
				}
			} else if (shouldShrink) {
				// titleDisplay = title;
				shouldShrink = false;
			}

			if (
				(shrink === 'portrait' && window.innerWidth < window.innerHeight) ||
				window.innerWidth < (hide as number)
			) {
				hidden = true;
			} else {
				hidden = false;
			}
		}

		updateTitle();

		window.addEventListener('resize', updateTitle);
		return () => {
			window.removeEventListener('resize', updateTitle);
		};
	});
</script>

<!-- svelte-ignore empty-block -->
{#if long === undefined}
	<slot />
{:else if hidden}{:else if shouldShrink}
	{short}
{:else}
	{long}
{/if}

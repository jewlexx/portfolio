<script lang="ts">
	import FormattedDate from './FormattedDate.svelte';

	interface $$Props {
		pubDate: Date | undefined;
		released?: boolean;
	}
	const { pubDate, released }: $$Props = $props();
</script>

{#if pubDate}
	<small class="text-sm text-gray-800 italic">
		{released ? 'Released' : 'Published'} on <FormattedDate date={pubDate} />
	</small>
{/if}

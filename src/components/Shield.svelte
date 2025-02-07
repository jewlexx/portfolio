<script lang="ts">
	interface $$Props {
		enabled?: boolean;
		href?: string;
		// new_tab: boolean;
		src?: string;
		alt?: string;
		class?: string;
	}
	const { enabled = true, href, src, alt, class: className }: $$Props = $props();
</script>

{#if enabled}
	<a {href} target="_blank" rel="noopener noreferrer" class="mr-2 inline-block {className}">
		<img {src} {alt} />
	</a>
{/if}

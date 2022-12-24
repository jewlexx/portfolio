<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul>
	{#each data.links as link}
		<li>
			<img src={link.faviconUrl} alt={link.name} /><a
				target="_blank"
				rel="noreferrer"
				href={link.url.toString()}>{link.name}</a
			>
		</li>
	{/each}
</ul>

<style lang="scss">
	li {
		list-style: none;
		background-color: red;
		border-radius: 2rem;
		padding: 1rem;
	}
</style>

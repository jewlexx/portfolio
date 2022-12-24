<script lang="ts">
</script>

<ul>
	{#each links as link}
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

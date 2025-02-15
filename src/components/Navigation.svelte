<script lang="ts">
	import { linksAbridged } from '$lib/links';
	import { projectNames } from '$lib/content/projects';

	function justifyLink(link: string) {
		if (link.startsWith('/')) {
			return link;
		}

		return `https://${link}`;
	}
</script>

<nav class="navbar bg-base-100 mb-10 p-5 shadow-sm">
	<div class="navbar-start">
		<a class="btn btn-ghost text-xl" href="/#">Juliette</a>
	</div>

	<div class="navbar-center gap-5">
		{#each projectNames as project}
			<a class="btn btn-primary text-xl" href="/projects/{project}">{project}</a>
		{/each}
	</div>

	<div class="navbar-end gap-5">
		{#each linksAbridged as link}
			<a
				class="btn btn-accent btn-circle text-xl"
				href={justifyLink(link.url)}
				target="_blank"
				rel="noopener noreferrer"
			>
				<svelte:component this={link.icon} />
			</a>
		{/each}
	</div>
</nav>

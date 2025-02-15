<script lang="ts">
	import { match } from 'ts-pattern';
	import PubDate from '$components/PubDate.svelte';
	import Shield from '$components/Shield.svelte';
	import { IconBrandGit, IconLink } from '@tabler/icons-svelte';
	import type { Metadata } from './types';

	interface $$Props extends Metadata {
		children: any;
	}

	function justifyLink(link: string) {
		// Local url
		if (link.startsWith('/')) {
			return link;
		}

		// External url
		if (!link.startsWith('http')) {
			return `https://${link}`;
		} else {
			return link;
		}
	}

	function justifyRepoLink(repo: string) {
		const fullRepoUrl = match(repo)
			.when(
				(repo) => repo.startsWith('http://'),
				() => repo.replace('http://', 'https://')
			)
			.when(
				(repo) => repo.startsWith('https://'),
				() => repo
			)
			.when(
				(repo) => /^[a-zA-Z0-9\-_\.]+\/[a-zA-Z0-9\-_\.]+$/.test(repo),
				() => `https://github.com/${repo}`
			)
			.when(
				(repo) => /^[a-zA-Z0-9\-_\.]+$/.test(repo),
				() => `https://github.com/jewlexx/${repo}`
			)
			.otherwise(() => null)!;

		return justifyLink(fullRepoUrl);
	}

	const { children, ...metadata }: $$Props = $props();
	const shields = metadata.shields ?? [];
</script>

<article class="prose lg:prose-xl px-5">
	<h1>{metadata.title}</h1>
	<p class="italic">{metadata.description}</p>
	<div class="date">
		<PubDate pubDate={new Date(metadata.pubDate)} />
	</div>
	{#each shields as shield}
		<Shield {...shield} />
	{/each}
	<span>
		{#if metadata.repo}
			<a
				href={justifyRepoLink(metadata.repo)}
				class="btn btn-circle btn-secondary"
				target="_blank"
				rel="noopener noreferrer"><IconBrandGit /></a
			>
		{/if}
		{#if metadata.homepage}
			<a
				href={justifyLink(metadata.homepage)}
				class="btn btn-circle btn-secondary"
				target="_blank"
				rel="noopener noreferrer"><IconLink /></a
			>
		{/if}
	</span>
	{@render children()}
</article>

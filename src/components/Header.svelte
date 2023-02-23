<script lang="ts">
	import {
		IconClock,
		IconBrandGithub,
		IconBrandTwitch,
		IconBrandTwitter,
		IconBrandLinktree,
		IconBrandMastodon
	} from '@tabler/icons-svelte';

	interface Link {
		name: string;
		href: string;
		emoji: any;
		rel?: string;
	}

	const links: Link[] = [
		{
			emoji: IconBrandGithub,
			name: 'Github',
			href: 'https://github.com/jewlexx'
		},
		{
			emoji: IconBrandTwitch,
			name: 'Twitch',
			href: 'https://twitch.tv/sapphicjewl'
		},
		{
			emoji: IconBrandTwitter,
			name: 'Twitter',
			href: 'https://twitter.com/jewelexx'
		},
		{
			emoji: IconBrandMastodon,
			name: 'Mastodon',
			href: 'https://tech.lgbt/@jewelexx',
			rel: 'me'
		},
		{
			emoji: IconBrandLinktree,
			name: 'Linktree',
			href: 'https://linktr.ee/jewelexx'
		}
	];
</script>

<header>
	<nav class="nav">
		<a class="logolink" href="/" rel="prefetch">
			<img alt="Profile" class="monogram" src="/images/pfp-32x.jpg" width={32} height={32} />
		</a>

		<!-- <a class="link" href="/projects">Portfolio</a>
		<a class="link" href="/about">About</a> -->

		{#each links as { href, name, rel, emoji: Emoji }}
			<a class="social" title={`${name} Link`} {href} {rel}>
				<Emoji />
			</a>
		{/each}

		<a class="social" title="The time in seconds" href="/now">
			<IconClock />
		</a>
	</nav>
</header>

<style lang="scss">
	@import '$lib/styles/palette.scss';

	.nav {
		background-color: lighten($dark-gray, 10%);
		display: flex;
		align-items: center;
		padding-top: 1rem;
		padding-right: 2rem;
		padding-bottom: 1rem;
		padding-left: 2rem;
	}

	.logolink {
		display: block;
		color: $t-fg;
		text-decoration: none;
	}

	/* .link {
		color: $t-subdue;
		display: block;
		margin-left: 1rem;
		text-decoration: none;
		font-size: $f-d1;
		text-transform: uppercase;
		padding-top: 0.75em;
		padding-bottom: 0.75em;
		&:focus,
		&:hover {
			color: $t-active;
		}
	} */

	.monogram {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2em;
		height: 2em;
		margin-right: 0.5rem;
		color: $black;
		font-weight: 900;
		letter-spacing: -0.125rem;
		border: 3px solid currentColor;
		border-radius: 50%;
	}

	.social {
		display: block;
		margin-left: auto;

		@media (prefers-reduced-motion: no-preference) {
			transition: transform 100ms ease-in-out;
		}

		&:hover {
			transform: scale(1.5);
		}

		+ .social {
			margin-left: 0.75rem;
		}
	}
</style>

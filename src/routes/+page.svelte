<script lang="ts">
	import Icon from 'svelte-fa';
	import {
		type IconDefinition,
		faGithub,
		faTwitch,
		faTwitter
	} from '@fortawesome/free-brands-svg-icons';
	import { faTree } from '@fortawesome/free-solid-svg-icons';

	interface Link {
		name: string;
		url: string;
		emoji: IconDefinition;
	}

	const links: Link[] = [
		{
			emoji: faGithub,
			name: 'Github',
			url: 'github.com/jewlexx'
		},
		{
			emoji: faTwitch,
			name: 'Twitch',
			url: 'twitch.tv/sapphicjewl'
		},
		{
			emoji: faTwitter,
			name: 'Twitter',
			url: 'twitter.com/jewelexx'
		},
		{
			emoji: faTree,
			name: 'Linktree',
			url: 'linktr.ee/jewelexx'
		}
	];
</script>

<svelte:head>
	<title>Juliette Cordor</title>
	<meta
		name="description"
		property="og:description"
		content="Juliette Cordor, developer and other things also"
	/>
</svelte:head>

<div class="container">
	<main>
		<header class="hero">
			<div class="overlay">
				<h1 class="title">
					Juliette Cordor
					<small class="pronouns"> (She/Her) </small>
				</h1>
				<div>
					{#each links as { emoji, name, url }}
						<a
							href={`https://${url}`}
							target="_blank"
							rel="noopener noreferrer"
							class={`role ${true ? 'motion' : ''}`}
						>
							<Icon icon={emoji} />
							{name}
						</a>
					{/each}
				</div>
			</div>
		</header>
	</main>
</div>

<style lang="scss">
	@import '$lib/styles/palette.scss';

	$w-s: 750px;

	.pronouns {
		color: $cambridge-blue;

		display: block;
		font-weight: 400;
		font-size: $f-d6;
		letter-spacing: -0.0625em;
	}

	.hero {
		position: relative;
		overflow: hidden;
		@media (min-width: $w-s) {
			height: 45vw;
		}
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		// align-items: center;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding-left: 2rem;
		@media (min-width: $w-s) {
			padding-left: 4rem;
		}
	}

	.title {
		font-weight: 900;
		font-size: $f-u8;
		margin-bottom: 0.5rem;
		margin-top: 0;
		@media (min-width: $w-s) {
			font-size: $f-u12;
		}
	}

	.role {
		text-decoration: none;
		position: relative;
		display: inline-block;
		font-weight: 900;
		color: $t-bg;
		background-color: $t-fg;
		padding: 0.25em 0.5em;
		z-index: 2;

		@media (min-width: $w-s) {
			font-size: $f-u3;
		}

		+ .role {
			margin-left: 1em;
		}

		// Only enable motion if the user has no preference
		@media (prefers-reduced-motion: no-preference) {
			transition: color 0.2s ease-in-out;
			transition: background-color 0.2s ease-in-out;
		}

		&:hover {
			color: $t-fg;
			&:nth-of-type(1) {
				background-color: $black;
			}
			&:nth-of-type(2) {
				background-color: $purple;
			}
			&:nth-of-type(3) {
				background-color: $blue;
			}
			&:nth-of-type(4) {
				background-color: $green;
			}
		}
	}
</style>

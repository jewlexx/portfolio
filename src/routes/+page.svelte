<script lang="ts">
	import { links } from '$lib/links';
</script>

<svelte:head>
	<title>Juliette Cordor</title>
	<meta
		name="description"
		property="og:description"
		content="Juliette Cordor, developer and other things also"
	/>
</svelte:head>

<header class="hero">
	<div class="overlay">
		<h1 class="title">
			Juliette Cordor
			<small class="pronouns"> (She/Her) </small>
		</h1>
		<div class="links-container">
			{#each links as { emoji: Emoji, url }}
				<a href={url} target="_blank" rel="noopener noreferrer" class="role">
					<Emoji />
				</a>
			{/each}
		</div>
	</div>
</header>

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
		margin-bottom: 1rem;
		margin-top: 0;

		@media (min-width: 1024px) {
			font-size: $f-u12;
		}
	}

	.links-container {
		display: flex;
	}

	.role {
		text-decoration: none;
		position: relative;
		font-weight: 900;
		color: $t-bg;
		background-color: $t-fg;
		padding: 0.25em;
		z-index: 2;
		border-radius: 0.25rem;

		display: flex;
		align-items: center;
		justify-content: center;

		@media (min-width: $w-s) {
			font-size: $f-u3;
		}

		+ .role {
			margin-left: 0.5em;
		}

		// Only enable motion if the user has no preference
		@media (prefers-reduced-motion: no-preference) {
			transition: transform 500ms
				linear(
					0 0%,
					0.22 2.1%,
					0.86 6.5%,
					1.11 8.6%,
					1.3 10.7%,
					1.35 11.8%,
					1.37 12.9%,
					1.37 13.7%,
					1.36 14.5%,
					1.32 16.2%,
					1.03 21.8%,
					0.94 24%,
					0.89 25.9%,
					0.88 26.85%,
					0.87 27.8%,
					0.87 29.25%,
					0.88 30.7%,
					0.91 32.4%,
					0.98 36.4%,
					1.01 38.3%,
					1.04 40.5%,
					1.05 42.7%,
					1.05 44.1%,
					1.04 45.7%,
					1 53.3%,
					0.99 55.4%,
					0.98 57.5%,
					0.99 60.7%,
					1 68.1%,
					1.01 72.2%,
					1 86.7%,
					1 100%
				);
		}

		&:hover {
			color: $t-fg;

			transform: scale(1.2);

			&:nth-of-type(1) {
				$color: $black;
				background-color: $color;
				box-shadow: 0px 0px 3px #000 inset;
			}

			&:nth-of-type(2) {
				$color: $purple;
				background-color: $color;
				box-shadow: 0px 0px 3px #000 inset;
			}

			&:nth-of-type(3) {
				$color: $blue;
				background-color: $color;
				box-shadow: 0px 0px 3px #000 inset;
			}

			&:nth-of-type(4) {
				$color: $green;
				background-color: $color;
				box-shadow: 0px 0px 3px #000 inset;
			}
		}
	}
</style>

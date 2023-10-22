<script>
	import ProfilePicture from '../assets/images/mirror selfie.webp';
	import { links } from '../lib/links';
</script>

<header>
	<nav class="nav">
		<a class="logolink" href="/" rel="prefetch">
			<img alt="Profile" class="monogram" src={ProfilePicture.src} width={32} height={32} />
		</a>
		<HeaderLink href="/blog">Blog</HeaderLink>
		<!-- <a class="link" href="/projects">Portfolio</a>
		<a class="link" href="/about">About</a> -->
		<span class="links-container">
			{#each links as { emoji: Emoji, url, title }}
				<a href={url} {title} target="_blank" rel="noopener noreferrer" class="role">
					<Emoji />
				</a>
			{/each}
		</span>
	</nav>
</header>

<style lang="scss">
	@import '../styles/palette.scss';

	.nav {
		background-color: lighten($dark-gray, 10%);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 1rem;
		padding-right: 2rem;
		padding-bottom: 1rem;
		padding-left: 2rem;
	}

	.logolink {
		display: block;
		color: $t-fg;
		text-decoration: none;

		img {
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

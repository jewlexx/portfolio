<script>
	import Icon from 'svelte-fa';
	import { links } from '$lib/links';
	import ProfilePicture from '$lib/assets/images/mirror selfie.webp?w=32&h=32';
</script>

<header>
	<nav class="nav">
		<a class="logolink" href="/" rel="prefetch">
			<img alt="Profile" class="monogram" src={ProfilePicture} width={32} height={32} />
		</a>
		<!-- <a class="link" href="/projects">Portfolio</a>
		<a class="link" href="/about">About</a> -->
		{#each links as link}
			<a class="social" href={link.url}>
				<Icon class="socialicon" icon={link.emoji} />
			</a>
		{/each}
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
			transition: font-size 50ms;
		}

		&:hover {
			font-size: $f-u1;
		}

		+ .social {
			margin-left: 0.75rem;
		}
	}
</style>

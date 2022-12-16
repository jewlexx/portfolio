<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav class="nav">
		<a class={styles.logolink} href="/" rel="prefetch">
			<img alt="Profile" class="monogram" src="/assets/pfp.jpg" width={32} height={32} />
		</a>
		<a class="link" href="/projects">Portfolio</a>
		<a class="link" href="/about">About</a>
		<a class="social" href="https://twitter.com/jewelexx">
			<SiTwitter class="socialicon" />
		</a>
		<a class="social" href="https://github.com/jewlexx">
			<SiGithub class="socialicon" />
		</a>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style lang="scss">
	@import '@lib/styles/palette.scss';

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

	.link {
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
	}

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

		+ .social {
			margin-left: 0.75rem;
		}
	}

	.socialicon {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		fill: $t-subdue;
		transition: fill linear 150ms;
		&:hover {
			fill: $t-active;
		}
	}
</style>

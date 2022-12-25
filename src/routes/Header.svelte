<script>
	import Fa from 'svelte-fa';
	import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
	import ProfilePicture from '$lib/images/pfp-128.avif';
</script>

<header>
	<nav class="nav">
		<a class="logolink" href="/" rel="prefetch">
			<img alt="Profile" class="monogram" src={ProfilePicture} width={32} height={32} />
		</a>
		<!-- <a class="link" href="/projects">Portfolio</a>
		<a class="link" href="/about">About</a> -->
		<a class="social" href="https://github.com/jewlexx">
			<Fa class="socialicon" icon={faGithub} />
		</a>
		<a class="social" href="https://www.instagram.com/juliette._.cordor/">
			<Fa class="socialicon" icon={faInstagram} />
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
</style>

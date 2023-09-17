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
</style>

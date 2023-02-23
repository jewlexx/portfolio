<svelte:head>
	<title>Juliette Cordor</title>
	<meta
		name="description"
		property="og:description"
		content="Juliette Cordor, developer and other things also"
	/>
</svelte:head>

<header class="hero">
	<div class="flex flex-col pl-8 justify-center items-start w-full h-full absolute overlay">
		<h1 class="title text-sm break-words">Juliette Cordor</h1>
		<!-- <small class="pronouns text-3xl text-cambridge-blue"> (She/Her) </small> -->
	</div>
</header>

<style lang="scss">
	@import '$lib/styles/palette.scss';

	.hero {
		position: relative;
		overflow: hidden;
		@media (min-width: $w-s) {
			height: 45vw;
		}
	}

	.overlay {
		@media (min-width: $w-s) {
			padding-left: 4rem;
		}
	}

	.title {
		font-weight: 900;
		margin-bottom: 1rem;
		margin-top: 0;

		@media (min-width: 1024px) {
			font-size: $f-u12;
		}
	}
</style>

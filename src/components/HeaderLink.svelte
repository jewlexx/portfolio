<!-- import type { HTMLAttributes } from 'astro/types';

type Props = HTMLAttributes<'a'>;

const { href, class: className, ...props } = Astro.props;

const { pathname } = Astro.url;
--- -->

<script>
	import { onMount } from 'svelte';

	export let href;

	let isActive = false;

	onMount(() => {
		const { pathname } = new URL(window.location.href);
		isActive = href === pathname || href === pathname.replace(/\/$/, '');
	});
</script>

<a {href} class={`${$$restProps.class || ''} ${isActive && 'active'}`}>
	<slot />
</a>

<style lang="scss">
	a {
		display: inline-block;
		text-decoration: none;

		&.active {
			font-weight: bolder;
			text-decoration: underline;
		}

		@media (max-width: 500px) {
			@media (orientation: portrait) {
				font-size: 3vw;
			}
		}
	}
</style>

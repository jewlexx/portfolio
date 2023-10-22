<!-- import type { HTMLAttributes } from 'astro/types';

type Props = HTMLAttributes<'a'>;

const { href, class: className, ...props } = Astro.props;

const { pathname } = Astro.url;
--- -->

<script>
	export let href;
	export let className;

	const { pathname } = Astro.url;
	const isActive = href === pathname || href === pathname.replace(/\/$/, '');
</script>

---
<a {href} class={`${className} ${isActive && 'active'}`}>
	<slot />
</a>

<style lang="scss">
	a {
		display: inline-block;
		text-decoration: none;

		.active {
			font-weight: bolder;
			text-decoration: underline;
		}
	}
</style>

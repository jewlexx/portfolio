<!-- import type { HTMLAttributes } from 'astro/types';

type Props = HTMLAttributes<'a'>;

const { href, class: className, ...props } = Astro.props;

const { pathname } = Astro.url;
--- -->

<script>
	export let href;

	const { pathname } = Astro.url;
	const isActive = href === pathname || href === pathname.replace(/\/$/, '');
</script>

---
<a {href} class={`${$$restProps.class || ''} ${isActive && 'active'}`}>
	<h3><slot /></h3>
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

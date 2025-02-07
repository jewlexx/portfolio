declare module '*.md' {
	import type { SvelteComponent } from 'svelte';

	export default class MarkdownPage extends SvelteComponent {}

	export const metadata: Metadata;
}

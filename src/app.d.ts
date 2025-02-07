// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

export * from './lib/content/projects/types';
import { Metadata } from './lib/content/projects/types';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

declare module '*.md' {
	import type { SvelteComponent } from 'svelte';

	export default class Comp extends SvelteComponent {}

	export const metadata: Metadata;
}

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

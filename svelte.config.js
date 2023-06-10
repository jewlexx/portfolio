import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import image from 'svelte-image';
import wasm from 'vite-plugin-wasm';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), image()],

	plugins: [wasm()],

	kit: {
		adapter: adapter()
	}
};

export default config;

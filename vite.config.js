import { resolve } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import image from 'svelte-image';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), image()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			$components: resolve('./src/components'),
			$static: resolve('./static'),
			$icons: resolve('./static/images/icons/icons')
		}
	}
};

export default config;

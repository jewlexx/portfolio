import { defineConfig } from 'vite';
import { resolve } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools'

export default defineConfig({
	plugins: [sveltekit(), imagetools()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			$components: resolve('./src/lib/components')
		}
	}
});


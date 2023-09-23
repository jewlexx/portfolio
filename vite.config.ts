import { defineConfig } from 'vite';
import { resolve } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	optimizeDeps: {
		include: ['@tabler-icons/svelte']
	},
	plugins: [sveltekit(), SvelteKitPWA(), imagetools()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			$components: resolve('./src/lib/components')
		}
	}
});

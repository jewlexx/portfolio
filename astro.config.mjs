import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';

import sitemap from '@astrojs/sitemap';

import wasm from 'vite-plugin-wasm';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.jewelexx.com',
	integrations: [mdx(), sitemap(), svelte()],
	vite: {
		plugins: [wasm()],
		server: {
			watch: {
				ignored: ["**/target/**/*"], // HERE
			},
		},
	},
});

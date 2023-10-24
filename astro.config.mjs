import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';

import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro'
import Compress from "astro-compress";


import wasm from 'vite-plugin-wasm';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.jewelexx.com',
	integrations: [mdx(), sitemap(), svelte(), AstroPWA(), robotsTxt(),  Compress()],
	vite: {
		plugins: [wasm()],
		server: {
			watch: {
				ignored: ["**/target/**/*"], // HERE
			},
		},
	},
});

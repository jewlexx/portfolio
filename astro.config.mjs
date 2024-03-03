import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
import Compress from 'astro-compress';
import wasm from 'vite-plugin-wasm';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.jewelexx.com',
	output: 'hybrid',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
		speedInsights: {
			enabled: true,
		},
		imageService: true,
	}),
	integrations: [
		mdx(),
		sitemap(),
		svelte(),
		AstroPWA({
			manifest: {
				name: "Juliette Cordor's Portfolio",
				short_name: "Juliette's Portfolio",
				theme_color: '#25282a',
				background_color: '#0d0e0f',
				icons: [
					{
						src: '/favicon.ico',
						sizes: '48x48',
					},
					{
						src: '/favicon-32x32.png',
						sizes: '32x32',
						type: 'image/png',
					},
					{
						src: '/favicon-16x16.png',
						sizes: '16x16',
						type: 'image/png',
					},
					{
						src: '/favicon-16x16.png',
						sizes: '16x16',
						type: 'image/png',
					},
					{
						src: '/apple-touch-icon.png',
						sizes: '180x180',
					},
					{
						src: '/android-chrome-192x192.png',
						sizes: '192x192',
					},
					{
						src: '/android-chrome-512x512.png',
						sizes: '512x512',
					},
				],
			},
		}),
		robotsTxt(),
		// Compress(),
		react(),
	],
	vite: {
		plugins: [wasm()],
		server: {
			watch: {
				ignored: ['**/target/**/*'], // HERE
			},
		},
	},
});

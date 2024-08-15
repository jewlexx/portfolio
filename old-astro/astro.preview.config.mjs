import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import baseConfig from './astro.config.mjs';

export default defineConfig({
	...baseConfig,
	adapter: node({
		mode: 'standalone',
	}),
});

import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import vue from '@astrojs/vue';
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), vue(), prefetch()],
  // adapter: vercel(),
  // output: 'static'
});

import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import vercel from "@astrojs/vercel/serverless";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), vue()],
  adapter: vercel(),
  output: "server"
});
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel/serverless';
import vue from "@astrojs/vue";
import prefetch from "@astrojs/prefetch";
import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  integrations: [preact(), vue(), prefetch(), mdx()],
  adapter: vercel(),
  output: 'server'
});
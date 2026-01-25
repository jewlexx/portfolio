// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import alpinejs from "@astrojs/alpinejs";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.cordor.dev",
  prefetch: true,
  integrations: [react(), alpinejs(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

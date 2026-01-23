// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://www.cordor.dev",
  prefetch: true,
  integrations: [react(), alpinejs()],
  vite: {
    plugins: [tailwindcss()],
  },
});
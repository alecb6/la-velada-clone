// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svg: true,
  },
  build: {
    inlineStylesheets: "always",
  },
  site: "https://la-velada-clone.vercel.app/",
  adapter: vercel(),
});
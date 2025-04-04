// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svg: {
      mode: "sprite",
    },
  },
  build: {
    inlineStylesheets: "always",
  },
  site: "https://la-velada-clone.vercel.app/",
});

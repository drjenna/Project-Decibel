import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "hybrid",
  site: 'https://project-decibel.com',
  adapter: cloudflare()
});
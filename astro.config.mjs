import { defineConfig } from 'astro/config';

export default defineConfig({
  // Static output — deploys perfectly to Cloudflare Pages
  output: 'static',
  site: 'https://project-decibel.com',
});

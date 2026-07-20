import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://salary.socialninjas.in',
  output: 'static',
  compressHTML: true,
  build: { assets: 'assets' }
});

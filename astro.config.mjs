import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://salarytools.us',
  output: 'static',
  compressHTML: true,
  build: { assets: 'assets' }
});

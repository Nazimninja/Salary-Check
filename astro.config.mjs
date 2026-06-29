import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://salarytools.us',
  output: "hybrid",
  compressHTML: true,
  build: { assets: 'assets' },
  adapter: cloudflare()
});
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const base = process.env.PUBLIC_BASE_PATH || '/';
const site = process.env.PUBLIC_SITE_URL || 'https://ruikerliang.github.io';

export default defineConfig({
  site,
  base,
  integrations: [tailwind()],
  output: 'static'
});

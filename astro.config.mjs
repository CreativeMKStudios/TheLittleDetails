import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const origin = process.env.SITE_ORIGIN ?? 'https://creativemkstudios.github.io';
const base = process.env.SITE_BASE ?? '/TheLittleDetails';

export default defineConfig({
  site: origin,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    format: 'directory',
  },
});

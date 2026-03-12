// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lesrivesduterritoire.evangichtenaere.fr',
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify({
    imageCDN: false,
  }),

  integrations: [sitemap()],
});
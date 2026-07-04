// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domän KÖPT 2026-07-04: tatuoijat.fi (Hostingpalvelu, DNS ska pekas
// mot Netlify DNS). Allt (canonical, hreflang, sitemap, schema.org)
// läser från Astro.site — ändra aldrig domän någon annanstans.
const SITE_URL = 'https://tatuoijat.fi';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fi',
        locales: { fi: 'fi', sv: 'sv' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'fi',
    locales: ['fi', 'sv'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

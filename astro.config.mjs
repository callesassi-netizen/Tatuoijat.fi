// @ts-check
import { defineConfig } from 'astro/config';

// Domän är INTE vald ännu (arbetsnamn MUSTE). Byt ENDAST denna konstant
// när domänen är bestämd — allt annat (canonical, hreflang, sitemap,
// schema.org) läser från Astro.site.
const SITE_URL = 'https://muste.example';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'fi',
    locales: ['fi', 'sv'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

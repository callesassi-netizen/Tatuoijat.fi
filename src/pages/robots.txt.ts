import type { APIRoute } from 'astro';

// Genereras dynamiskt så att domänen aldrig hårdkodas (SITE_URL i astro.config.mjs).
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL('sitemap-index.xml', site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

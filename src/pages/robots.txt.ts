import type { APIRoute } from 'astro';

// Genereras dynamiskt så att domänen aldrig hårdkodas (SITE_URL i astro.config.mjs).
// GEO.md §8: släpp uttryckligen in AI-crawlarna (utöver wildcard-* nedan,
// som redan tillåter dem) — gör avsikten explicit och framtidssäker om
// någon senare lägger en Disallow-rad. Google-Extended styr bara Geminis
// träningsanvändning; AI Overviews använder vanlig Googlebot (blockeras ej).
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL('sitemap-index.xml', site).href;
  const aiBots = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'PerplexityBot',
    'Perplexity-User',
    'ClaudeBot',
    'Google-Extended',
    'Applebot-Extended',
    'CCBot',
  ];
  const aiBotRules = aiBots.map((bot) => `User-agent: ${bot}\nAllow: /`).join('\n\n');
  return new Response(
    `User-agent: *\nAllow: /\n\n${aiBotRules}\n\nSitemap: ${sitemapUrl}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};

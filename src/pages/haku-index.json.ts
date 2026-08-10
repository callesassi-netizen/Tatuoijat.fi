import type { APIRoute } from 'astro';
import { buildSearchIndex } from '../lib/search';

/**
 * Förgenererat sökindex (fi). Byggs statiskt vid `astro build` — ingen
 * backend. Hämtas av SiteSearch.astro först när besökaren faktiskt börjar
 * söka (fokus eller första tangenttryck), så den inte belastar LCP.
 */
export const GET: APIRoute = async () =>
  new Response(JSON.stringify(await buildSearchIndex('fi')), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });

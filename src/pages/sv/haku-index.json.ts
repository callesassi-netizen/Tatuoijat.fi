import type { APIRoute } from 'astro';
import { buildSearchIndex } from '../../lib/search';

/** Förgenererat sökindex (sv). Se kommentaren i /haku-index.json.ts. */
export const GET: APIRoute = async () =>
  new Response(JSON.stringify(await buildSearchIndex('sv')), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });

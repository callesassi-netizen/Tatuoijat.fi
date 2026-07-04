import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// En md-fil per studio. Studion äger profilsidan (/artistit/{slug}/).
// Kort beskrivning (fi) i brödtexten, sv under `## sv` — fylls via claim.
const studios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/studios' }),
  schema: z.object({
    name: z.string(),
    // slug, matchar src/content/cities/. Utelämnas när staden saknar
    // stadssida — profilen visas då utanför stadssidorna tills fixat.
    city: z.string().optional(),
    // Visningsplats när city-slug saknas (rå stad eller region ur seed).
    place: z.string().optional(),
    district: z.string().optional(), // stadsdel, t.ex. Punavuori
    styles: z.array(z.string()).default([]), // slugs, matchar src/content/styles/ (tomt = fylls via claim)
    premium: z.boolean().default(false), // true = featured-badge, topplacering, galleri
    website: z.string().url().optional(), // ENDAST verifierad — gissa aldrig domäner
    instagram: z.string().optional(), // studions egen handle utan @, ENDAST när känd
    // Artisternas personliga IG-handles när namnen är okända (non-FTAA-
    // seed listar ibland bara handles) — visas som @-chips på profilen.
    artistInstagrams: z.array(z.string()).default([]),
    address: z.string().default(''),
    images: z.array(z.string()).default([]), // fylls ENDAST efter tillstånd, se Bildpolicy
    verified: z.boolean().default(false), // true när studion bekräftat/claimat sin profil
    ftaaMember: z.boolean().default(false), // FTAA:s publika medlemslista → trust-badge
  }),
});

// En md-fil per artist (person). Ingen egen publik sida ännu —
// renderas på studions profil med personlig IG-länk.
const artists = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artists' }),
  schema: z.object({
    name: z.string(),
    studio: z.string(), // slug, matchar src/content/studios/
    instagram: z.string().optional(), // personlig handle utan @
    ftaaMember: z.boolean().default(false),
  }),
});

// Intro-texter (fi + `## sv`) för stadssidor — unikt innehåll per sida.
const cities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cities' }),
  schema: z.object({
    name: z.string(), // Helsinki
    nameSv: z.string().optional(), // Helsingfors — utelämna om samma som fi
    nameLocative: z.string(), // "Helsingissä" / "Tampereella" för rubriken "Tatuoijat {…}"
    order: z.number().default(99),
  }),
});

// Intro-texter (fi + `## sv`) för stilsidor — unikt innehåll per sida.
const styles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/styles' }),
  schema: z.object({
    name: z.string(), // Realismi
    nameSv: z.string().optional(), // Realism
    order: z.number().default(99),
  }),
});

export const collections = { studios, artists, cities, styles };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// En md-fil per studio/artist. Kort beskrivning (fi) i brödtexten,
// sv-översättning i samma fil under `## sv`-rubrik.
const artists = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artists' }),
  schema: z.object({
    name: z.string(),
    city: z.string(), // slug, matchar src/content/cities/
    styles: z.array(z.string()).default([]), // slugs, matchar src/content/styles/
    premium: z.boolean().default(false), // true = featured-badge, topplacering, galleri
    studio: z.string().optional(), // studionamn om artisten är en person
    district: z.string().optional(), // stadsdel, t.ex. Punavuori
    website: z.string().url().optional(),
    instagram: z.string().optional(), // utan @
    address: z.string().default(''),
    images: z.array(z.string()).default([]), // fylls ENDAST efter tillstånd, se Bildpolicy
    verified: z.boolean().default(false), // true när studion bekräftat/claimat sin profil
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

export const collections = { artists, cities, styles };

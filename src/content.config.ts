import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Handles interpoleras i https://instagram.com/{handle} och länkas som href —
// tillåt bara tecken Instagram själva tillåter (stoppar ../, ?query, javascript: m.m.).
const igHandle = z.string().regex(/^[A-Za-z0-9._-]+$/, 'Ogiltig Instagram-handle');

// Inläggs-URL:er för Instagram-embeds (handoff §8). Måste peka på ett
// konkret inlägg på instagram.com — annat vore fel data (och Metas
// embed.js kan bara processa instagram.com/p|reel-permalänkar).
const igPostUrl = z
  .string()
  .url()
  .regex(
    /^https:\/\/(www\.)?instagram\.com\/(p|reel)\/[A-Za-z0-9_-]+\/?$/,
    'Måste vara en instagram.com/p/ eller /reel/ permalänk',
  );

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
    // Paketnivå — SANNINGSKÄLLAN för hela feature-matrisen (paket-handoff).
    // perus = gratis (default), pro = betald mellannivå, premium = topp.
    // Härledning i lib/content.ts: featured = tier premium, isPaid = pro|premium.
    // Priser/etiketter/matris bor i src/data/pricing.ts. Visningsnamn för
    // perus är "Ilmainen"/"Gratis" — enum-sluggen är ett stabilt kod-id.
    tier: z.enum(['perus', 'pro', 'premium']).default('perus'),
    // DEPRECATED: ersatt av tier. Valfri alias så de befintliga
    // `premium: false`-raderna validerar orörda. Läs ALDRIG i ny kod —
    // studioTier() tolkar kvarvarande premium:true som tier premium.
    premium: z.boolean().default(false),
    // ENDAST verifierad — gissa aldrig domäner. https-kravet stoppar
    // javascript:-URL:er (z.url() släpper igenom alla scheman) — fältet
    // renderas som href och fylls via claim.
    website: z.string().url().startsWith('https://').optional(),
    // Boka-tid-länk till studions EGET externa bokningssystem, ENDAST när
    // känd (matris: Pro/Premium). Samma https-krav som website — renderas
    // som href. Netlify-kontaktformuläret (ArtistPage) är den cookiefria
    // vägen när ingen extern bokning finns.
    bookingUrl: z.string().url().startsWith('https://').optional(),
    phone: z.string().optional(), // renderas som tel: på Pro/Premium (matris: Full kontakt)
    hours: z.string().optional(), // öppettider, fritext ("Ma–Pe 11–18, La 12–16"); Pro/Premium
    instagram: igHandle.optional(), // studions egen handle utan @, ENDAST när känd
    // Artisternas personliga IG-handles när namnen är okända (non-FTAA-
    // seed listar ibland bara handles) — visas som @-chips på profilen.
    artistInstagrams: z.array(igHandle).default([]),
    address: z.string().default(''),
    images: z.array(z.string()).default([]), // fylls ENDAST efter tillstånd, se Bildpolicy
    // Instagram-embeds (handoff §8) — lagligt utan artisttillstånd, innehållet
    // serveras av Instagram. Max 2, facade-renderas (InstagramEmbed.astro).
    // Tomt = dagens läge (monogram + IG-knapp), fylls batchvis av Morpheus.
    instagram_posts: z.array(igPostUrl).max(2).default([]),
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
    instagram: igHandle.optional(), // personlig handle utan @
    // Instagram-embeds (handoff §8) för personer utan egen studio-instagram —
    // aggregeras in på studioprofilen (max 2 totalt, se ArtistPage.astro).
    instagram_posts: z.array(igPostUrl).max(2).default([]),
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

# CLAUDE.md — MUSTE (tatueringskatalog FI)

Instruktioner för Claude Code. Läs även `design-brief-och-handoff.md` (brand, motion, UX) och Claude Design-exporten (wireframes, variant 1b vald för Hem).

## Vad detta är

Katalog över tatuerare/studios i Finland. Tvåspråkig (fi primärt, sv sekundärt). Affärsmodell: gratis-listningar + premium-profiler (~190–290 €/år). Primära mål: ranka på Google ("tatuoija helsinki", "tatuointi hinta", stilsökningar) och kännas premium.

## Stack (beslutad)

- **Astro** med statisk output. Zero-JS som default; öar av interaktivitet endast där det behövs (filter-chips, mobilmeny).
- Ingen backend, ingen databas, inget CMS i MVP. Innehåll = filer i repot.
- Astros inbyggda View Transitions för sidövergångar (artistkort → profil morph).
- CSS: vanilla med custom properties för brand-tokens. Inga UI-ramverk, ingen Tailwind.
- Deploy: GitHub → Netlify (samma flöde som Calles portfolio-projekt).

## Innehållsmodell (.md-filerna)

En markdown-fil per studio/artist: `src/content/artists/{slug}.md`

```yaml
---
name: "Studio Musta Neula"
city: helsinki            # slug, matchar src/content/cities/
styles: [realismi, fineline]   # slugs, matchar src/content/styles/
premium: false            # true = featured-badge, topplacering, galleri
website: "https://..."
instagram: "handle"       # utan @
address: ""               # valfri
images: []                # fylls ENDAST efter tillstånd, se Bildpolicy
verified: false           # true när studion bekräftat/claimat sin profil
---
Kort beskrivning (fi). Sv-översättning i samma fil under `## sv`-rubrik.
```

- `src/content/cities/{slug}.md` och `src/content/styles/{slug}.md`: intro-texter (fi+sv) för stads-/stilsidor — unikt innehåll per sida, ALDRIG samma malltext.
- Sidor genereras programmatiskt: `/tatuoijat/{city}/`, `/tyylit/{style}/`, `/artistit/{slug}/`, sv-versioner under `/sv/...`.
- Premium styrs av frontmatter-flaggan — ingen betalningsintegration i MVP (faktura/Stripe Payment Link hanteras manuellt).

## Bildpolicy (VIKTIGT — juridik)

1. **Skrapa ALDRIG portfoliobilder från Instagram/webbsidor.** Tatueringsfoton ägs av artisterna. Inga undantag.
2. **Lansering:** profiler utan egna bilder får en snygg monogram-/mönsterplatta i brand-färgerna (genereras från namnets initialer) + tydlig länk till artistens Instagram. Designen får ALDRIG se trasig ut utan bilder — det är default-läget dag 1.
3. **Galleri fylls via tillstånd:** outreach-mejlen ber studios skicka 3–5 bilder eller godkänna visning. `images: []` fylls först då. Detta är också claim-loopen som driver premium-försäljning.
4. **Sajtens egna ytor** (hero-collage, stilgalleriets exempel-plattor, OG-bilder): egna/licensierade miljöbilder (studiomiljö, process — Unsplash/Pexels med licenskoll) eller abstrakta brand-grafiker. ALDRIG bilder som ser ut att vara en listad artists verk.
5. Pipeline: AVIF/WebP med fallback, responsiva `srcset`, lazy-load under vecket, `aspect-ratio` reserverad yta (CLS = 0). Astro `<Image>` sköter detta.

## SEO-krav

- Hreflang fi/sv per sida, canonical, XML-sitemap, robots.txt.
- Schema.org: `TattooParlor` per profil (namn, adress, stad, url), `BreadcrumbList` överallt, `FAQPage` på prisguiden, `ItemList` på stads-/stilsidor.
- Unika title/meta per sida enligt mönster: stad = "Tatuoijat {Stad} — vertaile portfolioita | MUSTE", profil = "{Namn} — tatuoija, {Stad} | MUSTE".
- Prisguiden `/hinnat` ("Mitä tatuointi maksaa?") är SEO-magneten — riktig, hjälpsam long-form.
- Core Web Vitals grönt är ett hårt krav. Ingen webfont-blocking (font-display: swap, preload de två fonterna), ingen JS över ~30 kB totalt.
- 404-sida, OG-bilder per sidtyp, favicon/manifest.

## Motion (från briefen, sektion 4b)

Hero-scrub med CSS `animation-timeline` (+ IntersectionObserver-fallback), "arket"-övergången mörk→papper, staggered reveal, kort-hover, bläck-underline, View Transitions mellan kort↔profil. Endast transform/opacity. `prefers-reduced-motion` respekteras överallt. Inga scroll-bibliotek.

## Namn & domän

Arbetsnamn MUSTE. Domän är INTE vald (kandidater i `idekatalog-v2.md`) — hårdkoda aldrig domännamnet: använd en `SITE_URL`-konstant i config, logotyp som en komponent, sajtnamn i en i18n-strängfil. Namnbyte ska vara en 3-raders ändring.

## Analytics & juridik

- **Ingen GA4/cookies i MVP** → ingen cookiebanner behövs (premiumkänsla + enkelhet). Cookiefri analytics (t.ex. Plausible/Umami) kan läggas till senare; dag 1 räcker Google Search Console.
- Sidfot: kontaktsida med rättelse-/borttagningsbegäran för listade företag (företagsdata är offentlig, men vi svarar snabbt på ändringsönskemål), impressum/om-sida.

## Startdata

Morpheus (Cowork-agenten) levererar `data/artists-seed.json` med studios per stad (namn, stad, webb, IG — insamlat från öppna källor) + intro-texter för städer/stilar. Bygg gärna en liten import-script som genererar md-filerna från denna.

## Arbetssätt

- Bygg i ordning: tokens/layout → Hem → stadssida → profil → stilsida → hinnat → liity → sv-versioner.
- Committa per färdig sida. Kör Lighthouse lokalt innan varje sida bockas av (mål: 95+ på Performance/SEO/A11y).
- Fråga hellre än anta vid konflikt mellan wireframe och denna fil — denna fil vinner vid SEO/juridik, wireframen vinner vid visuell utformning.

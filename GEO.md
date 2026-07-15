# GEO.md — AI-sök-optimering för MUSTE (tatueringskatalogen) — instruktioner till Claude Code

Syfte: göra katalogsidorna citerbara i AI-sök (ChatGPT/Perplexity/Google AI Overviews/Gemini). Bygg in från start. Kompletterar de befintliga handoff-dokumenten och `CLAUDE.md` — bildpolicyn gäller ovillkorligen (länk, aldrig skrapa).

## Princip

AI:er hämtar svar på två sätt: **live-hämtning** (Perplexity, AI Overviews, ChatGPT/Gemini-sök — funkar som SEO) och **träningsdata** (bygg citerbarhet på sikt via bra publikt innehåll nu). Målet på varje sida: **vara det tydligast strukturerade, mest trovärdiga svaret på en specifik fråga.** En kurerad katalog är naturligt välplacerad att bli den citerade källan för "paras tatuoija/tatuointiliike {stad}" — om den struktureras rätt.

## På-sidan (obligatoriskt — bygg in)

### 1. Svara-först-block (högsta hävstången)
Direkt under varje H1/H2, ett fristående stycke på **40–60 ord** som svarar rakt på rubrikens fråga.
- Stadssida: "Helsingissä toimii {N} tatuointistudiota ja {M} tatuoijaa tyyleissä realismi, fineline, blackwork ja traditional. …"
- Stilsida: "Fineline-tatuointi on ohutta, hienoa viivatyötä. Helsingissä sitä tekee {N} tatuoijaa. …"
- Prissida (`/hinnat`): "Pieni tatuointi maksaa Suomessa yleensä 60–150 €, keskikokoinen 150–400 €. Hinta riippuu koosta, tyylistä ja tatuoijasta. …"

### 2. Frågeformade rubriker
Riktiga sökfrågor som H2/H3: "Paljonko tatuointi maksaa Helsingissä?", "Kuka on paras fineline-tatuoija Tampereella?", "Miten valitsen hyvän tatuoijan?". Matcha `keyword-research-2026-07-04.md`.

### 3. Strukturerad data (JSON-LD) — per sidtyp
- **Studioprofil:** `TattooParlor` (subtyp av LocalBusiness) med `name, address (PostalAddress), url, sameAs [instagram], areaServed`. `ftaa_member` → beskriv i text. `dateModified`.
- **Artistprofil:** `Person` (`jobTitle: "tatuoija"`, `worksFor` → studion, `sameAs [instagram]`).
- **Listsidor (stad, stil):** `CollectionPage` + `ItemList` där varje `itemListElement` är en studio/artist. Märker sidan som kurerad lista → AI behandlar dig som källan för "tatuoijat {stad}".
- **FAQ på stads-/stil-/hinnat-sidor:** `FAQPage` (`Question`/`acceptedAnswer`). Högsta GEO-effekten.
- **`BreadcrumbList`** på djupa sidor.

Exempel (FAQPage):
```json
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
  {"@type":"Question","name":"Paljonko pieni tatuointi maksaa?",
   "acceptedAnswer":{"@type":"Answer","text":"Pieni tatuointi maksaa Suomessa yleensä 60–150 €. Hintaan vaikuttavat koko, tyyli, sijainti kehossa ja tatuoijan kokemus."}}
]}
```

### 4. Hårda siffror + tabeller
Prisspann per storlek/stil, antal artister per stad/stil, jämförelser — som riktig HTML-`<table>`. `/hinnat` byggs som AI-bete. Siffror ökar citat markant.

### 5. Färskhet
Synligt "Päivitetty {datum}" + `dateModified` i schema. Håll listor/priser uppdaterade (färskt innehåll citeras mångdubbelt oftare) — passar även claim-inflödet.

### 6. Ren, server-renderad HTML
Astro SSG ger detta gratis — innehållet i HTML-källan, inte via JS (många AI-crawlare kör inte JS). OBS: om IG-inlägg renderas som embed-script syns de INTE för AI — ha alltid text/länk-fallback så sidans substans finns i HTML. Semantiska taggar, en H1/sida.

### 7. `llms.txt` i roten
```
# MUSTE
> Kurerad katalog över tatuerare och studios i Finland (fi/sv). Artister per stad och stil, portfolios, prisguide.
## Nyckelsidor
- /hinnat: Tatuoinnin hinnat
- /helsinki/: Tatuoijat Helsingissä
- /helsinki/fineline/: Fineline Helsingissä
- /liity/ (/hinnasto): Liity mukaan (studios)
```

### 8. robots.txt + sitemap
Släpp in AI-crawlare (om ni vill synas): `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`. Not: AI Overviews använder vanliga Googlebot (blockera ej); `Google-Extended` styr endast Geminis träningsanvändning. XML-sitemap + hreflang fi/sv.

### 9. Intern länkning (topical cluster)
Länka stil ↔ stad ↔ artist ↔ studio ↔ /hinnat tätt. Hjälper AI förstå heltäckande ämnestäckning.

## Utanför sidan (separat spår, efter launch)
~85 % av AI-synligheten kommer från *andras* domäner. Omnämnanden på kataloger, forum (Reddit r/Tampere-trådarna, Suomi24), recensioner; konsekvent NAP; ev. Wikidata. Morpheus/Calles jobb — men bygg sidorna värda att citera.

## Mätning (gratis, månadsvis)
Kör 20–30 riktiga frågor ("paras tatuoija Helsinki", "fineline tatuointi Tampere", "paljonko tatuointi maksaa") i ChatGPT/Perplexity/Gemini/AI Overviews och logga om MUSTE nämns/citeras.

## Gör INTE
- Tunna doorway-stads-/stilsidor (skadar även AI-trovärdighet — samma regel som SEO, se seo-handoff).
- Skrapade bilder eller påhittad data (bryter CLAUDE.md-bildpolicyn + straffar auktoritet).
- JS-only-rendering av kärninnehåll.

# Design-brief: Tatueringskatalogen (arbetsnamn "MUSTE")

**2026-07-02 · Underlag för Claude Design-wireframe → handoff till Claude Code.**
Domän väljs senare — kandidater sparade i `idekatalog-v2.md` (tatuoijahaku.fi, tatuointihaku.fi, tatuoijat.fi, tatuointistudiot.fi). Allt byggs under arbetsnamn; namnbyte påverkar bara logotyp/metadata.

---

## 1. Arbetsnamn & koncept

**MUSTE** (finska för "bläck") — kort, brandbart, fungerar på både fi och sv.
Tagline: fi *"Löydä tatuoijasi"* · sv *"Hitta din tatuerare"*.

**Vad sajten är:** Finlands katalog över tatuerare och studios. Användaren bläddrar per **stad** och **stil** (traditional, realism, fineline, blackwork, japansk, geometrisk …), jämför portfolios och kontaktar/bokar. Studios listas gratis; premium-profil ger galleri, featured-plats och lyft i stad/stil-listor.

**Kärninsikt som styr designen:** en tatuering är ett dyrt, permanent och estetiskt beslut → **portfoliobilderna är produkten**. Designen ska lyfta fram artisternas verk, aldrig konkurrera med dem.

---

## 2. Brand

### Färger (brand colors)

| Roll | Färg | Hex | Användning |
|------|------|-----|------------|
| Primär mörk | Bläcksvart | `#101014` | Hero, header, footer, mörka sektioner |
| Primär ljus | Papper/benvit | `#F6F2EA` | Sidbakgrund, kort |
| Accent | Flash-röd | `#C7361B` | CTA-knappar, aktiva filter, badges — sparsamt |
| Sekundär accent | Ockra/guld | `#C9A227` | Premium-markering ("Featured"), detaljer — mycket sparsamt |
| Text mörk | Kolgrå | `#2B2B30` | Brödtext på ljus bakgrund |
| Text ljus | Rökvit | `#EDEAE2` | Text på mörk bakgrund |
| Stödgrå | `#8A8890` | Metadata, captions, borders (`#DDD8CC` på ljust) |

Logik: bläck på papper + klassisk flash-röd. Mörkt och elegant utan att bli "gotisk klyscha". Guld reserverad för premium → betald synlighet får ett visuellt värde.

### Typografi

- **Display/rubriker:** kondenserad, tung grotesk — *Archivo Black* eller *Anton* (Google Fonts). Affisch-känsla à la flash-posters, utan blackletter-klyschor.
- **Brödtext/UI:** *Inter* — neutral, läsbar, professionell.
- Stor typografisk skala i hero (clamp ~2.5–5rem), stram och luftig i UI.

### Ton & känsla

Premium, konstnärligt, tryggt. Mer "galleri" än "gula sidorna". Referenspunkt: konstgalleri-sajt möter modern bokningstjänst. INTE: grunge, splatter, gotiska fonter, mörkersvart med neon.

---

## 3. Sajtstruktur (templates att wireframa)

1. **Hem** — hero med sök (stad + stil), featured-artister (guld-badge), stilgalleri (visuella ingångar per stil), städer-grid, "Så funkar det", prisguide-teaser, SEO-text.
2. **Stadssida** (`/tatuoijat/helsinki`) — rubrik + intro, filterbar lista (stil, premium först), karta valfritt i v2.
3. **Stilsida** (`/tyylit/realismi`) — stilbeskrivning + bildexempel, artister som gör stilen, korslänk till städer.
4. **Studio-/artistprofil** — namn, stad, stilar (chips), portfolio-galleri (kärnan — stor bildyta), om-text, hygien/förtroende (förbundsmedlem etc.), kontakt/IG/boknings-CTA. Premium = fler bilder + featured-badge + topplacering.
5. **Prisguide** (`/hinnat` — "Mitä tatuointi maksaa?") — SEO-magnet, innehållssida med tabeller.
6. **För studios** (`/liity`) — säljsidan: gratis vs premium, pris ~190–290 €/år, FAQ, anmälningsformulär.

**Språk:** fi primärt + sv (`/sv/…`), hreflang. Design ska rymma båda (sv ~15 % längre strängar).
**Mobil först** — merparten av trafiken blir mobil.

---

## 4. UX-principer

- Bilder dominerar; UI:t är tyst (bläcksvart/benvitt) och accentfärg används bara för handling.
- Max 2 klick från startsida till en artists portfolio.
- Filtrering utan sidladdning (stil-chips).
- Premium syns tydligt men gratis-listningar ser aldrig "trasiga" ut — hela katalogen ska kännas kuraterad.
- Core Web Vitals grönt: lazy-load bilder, inga tunga libs, statisk generering.
- Schema.org: LocalBusiness/TattooParlor per profil, FAQ på prisguiden, BreadcrumbList.

---

## 4b. Motion & effekter (premiumkänslan)

**Princip: ETT signaturmoment + konsekventa mikrointeraktioner slår tio effekter.** Allt är progressive enhancement — sajten fungerar felfritt utan. Endast `transform`/`opacity` animeras (aldrig layout), `prefers-reduced-motion` respekteras, LCP-bilden animeras aldrig in, CLS = 0.

**Signaturmoment (välj 1–2):**

1. **Hero-scrub (scroll-driven):** portfoliocollaget i heron skalar/tonar långsamt medan MUSTE-typografin sitter kvar — CSS `animation-timeline: view()/scroll()` (native scrubbing, noll JS; IntersectionObserver-fallback för äldre webbläsare).
2. **View Transitions API** mellan sidor: klick på artistkort → bilden "morphar" till profilsidans hero (shared element). Ger app-känsla i en helt vanlig MPA — perfekt för statisk sajt.
3. **Pinnad stilsektion** på startsidan: stilnamnen (Realismi, Fineline, Blackwork …) byts medan exempel-bilder scrubbar förbi. Awwwards-momentet — används bara här.

**Mikrointeraktioner (genomgående):**

- Artistkort-hover: bild `scale(1.03)` + mjuk skugglyft, 300ms ease-out.
- **Bläck-underline:** länkar får en understrykning som "blöder" ut från vänster vid hover (scaleX-transform) — tematiskt utan att vara gimmick.
- Staggered reveal: kort/galleribilder fadar upp sekventiellt (60–80ms delay per kort) när de scrollas in.
- Stil-chips med liten spring-easing vid val; aktiv chip = flash-röd.
- Mörk hero → benvit innehållsyta: bakgrunden tweenas vid scrollövergången (scroll-driven), känns som ett "ark" som tar över.

**Textur & detaljer:**

- **Subtil pappersgrain** (SVG-noise, ~3–4 % opacity, multiply) på benvita ytor — taktil känsla, ingen prestandakostnad.
- Långsam **marquee** med städer/stilar i footern (pausar på hover, `prefers-reduced-motion` stänger av).
- Skeleton-loaders med svag shimmer i bläckton vid bildladdning.

**Undvik:** custom cursors, smooth-scroll-bibliotek (Lenis o.d. — stör native scroll och CWV), horisontell scroll-hijacking, parallax på många element samtidigt, autoplay-video. Gimmicks sänker premiumkänslan snabbare än de höjer den.

**Demo:** `effekt-demo.html` i denna mapp visar hero-scrub, dark→light-övergång, staggered reveal, kort-hover, bläck-underline, grain och marquee med brand-paletten — öppna i webbläsare och känn efter.


---

## 5. Arbetsflöde (beslutat)

1. **Claude Design:** klistra in prompten ovan → iterera wireframe tills Calle är nöjd.
2. **Handoff:** exportera/dela resultatet (HTML) → in i projektmappen `tatueringskatalog/`.
3. **Claude Code:** bygg produktionssajten från wireframen + denna brief (statisk generering, fi/sv, schema.org). Morpheus skriver byggspec när wireframen är låst.
4. **Namnbyte:** när domän valts (Traficom-koll) byts logotyp/titel/metadata — designen är namnoberoende.

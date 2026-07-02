# Handoff: MUSTE — finsk katalog över tatuerare & studios

## Overview
MUSTE är en tvåspråkig (finska/svenska) katalog där användare bläddrar bland tatuerare och studios per **stad** och **stil**, jämför portfolios och kontaktar artisten direkt. Affärsmodellen är freemium: gratis-listningar plus betald **Premium** (~190–290 €/år) som ger "Featured"-placering, större galleri och topplacering i sök.

Detta paket innehåller hifi-wireframes för fyra sidor i både **mobil (390 px)** och **desktop (1440 px)**:
1. Hem (Etusivu)
2. Stadssida (Tatuoijat Helsingissä)
3. Artist-/studioprofil (Aino Kettunen)
4. "För studios"-säljsida (Liity mukaan)

**Kärninsikt som styr all design:** en tatuering är ett dyrt, permanent, estetiskt beslut → **portfoliobilderna är produkten**. UI:t ska vara tyst och lyfta artisternas verk, aldrig konkurrera med dem.

## About the Design Files
Filerna i detta paket är **designreferenser skapade i HTML** — en prototyp som visar avsedd look, layout och beteende. De är **inte produktionskod att kopiera rakt av**.

- `Muste Wireframes.dc.html` är en s.k. Design Component: alla åtta vyerna ligger i **samma fil**, staplade som "options" i ett pan/zoom-canvas (turer `t1`–`t3`). Den kräver runtimen `support.js` för att rendera i webbläsare. All CSS är **inline** på elementen — läs den direkt i markup:en.
- Uppgiften är att **återskapa dessa designer i målkodbasens befintliga miljö** (React/Next, Vue, SwiftUI, native osv.) med dess etablerade mönster, komponenter och stilsystem. Finns ingen kodbas ännu: välj lämpligt ramverk (rekommendation: **Next.js + TypeScript**, en innehållssajt med SSR/SSG för SEO — katalogsidor mår bra av server-rendering) och bygg där.
- Bygg **inte** vidare på Design Component-runtimen. Extrahera värdena (färg, typografi, mått, copy, layout) och implementera i riktig kod.

## Fidelity
**Hög (hifi).** Slutliga varumärkesfärger, typografi (Archivo Black + Inter) och spacing är satta. Återskapa UI:t pixel-nära med kodbasens egna komponenter. Portfoliobilderna är dock **gråtonade platshållare** — de ersätts med riktiga foton senare (kräver artisternas tillstånd). Bygg bildytorna som `object-fit: cover`-containrar med de mått som anges nedan.

## Layout-karta i wireframe-filen
Öppna `Muste Wireframes.dc.html`. Varje vy har ett id (badge synlig i canvas):

- **Mobil:** `2b` Hem · `2a` Stadssida · `3a` Artistprofil · `3b` Liity mukaan
- **Desktop:** `3c` Hem · `3d` Stadssida · `3e` Artistprofil · `3f` Liity mukaan
- (`1a`/`1b`/`1c` i turen längst ner är **förkastade** hero-utforskningar — bygg dem inte. `2b` är den valda Hem-riktningen.)

Varje vy har `data-screen-label` på sitt rot-`<div>` för enkel identifiering.

---

## Design Tokens

### Colors
| Roll | Hex | Användning |
|---|---|---|
| Bläcksvart | `#101014` | Hero, header, footer, mörka sektioner, Premium-kort |
| Benvit / papper | `#F6F2EA` | Sidbakgrund, "arket", inputfält på ljus botten |
| Vit | `#FFFFFF` | Kort, flytande sökkort |
| Flash-röd | `#C7361B` | **ENDAST** CTA-knappar och aktiva val (aktiv chip/filter) |
| Guld | `#C9A227` | **ENDAST** "Featured"-premium-badge |
| Text mörk | `#2B2B30` | Brödtext/rubriker på ljust |
| Text ljus | `#EDEAE2` | Text på mörkt |
| Metadata | `#8A8890` | Sekundär text, labels, eyebrows, ikoner |

**Regel:** rött och guld är strikt reserverade. Rött får aldrig användas för dekoration, bara för handling/aktivt val. Guld bara för Featured-badgen.

**Bildplatshållare (gråskala, byts mot foto):** `#3E3E46`, `#45434B`, `#4A4A52`, `#55535A`, `#5A5860`, `#66646B`, `#6E6C73` (mörka, i collage på svart botten) och `#8F8D88`, `#9C9992`, `#A9A7A2`, `#ABA8A1`, `#B3B0A9`, `#B5B2AB`, `#B8B5AE`, `#BEBBB4`, `#C2C0BB`, `#C6C3BC`, `#C8C5BE`, `#CBC8C1` (ljusare, i kort/gallerier på benvit botten).

### Typography
- **Rubriker:** `Archivo Black` (Google Fonts, vikt 400 — fontens enda vikt; kondenserad, tung, affisch-känsla). Används för logotyp, H1, sektionsrubriker, artistnamn, siffror i "Näin se toimii".
- **Brödtext/UI:** `Inter` (400/500/600/700).
- **UNDVIK:** grunge, splatter, gotiska/blackletter-fonter, neon.

Typoskala (px), värden hämtade direkt ur mockarna:
| Element | Mobil | Desktop |
|---|---|---|
| Hero H1 "MUSTE" | 50 | 110 |
| Sid-H1 (stad/profil) | 34–42 | 52–72 |
| Sektionsrubrik (H2) | 22 | 30 |
| Artistnamn (kort) | 15 (13 i grid) | 16 |
| Brödtext | 13–15 | 14–17 |
| Eyebrow/label | 10, `letter-spacing:.14em`, uppercase, `#8A8890` | 10.5, samma |
| Chip/tagg | 11–12 | 11–13 |
| Metadata | 11–12.5 | 12.5–13 |

Hero-"MUSTE" har `letter-spacing:.01em`, `line-height:.92–.96`.

### Spacing & mått
- Mobil sidopadding: **20 px** (kort-grid ibland 16 px).
- Desktop sidopadding: **48 px**.
- "Arket" (benvit innehållsyta) rundade topphörn: **24 px mobil / 32 px desktop**, och överlappar den mörka heron med `margin-top: -20…-30px` (skapar "ark tar över"-effekten).
- Kort-border-radius: **12–14 px**. Chips/knappar: **10 px** (piller/chip: `999px`).
- Kortram: `1px solid rgba(16,16,20,.08)`.
- Flytande sökkort-skugga: `0 12px 32px rgba(16,16,20,.22)`.
- Grid-gap: mobil 10–14 px, desktop 14–20 px.

### Radius / shadow-sammanfattning
- Radius: chip `999px`, knapp/input `10px`, kort `12–14px`, ark `24px`(mobil)/`32px`(desktop).
- Shadow: endast på det flytande sökkortet/kontaktkortet — `0 12px 32px rgba(16,16,20,.22)`. Kort i övrigt använder tunn ram, ingen skugga.

---

## Data-modell (härledd ur designen)
- **City**: `name`, `artistCount` (t.ex. Helsinki 124, Tampere 43, Turku 38, Oulu 21, Jyväskylä 17, Kuopio 12), `studioCount`.
- **Style** (fast lista): Realismi, Fineline, Blackwork, Traditional, Japanilainen, Geometrinen.
- **Artist/Studio**: `name`, `studioName`, `city`, `district` (t.ex. Punavuori, Kallio), `styles[]`, `isFeatured` (bool → guldbadge + fler bilder + topplacering), `portfolio[]` (bilder), `bio`, `instagram`, `trust[]` (hygienpass, förbundsmedlemskap, år på studio), `address`, `bookingUrl`.
- **Plan**: Ilmainen (0 €, 5 bilder) / Premium (190–290 €/år, 24 bilder, featured, topplacering).

---

## Screens / Views

### 1. Hem (mobil `2b` / desktop `3c`)
**Syfte:** användaren landar, förstår vad MUSTE är, och startar en sökning (stad + stil) eller bläddrar via stil/stad.

**Sektionsordning (konstant, båda breddar):**
1. **Header** — bläcksvart. Mobil: hamburgermeny (vänster), MUSTE-logo (mitten, Archivo Black 17px), sökikon (höger). Desktop: logo (vänster), navlänkar "Kaupungit / Tyylit" + pillerknapp "Studioille: Liity mukaan" (höger).
2. **Hero** — bläcksvart.
   - Mobil (`2b`): kompakt bildcollage (2×2, ~200 px högt) med gradient-overlay `linear-gradient(180deg, rgba(16,16,20,0) 0%, rgba(16,16,20,.92) 58%, #101014 100%)`; "MUSTE" (Archivo Black 50px) + underrubrik ovanpå.
   - Desktop (`3c`): 2-kolumnsgrid — vänster: "MUSTE" 110px + brödtext + sökfält; höger: 3-kolumns bildcollage i varierande höjd.
3. **Flytande sökkort** — vitt kort som ligger **över skarven** mellan mörk hero och benvit ark (mobil `margin-top:-42px`). Innehåll: två dropdowns (**Kaupunki**, **Tyyli**, var för sig med uppercase-label + värde + `▾`), röd CTA **"Näytä tatuoijat"**, och därunder rad med "Suosittua:"-chips (Helsinki/Tampere/Turku). Desktop-heron har istället en **enrads** sökbar (stad | delare | stil | röd CTA) i vänsterkolumnen, chips under.
4. **Benvit ark** — `border-radius: 24/32px` top, tar över resten av sidan.
5. **Nostetut artistit (Featured)** — eyebrow "Premium", H2. Mobil: två stående featured-kort. Desktop: 3-kolumnsgrid. Alla med guld Featured-badge.
6. **Selaa tyylin mukaan (Tyylit)** — sex stilar. Mobil: **horisontell karusell**, kort 140×168 px, `gap:10px`, nästa kort "peekar" tydligt (~70 px synligt). Desktop: 3×2-grid, kort 190 px höga. Varje kort: gråtonad bildbotten + stilnamn (Archivo Black, vit, text-shadow) nere till vänster.
7. **Selaa kaupungin mukaan (Kaupungit)** — 2-kolumnsgrid (mobil) / 3-kol (desktop) med vita kort: stadsnamn (Archivo Black) + "N tatuoijaa".
8. **Näin se toimii** — bläcksvart sektion, 3 steg med stora grå siffror 01/02/03 (Archivo Black), rubrik + brödtext. Mobil: staplad. Desktop: 3 kolumner.
9. **Footer** — bläcksvart. MUSTE-logo, länkar (Kaupungit / Tyylit / Studioille: Liity mukaan), copyright, språkväxlare "**Suomeksi** · På svenska" (aktivt språk i rött).

**Artistkort-anatomi (KONSTANT i hela sajten):** bild överst → artistnamn (Archivo Black) → "stad · studio" (metadata) → stil-chips (outline-piller) → ev. guld Featured-badge uppe till vänster på bilden. Featured-badge: `background:#C9A227; color:#101014; text:"★ Featured"; uppercase; letter-spacing:.08em; padding:5px 10px; radius:999px`.

### 2. Stadssida (mobil `2a` / desktop `3d`)
**Syfte:** bläddra alla artister i en stad, filtrera på stil, jämföra.

**Layout:**
1. Header (som ovan).
2. Kompakt mörk hero: "← Etusivu"-länk, eyebrow "Kaupunki", H1 **"Tatuoijat Helsingissä"**, kort intro ("124 tatuoijaa ja 38 studiota. …"), tunn filmremsa av bilder som klipps av arket.
3. Flytande sökkort/-bar med **Helsinki förvalt**; stads-chips direkt under (Helsinki aktiv = **röd fylld**, övriga outline). Mobil under CTA-knappen; desktop i samma rad.
4. **Stil-filterchips** — horisontell scroll (mobil) / rad (desktop): Kaikki (aktiv/röd) · Realismi · Fineline · Blackwork · Traditional · Japanilainen · Geometrinen.
5. Resultatrad: "124 tulosta" + "Järjestä: Suositellut ▾".
6. **Artistlista:** featured-kort **överst** (2 st, stora, guldbadge), därefter grid av vanliga listningar (mobil 2-kol mindre kort; desktop fortsätter i samma 3-kol-grid). **Viktigt:** gratis-listningar använder **exakt samma kort-anatomi** — bara utan guldbadge och med färre/mindre bilder. De får aldrig se "trasiga" eller sämre ut.
7. "Näytä lisää (118)" outline-knapp.
8. Footer.

### 3. Artist-/studioprofil (mobil `3a` / desktop `3e`)
**Syfte:** portfoliot är kärnan; bygga förtroende; kontakta/boka.

**Layout:**
1. Header.
2. Mörk identitets-hero: "← Tatuoijat Helsingissä", guld Featured-badge, H1 artistnamn (**Aino Kettunen**), "studio · stadsdel, stad", stil-chips (outline, ljusa på mörkt).
3. **Kontakt/boknings-kort** — flytande vitt kort över skarven. Röd CTA **"Varaa aika"**, outline-knapp "Instagram · @ainokettunen", microcopy "Vastaa yleensä 1–2 arkipäivässä". Desktop: kortet sitter i höger **sidopanel** (340 px) tillsammans med Tietoa + Luotettavuus; portfoliot tar vänsterkolumnen.
4. **Portfolio (kärnan)** — stort galleri. Mobil: 2-kolumns masonry (varierande höjder 150–220 px). Desktop: `columns:3` masonry. Rubrik "Portfolio" + "24 työtä". "Näytä kaikki 24 työtä"-knapp. **Premium = fler bilder** (24 vs 5 för gratis).
5. **Tietoa** — bio-text.
6. **Luotettavuus** — vitt kort med bock-lista: hygienpass/omavalvonta, förbundsmedlemskap (Suomen Tatuointitaiteilijat ry), år på studio; + studionamn & adress.
7. Footer.

### 4. Liity mukaan / För studios (mobil `3b` / desktop `3f`)
**Syfte:** B2B-säljsida, konvertera studios till Premium.

**Layout:**
1. Header (på desktop är "Liity mukaan" markerad som aktiv — ljus fylld pill).
2. Mörk hero: eyebrow "Studioille ja tatuoijille", H1 **"Liity mukaan."**, intro.
3. **Prisjämförelse** — två kort. **Ilmainen** (vitt kort): 0 €/år, bock-lista (profil + kontakt + taggar, 5 bilder, synlighet i sök), outline-CTA "Luo ilmainen profiili". **Premium** (bläcksvart kort med guld Featured-badge): 190–290 €/år, bock-lista (featured-plats, 24 bilder, topplacering, allt i gratis), röd CTA "Aloita Premium". Mobil: staplade. Desktop: sida vid sida, centrerade (max ~940 px).
4. **FAQ** — expanderbara rader (`+`-ikon): Kuka voi liittyä? / Miten Featured-paikat jaetaan? / Voinko perua milloin vain? / Kenellä on oikeudet kuviin?
5. **Ilmoittaudu-formulär** — fält: Nimi tai studio, Kaupunki (select), Sähköposti, Instagram (valinnainen). Röd CTA "Lähetä hakemus" + microcopy "Vastaamme kahden arkipäivän sisällä." Desktop: FAQ + formulär sida vid sida.
6. Footer.

---

## Interactions & Behavior

### Navigation (klickflöde i prototypen)
- Header-logo / "← Etusivu" → **Hem**.
- Sök-CTA "Näytä tatuoijat" och stads-chips/stadskort → **Stadssida** för vald stad.
- Klick på artistkort → **Artistprofil**.
- "Studioille: Liity mukaan" (header + footer) → **Liity mukaan**.
- **UX-regel: max 2 klick** från Hem till en artists portfolio (Hem → Stadssida → Profil, eller Hem → Featured-kort → Profil).

### Animation / motion (förbered i bygget)
Designen är byggd för motion i implementationssteget:
- **Heron är en sticky/pinnad sektion med scroll-scrub:** när användaren scrollar ska den **benvita "ark"-ytan med rundade toppkanter glida upp och ta över** den mörka heron (arket har redan negativ top-margin + rundade topphörn för detta). Implementera t.ex. med `position: sticky` på heron + scroll-driven transform/translate på arket (IntersectionObserver eller scroll-timeline / Framer Motion `useScroll`).
- Stil-karusellen: horisontell scroll med snap (`scroll-snap-type: x mandatory`), nästa kort peekar.
- Standard hover: kort lyfter subtilt (t.ex. `translateY(-2px)` + svag skugga), chips inverterar (outline → fylld) på hover, CTA mörknar något. Håll transitions korta (~150–200 ms, ease-out).
- FAQ-rader: expand/collapse med höjd-transition, `+` roterar till `×`.

### States
- **Aktiv chip/filter:** röd fylld (`#C7361B`, vit text). Inaktiv: outline (`1px solid rgba(16,16,20,.18)`, mörk text).
- **Featured:** guldbadge + topplacering + fler bilder.
- **Hover** (desktop): enligt ovan.
- **Loading:** skeleton-kort med gråtonade platshållare (samma gråskala som bildplatshållarna) medan listningar/portfolio hämtas.
- **Empty:** stad/stil utan träffar → vänlig finsk text + länk att nollställa filter (ej i mock, bygg det).
- **Form-validering:** e-post giltig, namn + stad obligatoriska; visa fältfel under respektive fält.

## Responsive behavior
- **Mobil först** (design vid 390 px). Desktop-referens 1440 px.
- Breakpoints (förslag): mobil < 768, tablet 768–1023, desktop ≥ 1024. Kollapsa desktop-navet till hamburger under tablet; grid 3-kol → 2-kol → 1-kol; sökbar enrad → staplad.

## Tvåspråkighet (viktigt)
- Sajten blir **tvåspråkig (fi/sv)**. All copy i mockarna är **finska**. Bygg med i18n från start (t.ex. `next-intl` / `i18next`), inga hårdkodade strängar.
- **Designa för ~15 % längre strängar** — svenska (och finska sammansättningar) kan bli längre. Undvik fasta bredder på knappar/chips/labels; låt text wrappa; testa med långa strängar.
- Språkväxlare i footern: "Suomeksi · På svenska", aktivt språk i rött.

## State Management
- Sök-/filterstate: `selectedCity`, `selectedStyle`, `sort` — helst i URL-query (`?city=helsinki&style=fineline`) så delning/SSR fungerar.
- Katalogdata (cities, styles, artists) från API/CMS; artistprofil per slug.
- Formulärstate på Liity mukaan (kontrollerade fält + validering + submit-status).
- Locale-state (fi/sv).

## Assets
- **Fonts:** Archivo Black + Inter via Google Fonts (redan länkade i prototypens `<helmet>`). Använd befintlig font-loading i kodbasen om sådan finns.
- **Ikoner:** hamburger och förstoringsglas är enkel inline-SVG i prototypen; "★", "✓", "▾", "+" är textglyfer — byt mot kodbasens ikonbibliotek.
- **Bilder:** alla portfolio-/collage-/stilbilder är **gråtonade platshållare**. Riktiga foton tillkommer senare och kräver artisternas tillstånd. Bygg bildytor som `object-fit: cover` med angivna proportioner.
- Inga varumärkes-/tredjepartsassets ingår.

## Files
- `Muste Wireframes.dc.html` — alla åtta vyerna (mobil + desktop), inline-CSS, id-märkta enligt kartan ovan.
- `support.js` — runtime som krävs för att öppna `.dc.html` i webbläsare (endast för att se prototypen; **implementera inte mot den**).

Öppna HTML-filen i en webbläsare för att panorera/zooma bland alla vyer. Läs inline-stilarna direkt i markup:en för exakta värden.

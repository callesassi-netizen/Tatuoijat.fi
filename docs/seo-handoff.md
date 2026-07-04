# SEO-handoff: MUSTE (finsk tatueringskatalog)

Skriven av Morpheus 2026-07-04. Baserad på (a) riktig Google.fi-autocomplete/related searches/People Also Ask insamlad 4/7, (b) SERP-analys av "tatuointi helsinki" och "tatuointiliike tampere", (c) genomgång av denna kodbas. Affärsmålet styr allt: **ranka på stads-sökningarna → trafik till studiolistningar → sälja featured-platser till artister.**

## 0. Nulägesbild (viktigast först)

**Goda nyheter:** Ingen katalog rankar organiskt i toppen för "tatuointi helsinki" eller "tatuointiliike tampere". SERP:en består av local pack (Maps), enskilda studiors egna sajter, Instagram och Reddit-trådar. Närmaste konkurrent tatuointistudiot.fi (HivePress/WP, generiska meta-descriptions, ~5 listningar per stad, stagnerad sedan nov 2023) syns inte i topp 10. **Positionen "jämförelsesajten" är ledig.** Vi vinner den inte genom att finnas, utan genom att ha mer innehåll per stad än någon enskild studio kan ha, och svara på jämförelse-intentionen (portfolios, stilar, priser, walk-in) som Maps-panelen inte svarar på.

**Tekniskt:** kodbasen är redan stark (canonical, hreflang, sitemap, breadcrumb+itemList-schema, statisk Astro). Ändringarna nedan är mest keyword-styrning, informationsarkitektur och innehåll.

## 1. Vad finländare faktiskt googlar (insamlad data)

Mönster i fallande betydelse:

1. **"tatuointi {stad}"** är huvudtermen (autocomplete: hinnat, ideat, tampere, helsinki, turku, oulu, jyväskylä...). Följt av **"tatuointiliike {stad}"**, **"tatuointistudio {stad}"**, **"tatuoija {stad}"**. Alla fyra varianter måste täckas av stadssidan.
2. **Pris är största modifier-intentionen:** "tatuointi hinta" + stad ("tatuointi hinta helsinki/oulu/tampere/kuopio..."), "tatuoinnin hinta suomessa", "tatuointi hinta esimerkki", "tatuointi hinta arvio", "pieni tatuointi hinta".
3. **Walk-in är stort:** "tatuointi walk in helsinki/tampere/turku/oulu", "tatuointi helsinki walk-in", "lahti tatuointi walk in".
4. **Kvalitets-/jämförelseintention:** "paras tatuoija {stad}" (tampere, helsinki, lahti, oulu...), "tatuointi helsinki parhaat arviot", "hyvä tatuoija helsinki", "naistatuoija {stad}".
5. **Stil × stad finns på riktigt:** "fineline tatuointi helsinki/oulu/tampere/jyväskylä", "tatuointi helsinki fine line", "fine line tattoo Tampere", "japanilainen tatuointi tyyli". Även "tatuointi helsinki flash".
6. **Stadsdelar i storstäder:** "tatuointi helsinki keskusta/kallio/kamppi", "tatuointi espoo leppävaara/espoonlahti", "tatuointi vantaa tikkurila".
7. **People Also Ask (FAQ-guld):** "Paljonko keskikokoinen tatuointi maksaa?", "Milloin ei kannata ottaa tatuointia?", "Mikä tatuointi paikka sattuu vähiten?", "Mikä on paras aika ottaa tatuointi?"
8. **Svenska:** nästan noll volym i Finland ("tatuerare helsingfors" ger bara sig själv som förslag; "tatuering pris"-förslagen är alla svenska städer i Sverige). Sv-versionen är för finlandssvensk trovärdighet + framtida SE-expansion — lägg ingen innehållsbudget där nu.
9. Engelska finns: "tattoo helsinki walk in / prices / fineline" — expats/turister. Ingen egen version nu, men skriv en engelsk mening i stadssidornas intro på sikt.

Irrelevant för oss (uteslut i copy): "tatuoija palkka/koulutus" (karriärintention), "tatuointi rasva/hoito/sauna" (aftercare — täcks av studios, låg konverteringsrelevans; ev. senare supportinnehåll).

## 2. Keyword-map per sidtyp

| Sida | Primär | Sekundär | Title-mall (≤60 tecken) |
|---|---|---|---|
| Stadssida | tatuointi {stad} | tatuointiliike/-studio {stad}, tatuoija {stad} | `Tatuointi {Stad} — {n} tatuointiliikettä ja tatuoijaa \| MUSTE` |
| Stilsida | {stil} tatuointi | {stil} tatuointi {stad} | `{Stil}-tatuointi — tatuoijat Suomessa \| MUSTE` |
| Hinnat | tatuoinnin hinta | tatuointi hinta {stad}, hinta esimerkki, pieni tatuointi hinta | `Tatuoinnin hinta 2026 — hintaesimerkit ja hinnasto \| MUSTE` |
| Studiosida | {studionamn} | {studionamn} {stad}, tatuointi {stadsdel} | `{Studio} — tatuointiliike, {Stad} \| MUSTE` |
| Startsida | tatuoijat suomi | tatuointiliikkeet, vertaa tatuoijia | `MUSTE — Suomen tatuoijat ja tatuointiliikkeet yhdessä paikassa` |

**Åtgärd i `src/i18n/ui.ts`:** nuvarande `city.metaTitle` = "Tatuoijat {city} — vertaile portfolioita" optimerar mot den svagaste av de fyra huvudtermerna. Byt enligt mallen ovan ("Tatuointi {Stad}..." med antal i titeln — antalet är vår CTR-differentiering mot enskilda studios). Samma logik för `style.metaTitle`: nuvarande saknar ordet "tatuointi" efter stilnamnet — "fineline tatuointi" är söktermen, inte "fineline".

H1 på stadssidor: behåll lokativformen ("Tatuoijat Helsingissä" fungerar) men se till att ordet *tatuointi* + liike/studio förekommer i intro-styckets första mening tillsammans med antal och stadsdelar (keskusta, Kallio, Kamppi...).

## 3. Informationsarkitektur

1. **Stadssidor är pengasidorna.** Men 46 stadsfiler inkl. Himanka/Koskenkorva/Jaala med 1 studio = klassisk doorway-/thin-risk som kan dra ner hela den nya domänen. Regel: **indexera bara städer med ≥3 studios.** Mindre orter: behåll studiokorten men lägg orten som sektion på närmaste stora stads sida eller på en regionsida ("Tatuoijat Pohjanmaalla"), och sätt `noindex,follow` på den egna tunna sidan tills inventoriet växer. (Sitemap ska bara innehålla indexerbara sidor.)
2. **Stil × stad:** implementera som statiska ankarlänkar/sektioner, INTE egna sidor från start. På stilsidan: "Fineline-tatuoijat kaupungeittain: Helsinki (12) · Tampere (8)..." som länkar till stadssidan med filter-anchor. Egna stil×stad-sidor först när en kombination har ≥3 studios OCH stilfältet faktiskt är ifyllt i datan (styles är tomma i seed just nu — se §6).
3. **Hinnat-sidan är SEO-magneten #1.** Bygg ut med: hintaesimerkki-tabell (pieni/keskikokoinen/hiha × svartgrått/färg), per-stad-avsnitt ("Tatuoinnin hinta Helsingissä") och PAA-frågorna från §1.7 som FAQ-sektion. Länka från varje stadssida ("Mitä tatuointi maksaa {stad}?" → hinnat#stad).
4. **Walk-in:** lägg boolean `walkIn` i studio-schemat + sektion på stadssidorna ("Walk-in-tatuoinnit Helsingissä") + en samlingssida `/walk-in/`. Datat finns delvis på studiornas sajter; fyll successivt.
5. **Studiosidorna** är entitetssidorna: unik intro-mening (varierad mall så inte alla börjar likadant), adress, stadsdel, stilar, artister med IG-länkar, FTAA-badge. Dessa rankar long-tail ("{studionamn}", "tatuointi {stadsdel}") och är det artisterna köper featured-visning på.

## 4. Teknik (delta mot nuvarande kod)

- **JSON-LD `TattooParlor`** (subtyp av LocalBusiness) på varje studiosida: name, address, geo om möjligt, url, sameAs (IG). ItemList på stadssidor finns redan — bra.
- **`WebSite` + `SearchAction`** JSON-LD på startsidan (sökfältet finns ju).
- Svenska URL:er använder finska slugs (`/sv/tatuoijat/helsinki/`). Byt till svenska: `/sv/tatuerare/helsingfors/` med svenska ortnamn där etablerade exonymer finns (Helsingfors, Åbo, Tammerfors, Esbo, Vanda). Låg volym men hreflang-paret blir korrekt och ser proffsigt ut vid outreach mot finlandssvenska studios.
- `robots.txt` + sitemap: exkludera noindex-städer (§3.1).
- Titles genereras i ui.ts — håll ≤60 tecken; beskrivningar 140–155 med antal + stadsdelar + CTA ("vertaa portfolioita").
- Repo-detalj: filen heter **`CLAUDE.md.md`** — döp om till `CLAUDE.md`, annars läses den inte automatiskt.

## 5. Innehålls- & lanseringsplan (kopplad till affärsmålet)

Prioritetsordning — allt tjänar säljargumentet "vi rankar redan, din studio syns":

1. **Vecka 1:** title/meta-fix (§2), noindex-regeln (§3.1), TattooParlor-schema, hinnat-utbyggnad. Stadsintros för topp 10-städerna (Helsinki, Tampere, Turku, Oulu, Jyväskylä, Espoo, Vantaa, Lahti, Kuopio, Pori) — 120–200 ord unik text per stad som nämner stadsdelar, antal, stilar. Morpheus levererar texterna.
2. **Vecka 2:** walk-in-fält + sektioner, stil-korslänkning, GSC-verifiering dag 1 efter deploy (kopplas till befintlig Windsor/GSC-uppsättning för uppföljning), Bing Webmaster också (gratis trafik, noll konkurrens).
3. **Vecka 3–4:** indexering + interna länkar: footer med topp-städer, "närliggande städer"-block, hinnat↔stad-länkar. Skicka in sitemap, bevaka täckning i GSC.
4. **Länkar (pågående):** Detta avgör om vi slår studiorna på huvudtermerna. (a) Studio-outreach: varje listad studio får mail med länk till sin sida + erbjudande om "Listattu MUSTE:ssa"-badge (länk tillbaka = citat-flywheel). (b) FTAA-relationen. (c) Helsinki Ink/conventions. (d) Reddit r/Tampere-trådtypen visar att folk frågar — svara ärligt med katalogen när relevant (försiktigt, ej spam). (e) Finlandssvensk press-vinkel: "första tvåspråkiga tatueringskatalogen".
5. **Mätpunkt för outreach-start:** när ≥5 stadssidor har intryck i GSC på "tatuointi {stad}"-frågor (positionen spelar mindre roll — trenden är säljargumentet). Featured-pitchen använder GSC-data: "sidan för {stad} sågs X ggr senaste månaden".

## 6. Datalucka som blockerar stil-SEO

`styles: []` för alla FTAA-artister. Stilsidorna har inget inventory förrän detta fylls. Lösning i prioritetsordning: (1) fyll manuellt för featured-kandidater och de 16 nonftaa-studiorna (deras sajter anger ofta stilar — flera är redan ifyllda i studios-nonftaa.json), (2) låt claim-flödet fylla resten. Gissa ALDRIG stilar från studionamn.

## 7. Domän — BESLUTAD: tatuoijat.fi (köpt 2026-07-04)

`SITE_URL` i astro.config.mjs är redan uppdaterad till `https://tatuoijat.fi`. Konsekvenser för bygget:

- **Publikt varumärke = "Tatuoijat.fi"** (MUSTE lever kvar enbart som internt kodnamn/reponamn). Uppdatera `site.name` i `src/i18n/ui.ts` (fi + sv) till `Tatuoijat.fi` och se över title-mallarna i §2 — sluttaggen blir `| Tatuoijat.fi`. Håll ≤60 tecken: förkorta mallarna vid behov (t.ex. `Tatuointi {Stad} — {n} liikettä ja tatuoijaa | Tatuoijat.fi`).
- Logotyp-komponenten (`Logo.astro`) behöver ordbilden "Tatuoijat.fi" i stället för MUSTE — behåll brandfärgerna från design-briefen.
- Startsidans title: `Tatuoijat.fi — Suomen tatuoijat ja tatuointiliikkeet` (domän = brand ger naturlig exakt träff på "tatuoijat"-sökningar).
- DNS: Netlify DNS (zon skapas i Netlify, namnservrar byts hos Hostingpalvelu). Netlify sköter HTTPS + www→apex-redirect.
- Ej köpta (medvetet, omprövas när GSC visar rankning): tatuoija.fi (singular, redirect-kandidat), tatuointihaku.fi (defensiv).

## 8. Vad som INTE ska göras

- Inga programmatiska "paras tatuoija {stad}"-sidor med rankningar vi inte kan belägga (förtroende + juridik). Termen fångas av stadssidans title/description och ev. sorterings-UI ("suosituimmat").
- Inga AI-genererade massintros för 46 städer — 10 bra slår 46 dåliga; tunt boilerplate är största risken för en ny katalogdomän.
- Ingen aftercare-content i fas 1 (hård konkurrens, fel intention).
- Rör inte artist-sidorna (beslutet från datamodell-frågan står: studios har sidorna tills claim-flödet ger innehåll).

# Tatuoijat.fi — SEO-analys efter första månaden

**Dataperiod:** 10/7–8/8 2026 (30 dagar), Google Search Console via Windsor.ai
**Sajten live:** ~15/7 2026 · **Analys gjord:** 9/8 2026
**Status: ANALYS + PLAN. Inget av åtgärderna är applicerat.**

---

## 1. Kortversionen

Sajten fungerar tekniskt och är indexerad. Men **den vinner fel sökningar.**

78 % av alla visningar kommer från folk som googlar en *specifik studio vid namn*
("manala tattoo", "pinky inky", "one eye tattoo"). Där ligger vi på position 6–9
— synliga, men som ett femte alternativ efter studions egen sajt, Instagram,
Facebook och Google Maps. Klickfrekvensen på de sidorna är **0,6–2,6 %**.

Samtidigt ligger de sökningar strategin faktiskt siktade på — "tatuointi
{stad}" i de stora städerna — på **position 33–70**. De ger nästan inga
visningar alls.

Och de tio stilsidorna, som ingen prioriterat, har **den högsta
klickfrekvensen på hela sajten (9 %)**.

**Slutsatsen:** tillväxten sitter inte i att putsa på det som redan finns.
Den sitter i att bygga ut den enda sidtyp som bevisligen konverterar
(stil, och stil × stad), och i att sluta blöda 4 600 visningar i månaden på
profilsidor som ingen klickar på.

---

## 2. Nuläget i siffror

### Totalt, 30 dagar

| Mått | Värde |
|---|---|
| Klick | 326 |
| Visningar | 10 912 |
| CTR | 2,99 % |
| Snittposition | ~9,5 |
| Mobil | 83 % av visningar, 87 % av klicken |

### Utvecklingen

Indexeringen slog igenom 15/7 (4 → 239 visningar på ett dygn). Sedan **20/7 är
kurvan platt**: ~500 visningar/dag, 10–20 klick/dag, position stabil kring 9.

Det är inte ett straff — det är ett tak. Google har hittat allt vi har, och
rankar det ungefär så bra som en en månad gammal domän kan förvänta sig.
**Mer trafik kräver nu antingen nya sidor eller bättre positioner.** Inget av
det kommer av sig självt.

### Per sidtyp (finska sidor)

| Sidtyp | Antal sidor | Visningar | Klick | CTR | Kommentar |
|---|---|---|---|---|---|
| Studioprofiler `/artistit/` | 190 | ~8 200 | ~213 | **2,6 %** | 78 % av trafiken, sämst CTR |
| Stadssidor `/tatuoijat/` | 19 | ~1 650 | ~68 | 4,1 % | fungerar i småstäder |
| `/hinnat` | 1 | 268 | 11 | 4,1 % | pos 8,6 |
| Stilsidor `/tyylit/` | 10 | ~200 | ~18 | **9,0 %** | bästa CTR på sajten |
| Startsidan | 1 | 127 | 6 | 4,7 % | |

### Svenska sidor

| | Andel |
|---|---|
| Andel av alla URL:er i sitemap | **50 %** (225 av 450) |
| Andel av visningarna | **4,5 %** (495) |
| Andel av klicken | **3,1 %** (10) |
| CTR | 2,0 % |

---

## 3. Fyra fynd

### Fynd 1 — 4 600 visningar/månad i princip utan klick

De studioprofiler som får mest visningar får nästan inga klick, trots bra
position:

| Sida | Visningar | Klick | Position |
|---|---|---|---|
| `/artistit/pinky-inky` | 297 | **0** | 8,1 |
| `/artistit/studio-rikuturso` | 219 | **0** | 8,0 |
| `/artistit/one-eye-tattoo` | 182 | **0** | 7,7 |
| `/artistit/pata-tattoo` | 165 | **0** | 9,6 |
| `/artistit/fireline-tattoo` | 139 | **0** | 8,4 |
| `/artistit/michael-aalto-tattoo-studio` | 249 | 1 | 6,6 |
| `/artistit/backstage-tattoo-beauty` | 242 | 1 | 9,9 |
| `/artistit/yes-sir-tattoo` | 236 | 2 | 8,7 |
| `/artistit/kakola-tattoo` | 184 | 2 | 7,7 |

Sammanlagt: **~4 600 visningar, 29 klick, CTR 0,6 %** — på position 6–9.

**Varför.** Det här är navigerande sökningar. Någon som googlar "pinky inky"
vet redan vilken studio hen vill till och vill ha *studions* sajt, IG eller
karta. Vår träff säger i praktiken samma sak som studions egen träff
("Pinky Inky — tatuointiliike, Mikkeli") men från en domän användaren aldrig
hört talas om. Det finns ingen anledning att klicka.

Vi har dessutom **noll bilder på samtliga 190 profiler** (`images: []`) — så
även den som klickar möts av monogramplattor. Bildpolicyn är rätt, men den
gör profilsidorna svaga just nu.

*Det här är ett mätt faktum. Förklaringen är min tolkning — men den stöds av
att undantagen (se fynd 2) alla är sökningar där användaren INTE redan vet
vart hen ska.*

### Fynd 2 — stil och stil × stad är det enda som konverterar

De högsta klickfrekvenserna i hela datan:

| Sökning | Visningar | Klick | CTR | Position |
|---|---|---|---|---|
| `fine line tattoo turku` | 19 | 4 | **21,1 %** | 7,2 |
| `tatuointi joensuu` | 16 | 4 | **25,0 %** | 19,9 |
| `tatuointi pori` | 37 | 6 | **16,2 %** | 14,5 |
| `kouvola contemporary` | 48 | 6 | 12,5 % | 6,1 |
| `manala tattoo` | 91 | 11 | 12,1 % | 6,0 |

Och sidtypen som helhet: **stilsidor 9,0 % CTR** mot sajtsnittet 3,0 %.

Fler belägg för att stil × stad är ett riktigt sökmönster:
`fine line tattoo tampere` (pos 10,1), `fineline tatuointi tampere` (8,8),
`blackwork tattoo helsinki` (9,0), `realistinen tatuointi helsinki` (29).

**Vi har noll stil × stad-sidor.** Datan för att generera dem finns redan i
repot — `styles` ligger på varje studio, `city` likaså.

### Fynd 3 — storstäderna är låsta, småstäderna är öppna

| Sökning | Position |
|---|---|
| `tatuointi helsinki` | **47,0** |
| `tatuoija helsinki` | **69,1** |
| `tatuointiliike helsinki` | **69,1** |
| `tatuointi espoo` | **53,8** |
| `tatuointi vantaa` | **50,7** |
| `tatuointi turku` | **33,6** |
| | |
| `tatuointi rauma` | **9,7** |
| `tatuointiliike hyvinkää` | **9,2** |
| `tatuointiliike pori` | **11,3** |
| `tatuointi riihimäki` | **12,8** |
| `tatuointi mikkeli` | **12,5** |
| `tatuointiliike lahti` | **12,8** |
| `tatuointi rovaniemi` | **13,3** |
| `tatuointi pori` | **14,5** |

Mönstret är entydigt: **i städer med hård konkurrens ligger vi på sida 4–7,
i mellanstora städer ligger vi på sida 1–2.**

Att jaga "tatuointi helsinki" nu vore att slåss mot local pack + etablerade
domäner med en domän som är fyra veckor gammal. Att flytta Rauma från 9,7
till 4 är däremot fullt görbart — och de sökningarna klickas.

### Fynd 4 — tre efterfrågningar vi inte täcker alls

**a) Recensioner.** `face the pain tattoo arvostelut` — 107 visningar, **0
klick**, position 8,5. Plus `ms-studio arvostelut`, `flow tattoo helsinki
arvostelut`. Folk söker omdömen; vi har inga.

**b) Priser per stad och per motiv.** `/hinnat` rankar 8,6 och drar 268
visningar — men huvudtermerna ligger dåligt (`tatuointi hinnat` pos 26,5,
`tatuointi hinta esimerkki` pos 30). Däremot: `turku tatuointi hinnat` 13,9,
`tatuointi kuopio hinnat` 13,1, `koko selän tatuointi hinta` 9,2. Efterfrågan
är **stad + pris** och **kroppsdel + pris**, inte den generiska prisfrågan.

**c) Piercing.** `lävistykset riihimäki`, `lävistys espoo`, `lävistys
riihimäki`, `lävistysliike savonlinna` (1 klick, pos 10,9),
`savonlinna lävistysliike`. Små volymer, men vi har noll innehåll — och flera
studios i databasen gör redan piercing.

---

## 4. Planen

Ordnad efter förväntad effekt per insats. Inget är påbörjat.

### P1 — Stil × stad-sidor `/tyylit/{stil}/{stad}/` ⭐ största hävstången

Bygg programmatiskt av data vi redan har.

- **Tröskel:** minst 3 studios med stilen i staden (samma regel som
  `CITY_INDEX_MIN_STUDIOS`) — annars noindex + ur sitemap. Utan tröskeln blir
  10 stilar × 19 städer = 190 doorway-sidor, vilket är precis den risk
  seo-handoff §3.1 varnar för.
- **Realistiskt utfall:** uppskattningsvis 25–40 sidor som passerar tröskeln.
- **Titelmall:** `{Stil}-tatuointi {stad} — {n} tatuoijaa | Tatuoijat.fi`
- **Måste ha unikt innehåll per sida**, inte bara en filtrerad lista: 2–3
  meningar om stilen i den staden + FAQ. Annars är det samma tunna problem.
- **Internlänkning:** från stadssidan ("Selaa tyylin mukaan" finns redan) och
  från stilsidan (`style.citiesTitle` finns redan) — båda krokarna är byggda.

**Varför först:** enda sidtypen med bevisad CTR, datan finns, och det är den
enda åtgärden som skapar *ny* trafik snarare än att omfördela befintlig.

### P2 — Ge profilsidorna ett existensberättigande

4 600 visningar/månad är för mycket att lämna på 0,6 % CTR. Två spår:

**P2a — Titlar och beskrivningar som lovar något studions egen sajt inte gör
(billigt, gör först).**
Nuvarande: `{name} — tatuointiliike, {city} | Tatuoijat.fi`
Förslag: `{name} — {n} tatuoijaa, tyylit ja yhteystiedot | {city}`
Meta description bör nämna antal artister, stilar, walk-in ja/ei, stadsdel.
Poängen är att erbjuda *jämförelse och överblick*, som är det enda en katalog
kan göra bättre än studion själv.

**P2b — Sammanfattningsrad överst på profilen.**
`3 tatuoijaa · fineline, blackwork · Turku, Keskusta · walk-in: ei`
med länkar vidare till stad och stil. Ger både användarvärde och
internlänkning.

*Ärlig brasklapp: P2a är ett CTR-experiment, inte en garanti. Navigerande
sökningar har ett tak — folk som söker "pinky inky" vill oftast till Pinky
Inky. Men 0,6 % är så lågt att även 2 % vore en fördubbling av klicken från
den sidtypen.*

### P3 — Bredda `/hinnat` mot stad och kroppsdel

Bevisad efterfrågan (fynd 4b), och `/hinnat` rankar redan 8,6 så sidan har
förtroende att bygga på.

- Prissektion per stad på varje stadssida (inte egna sidor — undvik
  kannibalisering mot `/hinnat`).
- Prisexempel per motivstorlek/placering på `/hinnat`: helrygg, underarm,
  handled, hals. `koko selän tatuointi hinta` ligger redan på 9,2 utan att
  vi skrivit ett ord om det.
- Det tidigare noterade `priceFrom`-fältet hör hemma här.

**Regel som gäller (från billackering-arbetet): aldrig "halvin/billigast",
alltid "hinta-alue".**

### P4 — Skörda småstäderna

19 indexerbara stadssidor, varav ~8 ligger på position 9–15 för sin
huvudterm. Att flytta dem till topp 5 är den mest sannolika vinsten i hela
listan.

Prioritetsordning efter nuvarande position: Rauma (9,7), Hyvinkää (9,2),
Pori (11,3), Mikkeli (12,5), Riihimäki (12,8), Lahti (12,8),
Rovaniemi (13,3), Joensuu (19,9).

Åtgärd per sida: fylligare stadsintro (stadsdelar, prisläge, walk-in-läge),
FAQ med de faktiska sökfraserna, och länkar till de nya stil × stad-sidorna
från P1.

### P5 — Piercing (`lävistys`)

Litet men helt otäckt. `piercing: boolean` i studio-schemat +
`/lavistykset/{stad}/` med samma 3-studio-tröskel. Datan måste samlas in
(kan göras som en berikningskörning mot studiornas egna sajtar, samma metod
som `walkin-enrich`).

Lägst prioritet av de fem — men billigast per vunnen sökning.

---

## 5. Vad jag INTE föreslår

**Att jaga "tatuointi helsinki" nu.** Position 47 med en fyra veckor gammal
domän mot local pack. Kom tillbaka om 6 månader när stil × stad och
småstäderna byggt auktoritet.

**Att röra den svenska versionen.** 50 % av URL:erna ger 4,5 % av visningarna,
vilket ser slösaktigt ut — men de kostar inget att underhålla, hreflang är
rätt uppsatt, de skadar inte mätbart, och sv-sidorna är en differentiator mot
finlandssvenskar som ingen konkurrent har. **Omvärdera om 2 månader** om
fi-tillväxten stannar. Skulle det bli aktuellt är rätt åtgärd noindex på
sv-*profilerna* (den tunna delen), inte på sv-stads- och stilsidorna.

**Recensioner.** Efterfrågan finns (fynd 4a) men vi har ingen datakälla, och
att spegla Googles omdömen är både juridiskt tveksamt och tekniskt sprött.
Lämnas — men det är exakt den funktion som skulle motivera en Premium-nivå
längre fram.

**Blogg/opas-hubben.** Fortfarande rätt att vänta (samma bedömning som 8/7).
P1–P4 är alla närmare pengarna.

---

## 6. Mätplan

Baslinje att jämföra mot (10/7–8/8 2026): **326 klick, 10 912 visningar,
CTR 2,99 %, position 9,5.**

Avstämning **9/9 2026** och **9/10 2026**, på dessa fyra mått:

1. Klick totalt (mål: +50 % till 9/10)
2. CTR på `/artistit/`-sidorna (baslinje 2,6 % — mål 4 %)
3. Antal sidor med minst 1 klick (bredd, inte bara topplista)
4. Position för de åtta småstäderna i P4 (baslinje ovan)

---

## 7. Beslut jag behöver från dig

1. **Kör vi P1 (stil × stad)?** Det är den enda punkten som kräver riktigt
   byggarbete i Claude Code. Resten är innehåll och mallar.
2. **P2a-titelmallen** — vill du ha den formuleringen eller en annan vinkel?
3. **Piercing-datan (P5)** — ska jag sätta upp en berikningskörning, eller
   låter vi det ligga?

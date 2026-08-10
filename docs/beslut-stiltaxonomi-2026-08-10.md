# Beslutsunderlag: ska studiorna klassas om när taxonomin växer?

**Skriven av Morpheus, natten 10/8 2026.** Underlag till Calles fråga:

> *"Sen eventuellt skrapa alla studios igen om vi lägger till flera stilar, för att se vilka studios som hamnar under dessa nya stilar? Eller vad tror du?"*

**Status: ANALYS. Ingenting av nedanstående är implementerat.** Detta är ett
beslutsunderlag, inte en handoff — den tekniska specen skrivs när ordningen är
vald.

---

## 1. Kortversionen

**Nej, inte en ny skrapning — inte som första steg.** Frågan förutsätter att
flaskhalsen är *datainsamling*. Det är den inte. Flaskhalsen är *etikettering*:
materialet från 6/7 klassade 236 Instagram-konton, men bara etiketter ur en
förutbestämd lista fick fästa, och bara vid hög/medel confidence. Det som
saknas i katalogen i dag saknas alltså för att vi kastade det, inte för att vi
aldrig såg det.

Tre saker faller ut av det:

1. **En omklassning mot redan sparat material kostar nästan ingenting** och
   svarar på frågan direkt. En ny skrapning kostar mångdubbelt och tillför
   en (1) månads nya inlägg.
2. **Efterfrågan och utbud pekar åt olika håll för just handpoke och
   tribaali.** Keyword-researchen 9/8 visade finsk efterfrågan — men i vårt
   material syns handpoke hos ~4 studios och tribaali hos ~2. Att bygga
   sidor för dem nu vore precis de tunna sidor seo-handoff §3.1 och §9
   varnar för.
3. **Den billigaste vinsten ligger inte i nya stilar alls**, utan i två
   datahål som redan blockerar befintliga sidor: 23 studios utan `styles`
   och 12 utan `city`.

Rekommenderad ordning står i §5. Kort: fixa hålen först, mät sedan med en
omklassning, bygg stilar först när mätningen visar att de bär.

---

## 2. Vad frågan egentligen handlar om

Det finns tre separata operationer som lätt buntas ihop:

| | Vad den gör | Kostnad | Ger nya handpoke-studios? |
|---|---|---|---|
| **A. Ometikettering** | Kör om klassningen på det material vi redan har sparat, med utökad etikettlista och lägre confidence-tröskel | Låg | **Ja** — det är hela poängen |
| **B. Omskrapning** | Hämtar studiornas Instagram på nytt | Hög (190+ konton, rate limits) | Bara marginellt — en månads nya inlägg |
| **C. Berikning** | Hämtar *nya fälttyper* från studiornas egna sajter (walk-in, piercing, öppettider) | Medel, per fält | Nej — annan datakälla |

Calles fråga är formulerad som B, men det han vill åt är A. Och för lävistys
(§7) är svaret varken A eller B utan C.

---

## 3. Vad datan redan säger

`docs/styles-classification.json` sparade inte bara etiketten utan också en
kort **not** om vad klassificeraren såg ("selkeä akvarelli", "isoja
selkätöitä: mytologinen black&grey + art nouveau -kukkia"). Jag har sökt
igenom de 236 noterna i natt. Ingen ny skrapning, ingen ny modellkörning:

| Kandidatstil | Omnämnanden i sparade noter | Tröskel 10 för egen sida |
|---|---|---|
| **dotwork** | **15** | ✅ klarar |
| akvarelli | 8 | ✗ |
| ignorant | 6 | ✗ |
| **handpoke** | **4** | ✗ |
| chicano | 2 | ✗ |
| **tribaali** | **2** | ✗ |
| trash-polka | 1 | ✗ |
| surrealism | 1 | ✗ |
| blackout / heavy black | 2 | ✗ |
| ("illustrativ") | 40 | — se nedan |
| **lävistys / piercing** | **0** | — se §7 |

**Så här ska siffrorna läsas.** Noterna skrevs för ett annat ändamål (att
motivera huvudetiketten), så de **underskattar** systematiskt: en studio som
gör handpoke men vars not säger "fineline" syns inte här. Siffrorna är alltså
ett *golv*, inte en räkning. Men golvet räcker för att sortera kandidaterna:

- **dotwork** är den enda kandidaten som klarar tröskeln redan på golvet.
- **handpoke** skulle behöva att golvet underskattar med faktor 2,5+ för att
  nå 10. Möjligt — men det är en gissning, och den kostar en omklassning att
  omvandla till ett faktum.
- **tribaali** behöver faktor 5. Efterfrågan finns enligt keyword-researchen,
  men utbudet finns sannolikt inte i Finland i den mängd en egen sida kräver.
  *(Värt att notera separat: tribaali-sökningar är delvis retro-/ideasökningar
  — "tribaali tatuointi ideat" — inte "hitta en tekijä". Den intentionen hör
  hemma i innehåll, inte i en katalogsida.)*
- **"illustrativ"** har 40 träffar men är en paraplyterm, inte en söktermsstil.
  Den skulle kannibalisera neotraditional/ornamental utan att vinna en enda ny
  fras. Lämna.

En sak till som föll ut, och som är viktigare än stilfrågan:

**19 av de 23 studios som saknar `styles` blev faktiskt klassade — de föll på
confidence-tröskeln "hög + medel".** Bara 1 av 190 studios saknar klassning
helt (`bluepunk-tattoo`, och den beror på ett **skiftlägesfel**: frontmattern
säger `Bluepunktattoo`, klassningsnyckeln `bluepunktattoo`). Att sänka
tröskeln till att inkludera "låg" med manuell stickprovskontroll fyller alltså
merparten av hålet utan att hämta en enda ny post.

---

## 4. Vad det kostar

Ärligt uppskattat, i den enhet som faktiskt är knapp — Calles tid och
körtid — snarare än i euro:

| Steg | Arbete | Kommentar |
|---|---|---|
| Fyll `city` på 12 studios | ~30 min manuellt | Ren uppslagning, ingen modell inblandad |
| Sänk confidence-tröskeln + granska 19 | ~1 h granskning | Materialet finns, det är ett beslut + stickprov |
| Ometikettering av 236 konton, utökad lista | 1 körning + granskning | Kräver att posterna besöks på nytt (se nedan) |
| Full omskrapning av 190 studios | Flera timmars körtid, rate limits | Ger en (1) månads nya inlägg |
| Piercing-berikning mot studiornas sajter | Egen körning, egen spec | Samma metod som `walkin-enrich` |

**En reservation jag måste vara tydlig med:** `ig-posts.json` sparade bara
inläggens URL:er, inte deras innehåll. En riktig ometikettering (till skillnad
från nat-sökningen i §3) måste därför besöka posterna igen. Skillnaden mot en
"omskrapning" är att det gäller **236 kända konton med kända permalänkar**,
inte en ny upptäcktskörning över 190 studios — betydligt mindre, men inte
gratis. Nat-sökningen ovan är den enda helt gratis nivån, och den räcker för
att prioritera.

Bildpolicyn (CLAUDE.md §1) påverkas inte: klassningen läser publika inlägg och
sparar en etikett och en textnot. Inga bildfiler kopieras, i något av stegen.

---

## 5. Rekommenderad ordning

**P0 — Fyll `city` på de 12 studios som saknar den.** Se §6. Billigast av
allt, och den enda åtgärden i listan som förbättrar *befintliga* sidor i
stället för att skapa nya.

**P1 — Sänk confidence-tröskeln och granska de 19.** Fyller merparten av de 23
tomma `styles`-fälten ur material vi redan betalat för. Effekten är dubbel:
studiorna blir synliga på stilsidorna, och flera stil × stad-par kan passera
tröskeln 3 och ge **nya sidor utan en enda ny stil**. Fixa
skiftlägesbuggen på `Bluepunktattoo` i samma svep.

**P2 — Ometikettering av de 236 kontona med utökad etikettlista.** Kör den som
en **mätning**, inte som en publicering: mål är att veta hur många studios som
faktiskt gör dotwork, handpoke, akvarelli och ignorant. Ingen ny stil skapas i
detta steg.

**P3 — Skapa `dotwork` som egen stil** om P2 bekräftar ≥10 (golvet säger 15).
Skapa handpoke **endast** om P2 landar på ≥10 — annars enligt P4.

**P4 — Fånga efterfrågan utan att bygga tunna sidor.** Handpoke och tribaali
har efterfrågan men inte utbud. Rätt hantering är en **frågeformad H2 +
FAQ-svar på en befintlig sida** (handpoke hör naturligt hemma på
`/tyylit/fineline/` och `/tyylit/blackwork/`, och som prisexempel på
`/hinnat/`). Det matchar frasen, ger AI-sök något citerbart (GEO.md §2/§3),
och skapar ingen URL som måste bära egen vikt. Om utbudet växer senare
befordras avsnittet till en egen sida.

**P5 — Piercing (lävistys) som eget spår.** Se §7. Inte samma jobb.

**P-sist — Full omskrapning.** Motiverad först när den kan bära flera fält
samtidigt (nya inlägg + walk-in + piercing + öppettider + adress). Att göra
den *bara* för stilarna är fel ordning: den dyraste operationen för den minsta
marginalvinsten.

---

## 6. De 12 studios utan `city` — det verkliga hålet

De faller i dag utanför **både** stadssidorna och stil × stad-sidorna
(seo-handoff §11.3). De har alla en `place` på regionnivå, vilket är för trubbigt
för en stadssida:

| Studio | place |
|---|---|
| face-the-pain-tattoo | Etelä-Pohjanmaa |
| henna-s-ink | Pohjois-Pohjanmaa |
| kakola-tattoo | Varsinais-Suomi |
| kristmarian | Pohjois-Pohjanmaa |
| laiska-tattoo | Etelä-Savo |
| luova | Keski-Suomi |
| maria-viirros | Uusimaa |
| octopussy-tattoos | Uusimaa |
| sc-tattoo | uusimaa |
| spinelessturku | Varsinais-Suomi |
| tattoo-sampo | Pirkanmaa |
| trinitink | Uusimaa |

Två av dem sticker ut som direkt förlorad trafik: **kakola-tattoo** fick 184
visningar och position 7,7 i GSC-månaden (seo-analys §3.1) utan att ligga på
en enda stadssida, och `spinelessturku` har staden i själva slugen. Åtminstone
dessa två är Åbo. Notera också att `sc-tattoo` har gement "uusimaa" — värdena
är inte ens normaliserade.

Sedan i natt är alla 12 åtminstone **sökbara och länkade** via `/haku/` (de
listas under "Muut paikkakunnat"), så de är inte längre föräldralösa i
länkstrukturen. Men de rankar fortfarande inte på någon stadsfras.

---

## 7. Piercing hör inte hemma i den här diskussionen

`lävistys` gav **noll** träffar i de 236 noterna. Det är inte förvånande:
klassningen tittade efter tatueringsstilar i tatueringsbilder. Piercing är
inte en stil utan en **tjänst**, och datan finns på studiornas egna sajter,
inte i deras Instagram-flöden.

Det betyder att en omklassning — hur bra den än blir — aldrig kommer att
besvara piercing-frågan. P5 i seo-analysen står kvar som den var beskriven:
ett `piercing: boolean`-fält och en berikningskörning mot studiornas sajter,
samma metod som `walkin-enrich`. Anatomivokabulären (helix, conch, daith,
tragus, septum, industrial, rook, smiley, microdermal) är **innehåll på
sidan**, inte taxonomi — den ska inte bli nio nya fält.

---

## 8. Risker

**8.1 Tunna sidor (störst).** seo-handoff §3.1/§9. En stil under tröskeln ger
en sida som listar 2–4 studios och ser ut som doorway-innehåll. På en domän
som är fyra veckor gammal är det den enda risk som kan skada allt annat vi
byggt. Tröskeln ≥10 för egen stil och ≥3 för stil × stad ska gälla utan
undantag, oavsett hur bra söksiffran ser ut.

**8.2 Etikettdrift som raderar befintliga sidor.** Detta är den risk som är
lätt att missa. **9 av dagens 29 stil × stad-sidor ligger på exakt 3 studios**
(realismi×Tampere, blackwork×Lahti, fineline×Åbo, fineline×Björneborg,
fineline×Uleåborg, neotraditional×Uleåborg, traditional×Björneborg,
japanilainen×Helsingfors, geometrinen×Helsingfors), och 5 till på exakt 4. Om
en omklassning *flyttar* en etikett — t.ex. märker om en "blackwork"-studio
som "dotwork" — försvinner sidan helt, inklusive dess redan indexerade URL.

*Skydd:* kör omklassningen **additivt**. Nya etiketter läggs till, befintliga
tas aldrig bort automatiskt. Skulle en sida ändå behöva försvinna: 301 till
stilsidan, aldrig 404.

**8.3 Taxonomi-inflation.** Varje ny stil multiplicerar stil × stad-ytan. 10
stilar ger 29 sidor i dag; 14 stilar med samma tröskel ger kanske 40. Det är
hanterbart — men varje stil måste också ha en egen, skriven introtext (§11 i
handoffen: den delade stiltexten är medvetet klippt till en mening). Ny stil =
nytt innehållsarbete, inte bara en rad i en JSON.

**8.4 Confidence-sänkning ger felaktiga etiketter.** "Låg" betyder att
klassificeraren var osäker. 19 studios är få nog att granska manuellt — gör
det. Att gissa en studios stil är samma kategori av fel som att gissa dess
domän (CLAUDE.md), och en felaktig stil är värre än ingen stil: den lovar
besökaren något studion inte gör.

---

## 9. Vad jag INTE föreslår

- **Att skrapa alla 190 studios igen nu.** Dyrast, minst marginalnytta, och
  den svarar inte på frågan bättre än P2 gör.
- **Att skapa handpoke- och tribaali-sidor på keyword-datan ensam.**
  Efterfrågan utan utbud ger en tunn sida — vi skulle ranka på frasen och
  sedan visa besökaren två studios.
- **"Illustrativ" som stil.** Paraplyterm, ingen egen söktermsvolym,
  kannibaliserar två befintliga stilar.
- **Att koppla ihop piercing med stilarbetet.** Annan datakälla, annan
  körning, annan sidtyp.

---

## 10. Beslut jag behöver

1. **Kör vi P1 (sänkt confidence + granskning av 19)?** Det är den enda
   punkten som ger nya sidor utan nytt material — och den kräver att du
   godkänner en manuell granskningsrunda på ~1 h.
2. **Kör vi P2 som en ren mätning** (ingen publicering, bara "hur många
   handpoke finns det egentligen")? Jag rekommenderar ja.
3. **`city` på de 12** — vill du fylla dem själv (du känner orterna) eller
   ska jag ta fram förslag ur studiornas sajter för din godkännande?
4. **Dotwork** — om P2 bekräftar 15 studios, bygger vi den som elfte stil?

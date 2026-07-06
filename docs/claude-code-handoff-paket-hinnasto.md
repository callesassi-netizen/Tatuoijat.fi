# Handoff till Claude Code: paketnivåer + /hinnasto-säljsida

Datum: 2026-07-06. Detta dokument definierar affärsmodellens tre nivåer (Perus / Pro / Premium), feature-matrisen, prissättning och hur det ska byggas i repot (`F:\projekt hemsidor\FINSKA TATUERARKATALOG`). Läs `CLAUDE.md` först — premium styrs via frontmatter, ingen betalningsintegration i MVP (faktura/Stripe Payment Link hanteras manuellt). Tabellen nedan är också innehållet till `/hinnasto`-sidan och underlag till outreach-mejlen.

## Affärslogik (värdeaxeln)

Varje nivå gör ett tydligt eget jobb — annars blir Pro bara "Premium light":

- **Perus (gratis)** = *du finns*. Ingen intäkt; finns för SEO-täckning och för att skapa claim-suget.
- **Pro (mellan)** = *du ser komplett och trovärdig ut och kunder kan nå dig*. Volymintäkten.
- **Premium (stor)** = *du är först och syns överallt*. Marginalintäkt från få högvolym-studios.

**Två regler att vakta i implementationen:** (1) topplacering + startsidesfeature ska vara EXKLUSIVT Premium — den enda knappa resursen. (2) Galleriet (egna bilder) är moroten som gör claim värt att betala för → Pro får galleri, inte bara Premium.

## Namn & pris (rekommenderat, Calle justerar)

| Nivå | FI-namn | SV-namn | Pris (rek.) |
|------|---------|---------|-------------|
| Gratis | **Perus** | Bas | 0 € |
| Mellan | **Pro** | Pro | ~129 €/vuosi |
| Stor | **Premium** | Premium | ~279 €/vuosi |

Priset sätts årsvis (recurring, direkt betalning). Tre nivåer gör att Pro blir "det rimliga valet" och Premium ankrar värdet uppåt. Varje betald nivå = egen Stripe Payment Link; nivån sätts manuellt i frontmatter efter betalning.

## Feature-matris

| Funktion | Perus | Pro | Premium |
|---|---|---|---|
| Listning i katalog (stad + stil) | ✓ | ✓ | ✓ |
| Indexerbar profilsida + schema.org (TattooParlor) | ✓ | ✓ | ✓ |
| Instagram-länk | ✓ | ✓ | ✓ |
| Bild på profilen | Monogram-platta | Galleri 3–5 egna bilder | Utökat galleri + ev. video |
| Verifierad badge (claimad profil) | — | ✓ | ✓ |
| Äga/redigera profil | Kan begära rättelse | ✓ | ✓ |
| Beskrivning (fi+sv) | Kort auto-text | Full text | Full text |
| Kontaktuppgifter (hemsida, tel, adress, karta, öppettider) | Minimal | Full | Full |
| Boka-tid / kontaktknapp (mailar studion) | — | ✓ | ✓ |
| Placering i stads-/stillistor | Standard (alfabetisk) | Ovanför gratislistningar | **Topp / pinnad** |
| Featured-badge (guld) | — | — | ✓ |
| Feature på startsidans hero-collage + stadstopp | — | — | ✓ |
| Flera artistprofiler under studion | — | 1 | Flera (egen sida per artist) |
| Cross-promo "rekommenderad" på närliggande sidor | — | — | ✓ |
| Leads-/besöksrapport | — | — | Månadsmail (dashboard senare) |
| Redaktionellt spotlight/intervju (extra SEO-sida) | — | — | ✓ (ev. tillval) |
| Prioriterad support | — | — | ✓ |

## Implementationsspec

### Content-schema (studios-collection)
- Inför `tier: "perus" | "pro" | "premium"` (default `"perus"`). Ersätter/kompletterar den befintliga booleska `premium` — härled `featured = tier === "premium"` istället för separat flagga (eller behåll `premium` som deprecated alias).
- Fält som styr matrisen (lägg till där de saknas): `gallery` / `images: []` (finns per CLAUDE.md, fylls ENDAST efter tillstånd), `verified: bool` (finns), `booking_url`, `phone`, `hours`, full `description` (fi+sv), `artists[]` (för Premium multi-artist).
- Perus-default: monogram-plattan renderas när `images` är tom (får ALDRIG se trasig ut — dag 1-läget).

### Sortering & placering
- På stads- och stilsidor: sortera `premium → pro → perus`, därefter alfabetiskt/relevans. `getCollection` + `.sort()`.
- Startsidans hero-collage och varje stadssidas topp: query endast `tier === "premium"`.
- "Rekommenderad"-modul på profiler/städer: query Premium i samma stad/stil.

### Boka-tid / kontaktknapp
- **Netlify Forms** (funkar med statisk Astro): dolt `form-name`-fält + honeypot mot spam. INGEN reCAPTCHA/tjänst som sätter cookies (cookiefri MVP). Rendera formuläret endast för `tier` pro/premium; skickar mail till studions adress.

### Badges & brand
- Verifierad badge: Pro + Premium. Featured-badge i **guld (#C9A227 — reserverad för premium enligt brand-tokens)**: endast Premium.

### /hinnasto-sidan
- Bygg säljsidan från feature-matrisen ovan (fi primärt, sv under `/sv/hinnasto`). Hreflang fi/sv, canonical. Överväg `FAQPage`-schema för vanliga frågor (vad ingår, hur claimar jag, hur betalar jag).
- Tre priskort (Perus/Pro/Premium) + full jämförelsetabell under. CTA per betald nivå → Stripe Payment Link (Calle levererar länkarna) + "Claim din profil"-CTA som leder hit från gratisprofiler.
- Gratisprofiler ska ha en diskret "Onko tämä sinun studiosi? Ota profiili haltuun" (claim)-CTA → /hinnasto. Detta är konverteringsslingan.

## Kopplingar
- Bygg detta EFTER att profiler/stads-/stilsidor står (se `claude-code-handoff-ig-posts-styles.md` och `seo-handoff.md`). /hinnasto är även SEO-magneten `/hinnat` för prisguide-innehåll — håll isär: `/hinnat` = "vad kostar en tatuering" (konsument-SEO), `/hinnasto` = "vad kostar en listning" (B2B-sälj). Länka inte ihop dem.
- Outreach-mejlen (Morpheus draftar) bygger på samma matris: gratis listning finns redan → claim → Pro/Premium.

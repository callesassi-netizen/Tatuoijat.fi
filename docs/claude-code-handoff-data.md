# Handoff till Claude Code: seed-data → content collections

Datum: 2026-07-04. Detta dokument beskriver de två datafilerna i `data/` och hur de ska importeras till Astro-sajten (MUSTE). Läs `CLAUDE.md` i repot först — bildpolicy och domänregler gäller ovillkorligen.

## Filerna

### 1. `data/artists-seed.json` — FTAA-artister (KOMPLETT)

219 artister / 176 studios från FTAA:s publika artistiluettelo. Alla 219 är berikade med Instagram, 126 har website.

Struktur:

```json
{
  "meta": { ... },
  "artists": [
    {
      "artist": "Namn",
      "studio": "Studionamn",
      "address": "Gatuadress",
      "city": "Stad eller null",
      "region_raw": "Region från FTAA",
      "website": "https://... eller null",
      "instagram": "handle utan @ eller null",
      "styles": [],
      "premium": false,
      "verified": false,
      "ftaa_member": true,
      "source": "FTAA artistiluettelo ..."
    }
  ],
  "studios_grouped": [
    { "studio": "...", "artists": [...], "website": "... eller null", ... }
  ]
}
```

Att veta:

- `instagram` är alltid handle utan @, hämtad från artistens FTAA-profilsida. `website` = endast riktiga hemsidor (Facebook-sidor räknades INTE som website).
- `city` är ofta null — härled stad från `address`/`region_raw` vid import, eller mappa manuellt för stadssidorna.
- `styles` är tomma — fylls inte från FTAA. Lämna tomt eller kurera manuellt senare.
- `ftaa_member: true` → visa trust-badge på profilen.
- `studios_grouped` har studio-website ifylld där någon av studions artister angav en (101 av 176).

### 2. `data/studios-nonftaa.json` — icke-FTAA-studios (pass 3, NYTT)

16 etablerade studios som inte finns i FTAA-datan, med fokus på tunna orter: Helsinki 4 (ArtWork, Sorry Mom, KVART, M5), Espoo 4, Vantaa 1, Lahti 3, Turku 4.

Samma andemening men studio-centrerad struktur (se `meta` i filen):

- Alla uppgifter är verifierade mot studions egen webbplats 2026-07-04 (`source`-fältet). Inget är gissat.
- `verified: false` på en post (Dead Artists Tattoo, endast IG hittad) — visa ändå, men utan adress.
- `artists_instagram` = artisternas personliga IG när studion listar dem; `instagram` = studions egen.
- `notes` innehåller import-viktiga detaljer, bl.a. att **Satu Tattoo hör till The Clinic (Lahti)** som redan finns i artists-seed — koppla, skapa inte dubblettstudio.
- Två studios exkluderades medvetet (Neoskull flyttat till Italien; Insomnia trasig sajt) — dokumenterat i `meta.excluded`.

## Importregler

1. En md-fil per artist (content collection `artists`), en per studio (`studios`). Slug: kebab-case av namnet, åäö → aao.
2. Dedupe på studionamn (case-insensitive) mellan de två filerna — FTAA-datan vinner vid konflikt, komplettera med fält som saknas.
3. `ftaa_member: false`-studios får INGEN FTAA-badge.
4. Bildpolicy från CLAUDE.md: ALDRIG skrapa artistbilder. Monogram-plattor + IG-länk dag 1.
5. IG-länkar renderas som `https://instagram.com/<handle>` med rel="noopener".
6. Adresser: visa som text + schema.org LocalBusiness/TattooParlor-markup. Postnumret för Turku Tattoo Art & Beauty är troligen felskrivet på deras sajt (21500) — visa gatuadress utan postnummer tills verifierat.
7. `notes`-fältet är internt — rendera ALDRIG ut det på sajten.

## Kvarstående luckor (medvetet)

- `styles` tomma för FTAA-artister.
- Espoo/Vantaa/Lahti är tunnare än Helsingfors/Tammerfors — pass 3 förbättrade men mer kan läggas till efter lansering (gratis-listning-inflöde är del av modellen).
- Stads-/stilintros (SEO-texter) levereras separat av Morpheus.

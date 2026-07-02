# Seed-data — källor och status

**`artists-seed.json`** (genererad 2026-07-02 av `parse_ftaa.py` från `ftaa-raw.txt`)

## Innehåll

- **219 artister / 176 studios** från FTAA:s (Suomen Tatuointiartistien Liitto) publika artistkatalog — medlemmar som själva gett tillstånd till att visas: https://ftaa.fi/artistiluettelo/
- Fält per artist: `artist`, `studio`, `address`, `city` (normaliserad, `null` = kunde inte utläsas, 24 st), `region_raw`, `website`, `instagram`, `styles`, `premium`, `verified`, `ftaa_member`, `source`.
- `studios_grouped`: studios dedupade med artistlistor — använd denna för att generera studio-md-filer, artisterna listas på studions profil.
- Toppstäder: Helsinki 46, Tampere 21, Jyväskylä 18, Oulu 13, Pori 8, Kuopio 8.

## För Claude Code

- `ftaa_member: true` = trust-signal, visa som badge på profilen ("FTAA-jäsen") — det är exakt sådan förtroende-info briefens profilsida efterlyser.
- `styles: []` är tomt i seed — stilar fylls på via studios egna uppgifter (claim-flödet) eller manuell kuratering. Bygg så att tomma stilar inte ser trasiga ut.
- `city: null` (24 st): visa under region eller utelämna från stadssidor tills fixat.
- Stavfel i källdatan är bevarade (t.ex. "Helainki", "Jyvöskylä") i `address`/`region_raw` men normaliserade i `city`-fältet.

## Vad som INTE är gjort ännu

1. **Hemsidor:** bara 4 verifierade (Flow Tattoo, Studio Rikuturso, La Familia, Tino's). Andra pass planerat: söka upp hemsidor för studios i toppstäderna. Fältet är `null` tills verifierat — gissa ALDRIG domäner.
2. **Instagram-handles:** samlas i samma andra pass.
3. **Icke-FTAA-studios:** stora studios utanför förbundet saknas (t.ex. ArtWork Tattoo, Sorry Mom — Helsinki). Tredje pass via stadsvisa sökningar.
4. Städer utan FTAA-täckning i seedet: Espoo/Vantaa tunna, Lahti bara 2 — kompletteras i pass 3.

## Regler (från CLAUDE.md)

Endast offentliga fakta. Inga bilder utan tillstånd. Rättelse-/borttagningsbegäran ska hanteras snabbt — FTAA-artisterna har gett tillstånd till FTAA:s lista, inte vår; var generös med borttagning om någon ber om det.

/**
 * Uppdateringsdatum för sajtens innehåll — EN sanning för både den synliga
 * texten ("Tiedot tarkistettu …"), `dateModified` i schema.org och `<lastmod>`
 * i sitemapen.
 *
 * VARFÖR .mjs OCH INTE .ts: astro.config.mjs behöver dem för sitemapen, och
 * konfigurationen körs utanför Astro-kontexten. Ett vanligt ES-modulformat är
 * det enda som båda sidor kan importera. src/lib/schema.ts re-exporterar
 * CONTENT_UPDATED härifrån, så den synliga stämpeln och sitemapen kan inte
 * glida isär — de LÄSER samma konstant.
 *
 * ---------------------------------------------------------------------------
 * VARFÖR INTE ETT DATUM PÅ ALLT (och inte heller byggdatum)
 *
 * Google använder lastmod för att avgöra vilka sidor som är värda att hämta
 * om. Fältet är bara användbart så länge det är sant: sätter man byggdatum på
 * alla 522 URL:er ändras varje datum vid varje deploy, sajten påstår att hela
 * katalogen skrivits om varje gång, och då slutar Google lita på fältet — det
 * blir sämre än att inte ha det alls. Google är uttalade med att lastmod
 * ignoreras när det är genomgående inkonsekvent.
 *
 * Därför är datumen här grovkorniga men ärliga:
 *
 *   GUIDES_UPDATED   sidor vi FAKTISKT skrev om (guider + prissidan)
 *   CONTENT_UPDATED  katalogdata som ligger still sedan senaste genomgången
 *
 * En layoutändring räknas inte som innehållsuppdatering. Att sticky-headern
 * eller korten ändrades ger inte 190 artistprofiler ett nytt lastmod — den
 * dagen artistdatan verkligen gås igenom höjs CONTENT_UPDATED i stället, och
 * då gäller det alla profiler på en gång, vilket är precis vad som hände.
 *
 * NÄR DU ÄNDRAR INNEHÅLL: höj rätt konstant. Rör du en guide, höj
 * GUIDES_UPDATED. Gör du en datagenomgång, höj CONTENT_UPDATED.
 * ---------------------------------------------------------------------------
 */

/**
 * Senaste genomgången av katalogdatan (studios, städer, stilar) och de
 * statiska sidorna. Syns också som "Tiedot tarkistettu {datum}".
 */
export const CONTENT_UPDATED = '2026-07-15';

/**
 * Guiderna och prissidan. 2026-08-12: två nya guider (kipu, ensimmäinen
 * tatuointi) ur sökordsanalysen, och de sex befintliga fick sektionsbilder och
 * produktsektioner. Prissidan byggdes om till tvåkolumnslayout och länkar nu
 * till samtliga guider.
 */
export const GUIDES_UPDATED = '2026-08-12';

/**
 * Ruttfamiljer som räknas som guide-/prisinnehåll. Både fi och sv, eftersom
 * översättningarna uppdaterades i samma veva.
 */
const GUIDE_PREFIXES = ['/oppaat/', '/sv/guider/', '/hinnat/', '/sv/hinnat/'];

/**
 * `<lastmod>` för en URL. Tar en absolut URL eller en pathname.
 *
 * Okända rutter faller tillbaka på CONTENT_UPDATED i stället för på dagens
 * datum: en ny sidtyp ska hellre få ett för gammalt datum, som bara betyder
 * "inget nytt att hämta", än ett för färskt som ljuger.
 */
export function lastmodFor(urlOrPath) {
  let pathname = urlOrPath;
  try {
    pathname = new URL(urlOrPath).pathname;
  } catch {
    /* redan en pathname */
  }
  return GUIDE_PREFIXES.some((prefix) => pathname.startsWith(prefix))
    ? GUIDES_UPDATED
    : CONTENT_UPDATED;
}

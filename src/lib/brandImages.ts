import type { ImageMetadata } from 'astro';

/**
 * Genererade brand-bilder (src/assets/bilder/uudet/).
 *
 * Glob med fallback i stället för statiska importer, av ett konkret skäl: en
 * statisk import mot en fil som ännu inte hämtats fäller hela bygget. Med
 * glob kan kopplingen ligga i koden INNAN filerna finns — sajten använder
 * då den gamla bilden och byter av sig själv så fort `npm run images:brand`
 * har körts. Ingen deploy blockeras på att någon hunnit hämta bilder.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/bilder/uudet/*.{png,jpg,jpeg,webp}',
  { eager: true },
);

const byName = new Map<string, ImageMetadata>();
for (const [filePath, module] of Object.entries(files)) {
  const name = filePath.split('/').pop()?.replace(/\.[^.]+$/, '');
  if (name) byName.set(name, module.default);
}

/** Den genererade bilden om den finns, annars den gamla. */
export function brandImage(name: string, fallback: ImageMetadata): ImageMetadata {
  return byName.get(name) ?? fallback;
}

export const brandImageCount = byName.size;

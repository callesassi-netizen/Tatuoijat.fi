import type { ImageMetadata } from 'astro';

/**
 * Produktbilder för affiliate-korten.
 *
 * Filerna läggs i src/assets/tuotteet/ av scripts/fetch-product-images.mjs och
 * är namngivna efter produktens `id` i src/data/affiliate.ts. Glob i stället
 * för explicita importer: en ny produkt ska inte kräva en rad här, och en
 * produkt vars bild inte kunde hämtas ska inte krascha bygget med en import
 * som pekar på en fil som saknas.
 *
 * Saknas bilden returneras undefined och kortet renderas utan bild — samma
 * princip som resten av affiliate-ytan: hellre inget än något trasigt.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/tuotteet/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

const byId = new Map<string, ImageMetadata>();
for (const [filePath, module] of Object.entries(files)) {
  const id = filePath.split('/').pop()?.replace(/\.[^.]+$/, '');
  if (id) byId.set(id, module.default);
}

export function productImage(id: string): ImageMetadata | undefined {
  return byId.get(id);
}

/** Antal cachade produktbilder — används av bygglogg och tester. */
export const productImageCount = byId.size;

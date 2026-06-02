import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sourceRoot = process.env.OPENSITE_SOURCE;
const categories = process.argv.slice(2);

if (!sourceRoot || categories.length === 0) {
  throw new Error(
    "Usage: OPENSITE_SOURCE=<checkout> node scripts/sync-opensite-catalog.mjs <category...>",
  );
}

const registryPath = join(sourceRoot, "ui-library", "src", "data", "registry.generated.json");
const registry = JSON.parse(readFileSync(registryPath, "utf8"));

for (const slug of categories) {
  const blocks = registry.blocks.filter((block) => block.categorySlug === slug);
  if (blocks.length === 0) {
    throw new Error(`No OpenSite blocks registered for ${slug}`);
  }

  const exportName = `${slug}Blocks`;
  const getterName = `get${slug[0].toUpperCase()}${slug.slice(1)}Block`;
  const entries = blocks
    .map(
      (block) => `  {
    id: ${JSON.stringify(block.id)},
    title: ${JSON.stringify(block.title)},
    category: ${JSON.stringify(block.category)},
    categorySlug: ${JSON.stringify(block.categorySlug)},
    description: ${JSON.stringify(block.description)},
    thumbnail: ${JSON.stringify(block.thumbnail.desktop)},
    load: () => import("../blocks/${slug}/${block.id}"),
  }`,
    )
    .join(",\n");

  const output = `import type { CatalogBlock } from "./catalog";

export const ${exportName}: CatalogBlock[] = [
${entries},
];

export function ${getterName}(id: string): CatalogBlock | undefined {
  return ${exportName}.find((block) => block.id === id);
}
`;

  writeFileSync(join("src", "data", `${slug}-blocks.ts`), output);
}

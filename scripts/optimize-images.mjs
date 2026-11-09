#!/usr/bin/env node
// Image optimization for EstateFrame Digital.
// - Shrinks the hero logo PNG used in header + footer.
// - Crops the gold EF monogram from the full logo composition and exports
//   crisp favicon sizes (32×32, 180×180) so the tab/taskbar icon reads.
// - Reports source and output sizes.
//
// Run: npm run optimize:images

import sharp from "sharp";
import { readFile, writeFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_LOGO = resolve(ROOT, "public/images/EstateFrame_logo.png");
const OUT_HERO_LOGO = SOURCE_LOGO; // overwrite source with the shrunken file
const OUT_FAVICON = resolve(ROOT, "app/icon.png");
const OUT_APPLE = resolve(ROOT, "app/apple-icon.png");

async function sizeOf(path) {
  const { size } = await stat(path);
  if (size > 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  return `${Math.round(size / 1024)} KB`;
}

async function main() {
  console.log("Reading source:", SOURCE_LOGO);
  const srcBuf = await readFile(SOURCE_LOGO);
  const srcMeta = await sharp(srcBuf).metadata();
  console.log(`  original: ${srcMeta.width}×${srcMeta.height}, ${await sizeOf(SOURCE_LOGO)}`);

  // 1) Shrink the hero logo used in header + footer.
  //    The logo already composes with its own dark background on dark theme,
  //    so we keep the full composition — just downsize + recompress.
  const heroLogo = await sharp(srcBuf)
    .resize({ width: 1024, height: 1024, fit: "inside", withoutEnlargement: true })
    .png({ compressionLevel: 9, quality: 90, palette: true })
    .toBuffer();
  await writeFile(OUT_HERO_LOGO, heroLogo);
  console.log(`  → ${OUT_HERO_LOGO}: ${await sizeOf(OUT_HERO_LOGO)}`);

  // 2) Favicon + apple-touch-icon: crop to the top portion of the logo
  //    (house roof + gold EF monogram), where the mark remains readable at
  //    small sizes. The bottom portion carries the wordmark + tagline which
  //    becomes illegible mush below ~128 px.
  const W = srcMeta.width;
  const H = srcMeta.height;
  const cropSize = Math.round(Math.min(W, H) * 0.55); // top ~55% of the composition
  const cropLeft = Math.round((W - cropSize) / 2);
  const cropTop = Math.round(H * 0.08); // small margin from top edge

  const faviconBase = sharp(srcBuf).extract({
    left: cropLeft,
    top: cropTop,
    width: cropSize,
    height: cropSize,
  });

  const favicon32 = await faviconBase
    .clone()
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 1 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(OUT_FAVICON, favicon32);
  console.log(`  → ${OUT_FAVICON}: ${await sizeOf(OUT_FAVICON)}`);

  const apple180 = await faviconBase
    .clone()
    .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 1 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(OUT_APPLE, apple180);
  console.log(`  → ${OUT_APPLE}: ${await sizeOf(OUT_APPLE)}`);

  console.log("\nDone.");
}

main().catch((err) => {
  console.error("optimize-images failed:", err);
  process.exit(1);
});

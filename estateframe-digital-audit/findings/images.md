# Image SEO — Findings

**Category score:** 54 / 100
**Weight:** 5%
**Posture:** Alt text and `next/image` usage are good. The sheer size of the `public/` folder (360 MB), format choice (all JPG), and oversize favicon pull the score down.

## What works
- `next/image` used consistently with explicit `sizes` attributes across home, services, portfolio, HDR, about pages. Responsive srcset generated automatically.
- Alt text present on every `<Image>` instance. Descriptive, not spammy ("Resolved interior with balanced window pull and honest architectural tone" — not "image1").
- `priority` set only on above-fold hero images (confirmed in `about/page.tsx`) — correct behaviour for LCP.
- No background-image CSS trickery that would hide alt text from screen readers or crawlers.
- `object-fit: cover` for consistent framing across responsive breakpoints, with smooth hover transforms.

## Findings

### HIGH — All raster images are JPG; no WebP or AVIF
- **Evidence:** `find public/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \)` → 45 JPGs, 0 WebP, 0 AVIF.
- **Why:** WebP at the same perceived quality is ~25–35% smaller than JPG; AVIF is ~50% smaller. For a visual portfolio with 45+ large frames, this is the single largest bandwidth win.
- **Recommendation:** Two paths —
  1. **Let Next.js handle it at request time**: Next.js Image Optimization auto-serves WebP to supporting browsers and falls back to JPG otherwise. Zero source-code change. Verify in DevTools Network tab on a deployed build.
  2. **Pre-generate WebP/AVIF at source**: run `sharp` or `squoosh-cli` across `public/images/` producing `.webp` siblings. Slightly faster cold-cache delivery, larger repo.
- Path 1 is the default and usually sufficient.

### HIGH — `public/images/EstateFrame_logo.png` is 1.6 MB and used in header + footer + favicons
- **Evidence:** `du -sh public/images/EstateFrame_logo.png` = 1.6 MB. Same file used as `/images/EstateFrame_logo.png` (header + footer) and copied to `app/icon.png` + `app/apple-icon.png` (favicons).
- **Why:** Every page load pulls 1.6 MB of logo PNG (even with Next.js resizing it for the Image component, the source still enters the optimization cache). Favicons duplicate this cost per browser tab.
- **Recommendation:**
  1. Export a lean logo at 1024×1024 (not the full detailed composition) — target <80 KB.
  2. For favicons, export 32×32 (`icon.png`) and 180×180 (`apple-icon.png`) separately — target <10 KB each. These are already copies; replace with properly-sized sources.
  3. Consider an SVG wordmark for the header/footer — scales perfectly, <5 KB, respects dark/light context.

### MEDIUM — Hero video poster (`/videos/posters/real-estate-promo-poster.jpg`) size unknown
- **Evidence:** Referenced in `app/page.tsx` but size not measured.
- **Why:** The poster is the home page's LCP element (before the video starts painting). If it's a large JPG, LCP suffers.
- **Recommendation:** Measure (`du -h public/videos/posters/real-estate-promo-poster.jpg`). If >300 KB, re-export at 1920×1080 quality 80 (target <200 KB) or 1280×720 for mobile breakpoint.

### MEDIUM — Comparison slider source images are the same size as fullsize hero frames
- **Evidence:** `BeforeAfterSlider` component loads both `beforeImage` and `afterImage` at full resolution from `data/comparisons.ts`. For six HDR comparisons that's 12 full-res JPGs per slider — large.
- **Why:** On initial render, Next.js Image downloads the first comparison pair. The remaining 5 pairs load when the user clicks a tab — fine. But each pair is 2 full-res frames; large frames compound.
- **Recommendation:** Use `next/image` `quality={75}` (default is 75, confirm) and a reasonable `sizes` value for the slider viewport. Audit tab-click network behaviour in DevTools after deploy.

### LOW — No image sitemap
- **Evidence:** No sitemap at all, so no image sitemap either (covered under Technical).
- **Why:** Image sitemaps help Google Image surface hero frames. Low priority at launch; high priority if visual search traffic is a target.
- **Recommendation:** Once `app/sitemap.ts` is in place, add a dedicated image sitemap for portfolio frames. `next-sitemap` can generate it from `data/comparisons.ts`.

### LOW — Alt text could be more entity-rich on hero frames
- **Evidence:** `data/comparisons.ts` describes frames with craft language ("Interior room with balanced window views, balanced contrast and natural white tones after HDR enhancement"). Accurate but generic.
- **Why:** Entity-rich alt text ("Modern Scandinavian living room with composed HDR window pull, EstateFrame Digital studio") reinforces brand + entity + technique association in Google Images.
- **Recommendation:** Light-touch rewrite of alt text — include "EstateFrame Digital" on 2–3 hero frames per page (not all, which would read as stuffing).

### INFO — No oversized images for art direction (correct)
- **Evidence:** No usage of `<picture>` with multiple sources for art direction. All breakpoints use the same source via `next/image` `sizes`.
- **Why:** Art direction (different crops per breakpoint) is unnecessary here — the current approach is correct.

## Falsifiability checks
- After deploy, open Chrome DevTools → Network → Img filter → reload → confirm WebP is being served to Chrome (Content-Type: image/webp).
- PageSpeed Insights image audit should report zero "Serve images in next-gen formats" issues.
- No image >400 KB over the wire at mobile breakpoint.

## Leading indicators
- Total image bytes shipped per page (DevTools or Vercel Analytics).
- Google Images organic traffic (GSC, filter by Images search type) — should be measurable within 90 days.

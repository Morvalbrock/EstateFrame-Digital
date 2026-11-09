# Performance (Core Web Vitals) — Findings

**Category score:** 68 / 100 (estimated — can't measure CWV without a live URL)
**Weight:** 10%
**Posture:** Architecture is CWV-friendly (SSG, next/image, no heavy client runtime). Real risks: video autoplay on home, Google Fonts network dependency, unoptimised images on public/images, and 1.6 MB favicon.

## What works
- All 11 routes statically generated at build (`Generating static pages (11/11) ○ Static`). TTFB will be minimal on any CDN-backed host.
- First Load JS shared chunk is 103 kB — small for a Next.js 15 app. Per-page JS ranges from 173 B (`/about`) to 3.78 kB (`/contact`). No heavy client bundle.
- `next/image` used consistently with explicit `sizes` attributes — generates responsive srcset, lazy-loads below-fold.
- Dark palette means no large background imagery is needed at breakpoint boundaries — CLS risk is naturally lower.
- `prefers-reduced-motion` honoured for scroll-reveal + aperture spinner — accessibility and motion-sensitivity respected.
- Scroll-reveal defers DOM mutations past hydration (recent commit history confirms this) — no CLS from mount-time opacity flips.

## Findings

### HIGH — Home page autoplays a video from first paint — risk of LCP overshoot
- **Evidence:** `app/page.tsx` renders a `<video autoPlay loop muted playsInline>` in the hero with `poster="/videos/posters/real-estate-promo-poster.jpg"` and source `/videos/real-estate-promo.mp4` (~ unknown size, but `public/videos/` is in a 360 MB `public/` folder).
- **Why:** On slower connections, the video becomes the LCP element, pushing LCP past the 2.5s "Good" threshold. On mobile 3G, this can be catastrophic (10+ seconds).
- **Recommendation:** Three options, in order of preference:
  1. **Measure the file.** If `real-estate-promo.mp4` is <2 MB, probably fine. If it's >5 MB, replace with a compressed H.265/MP4 at 720p and bitrate ≤1.5 Mbps.
  2. **Use the poster image as the LCP.** The poster at `/videos/posters/real-estate-promo-poster.jpg` is already set. Verify it's optimised (WebP would be better than JPG; target <200 KB at 1920×1080). Google will count the poster as LCP if the video hasn't started painting.
  3. **Load video only on `prefers-reduced-motion: no-preference` + viewport intersection.** Push video out of initial render for users on slow connections or small screens. Requires a small client hook — not worth it unless Step 1+2 don't move LCP under 2.5s.

### HIGH — Public image folder is 360 MB — likely large per-file assets
- **Evidence:** `du -sh public/` → 360 MB with 45 JPG files + videos. Build still succeeds because Next.js doesn't bundle `public/` — files are served as-is.
- **Why:** Even with `next/image` responsive srcset generation, large source JPGs mean larger intermediate files + slower optimization cache warm-up.
- **Recommendation:** Pre-optimise source images with Squoosh, ImageOptim, or `sharp`:
  - Target 1920×1280 max resolution (resize anything larger).
  - JPG quality 82 (visually lossless for photography).
  - Expected reduction: 60–70%.
- Optionally convert to WebP at build time via `sharp` or a Next.js image loader (AVIF support still inconsistent on older iOS — stick to WebP).

### MEDIUM — Google Fonts loaded via CSS @import
- **Evidence:** `app/globals.css` line 1: `@import url('https://fonts.googleapis.com/css2?family=Fraunces:...&family=Inter:...')`.
- **Why:** @import blocks CSS parsing, serialises font download behind CSS fetch. Also, Google Fonts recently had a ruling (France CNIL) on GDPR compliance — self-hosting is both faster and more compliant.
- **Recommendation:** Switch to `next/font` — this self-hosts the font files, inlines critical CSS, and eliminates the external request. Pattern:
  ```ts
  import { Fraunces, Inter } from "next/font/google";
  const fraunces = Fraunces({ subsets: ["latin"], display: "swap", variable: "--font-display" });
  const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
  ```
  Reference `fraunces.variable` + `inter.variable` in the root `<html>` className. Update CSS tokens to use the new variable names. Expected LCP improvement: 150–400 ms on 4G.

### MEDIUM — Scroll-reveal pattern defers mount-time animations past hydration
- **Evidence:** Commit history shows 3 iterations fixing hydration mismatch and flash-of-blank (`cfe04fa`, `6d02955`, `8916cd8`). Final solution defers `[data-reveal-pending]` attribute application until after React 18 streaming hydration.
- **Why:** Content is visible server-side (crawler-friendly) but briefly fades in client-side (user-friendly). Any mistake here is a CLS risk.
- **Recommendation:** Verify in Chrome DevTools Performance panel on the deployed site. CLS should be <0.1. If you see shifts, inspect the ScrollReveal component.

### MEDIUM — No HTTP/2 Push or resource hints
- **Evidence:** Project has no `preload`, `preconnect`, or `prefetch` hints beyond Next.js defaults.
- **Why:** The Google Fonts external request would benefit from `<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin>`. Moot once `next/font` is used.
- **Recommendation:** Accept once fonts move to `next/font`. Otherwise add preconnect to `app/layout.tsx`.

### LOW — Favicon 1.6 MB
- **Evidence:** `app/icon.png` = 1.6 MB. Already called out in `technical.md`.
- **Why:** Browser downloads once per cold cache. Minor impact, visible to anyone who inspects the network tab.
- **Recommendation:** 256×256 at <10 KB.

### INFO — No analytics or tag manager yet
- **Evidence:** No GA4, Plausible, Fathom, or Vercel Analytics present.
- **Why:** Good — nothing to slow down the site yet. When you add analytics, use a defer-loaded script or Vercel's built-in analytics (zero runtime cost).

## Falsifiability checks
- Deploy to Vercel → run PageSpeed Insights (pagespeed.web.dev) → mobile LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Chrome DevTools → Lighthouse → Performance ≥ 90 (desktop) / ≥ 80 (mobile).
- CrUX field data after 28 days of real traffic — "Good" cohort ≥ 75% for all three CWV metrics.

## Leading indicators
- GSC → Core Web Vitals report → URLs in "Good" category.
- Vercel Analytics or similar → p75 LCP, CLS, INP.

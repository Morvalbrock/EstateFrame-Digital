# Technical SEO — Findings

**Category score:** 42 / 100
**Weight:** 22%
**Posture:** Pre-launch; core Next.js plumbing is sound, but every crawl-directive and discovery file is missing.

## What works
- Next.js 15 App Router with 100% static generation (`✓ Generating static pages (11/11)` from build output). Every public route is pre-rendered HTML — crawlers get full content without JS execution.
- `metadataBase` set to `https://estateframe.digital` in `app/layout.tsx`, so relative image URLs in future OG/Twitter tags will resolve correctly once social cards are added.
- Every route has a route-level `metadata` export (title + description) — no page will inherit a generic site title.
- `next/image` used for all raster imagery → automatic responsive `srcset`, lazy loading by default, format negotiation.
- No hash-based client routing; URLs are clean (`/services`, `/about`, `/HDR`, etc.).
- Favicon + Apple touch icon wired through `app/icon.png` + `app/apple-icon.png` (App Router magic filenames).

## Findings

### CRITICAL — No `robots.txt`
- **Evidence:** `ls app/robots*` and `ls public/robots*` both return "No such file or directory". Next.js supports `app/robots.ts` (preferred) or `public/robots.txt`; neither exists.
- **Why:** Without an explicit robots policy, well-behaved crawlers assume "crawl everything" but AI-training / aggressive scrapers have no stated signal either way. On launch day, there is no way to point Googlebot or Bingbot at your sitemap.
- **Recommendation:** Add `app/robots.ts` returning a `MetadataRoute.Robots` object that allows `/` and references `/sitemap.xml`. Example payload in the Action Plan.

### CRITICAL — No `sitemap.xml`
- **Evidence:** No `app/sitemap.ts` and no `public/sitemap.xml`. Build output shows 11 static routes but none are discoverable through a sitemap.
- **Why:** Google Search Console's primary ingestion signal for a new domain is the sitemap. Without one, indexation on a fresh domain can take weeks instead of days.
- **Recommendation:** Add `app/sitemap.ts` enumerating the six public routes (`/`, `/services`, `/HDR`, `/portfolio`, `/about`, `/contact`) with sensible `priority` and `changeFrequency`.

### HIGH — No canonical tags declared
- **Evidence:** No `alternates.canonical` anywhere in the `metadata` exports. Next.js only auto-emits a canonical if you declare one via `alternates`.
- **Why:** Once the site is live, parameterized URLs (e.g. `?utm_source=...` on marketing links) could cause Google to index multiple URLs for the same page, splitting ranking signals.
- **Recommendation:** Add `alternates: { canonical: "/<slug>" }` to every page's `metadata` export. In combination with `metadataBase`, Next.js will emit the fully-qualified canonical URL.

### HIGH — No Open Graph / Twitter card metadata
- **Evidence:** Grep for `openGraph` and `twitter` in app code returns no matches. `metadata` exports only define `title` and `description`.
- **Why:** When the URL is shared in Slack, iMessage, Facebook, LinkedIn, or X, the preview will fall back to the raw URL with no image — the opposite of "editorial post-production studio."
- **Recommendation:** Extend each page's metadata with `openGraph` (title, description, url, siteName, images, locale, type) and `twitter` (card type, title, description, images). Export a dedicated 1200×630 OG image per section (studio hero, HDR studio, portfolio).

### MEDIUM — Dev-server data at `http://localhost:3000` is unreachable for external auditors
- **Evidence:** No deployment target specified; `metadataBase` points at `estateframe.digital` which is not resolving publicly.
- **Why:** Lighthouse, CrUX, PageSpeed Insights, and Google Search Console all require a live URL. Full technical SEO (TTFB, HSTS, server headers, HTTP/2 or 3) can't be measured until deployment.
- **Recommendation:** Deploy to Vercel (the recommended host for Next.js) or any platform that terminates TLS and sets `Strict-Transport-Security`, `X-Content-Type-Options`, and `Content-Security-Policy` headers. Re-run `/seo technical <live-url>` once live.

### MEDIUM — No security headers configurable from source
- **Evidence:** `next.config.ts` is 154 bytes (essentially default); no `headers()` function declared.
- **Why:** Security headers (`Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`) are both a security control and a soft ranking signal. Google's crawler treats sites with HSTS and HTTPS-only as healthier.
- **Recommendation:** Add a `headers()` function to `next.config.ts` emitting HSTS, nosniff, `Referrer-Policy: strict-origin-when-cross-origin`, and a minimal `Permissions-Policy`.

### LOW — Favicon file is 1.6 MB
- **Evidence:** `du -sh app/icon.png` reports `1.6M`. Browsers will still render it (downscaled) but it's a one-off cost per cold cache.
- **Why:** Tiny impact on LCP, but it's a visible "someone was sloppy" signal to auditors.
- **Recommendation:** Export a 256×256 PNG (or 32×32 for `icon.png` + 180×180 for `apple-icon.png`) from the source logo. Target <10 KB.

## Falsifiability checks
- **Robots/sitemap present after launch?** `curl -I https://estateframe.digital/robots.txt` returns 200 and `curl https://estateframe.digital/sitemap.xml` lists 6 URLs.
- **Canonicals working?** `view-source:https://estateframe.digital/services` contains `<link rel="canonical" href="https://estateframe.digital/services"/>`.
- **Social card renders?** Paste a page URL into developers.facebook.com/tools/debug/ — image preview appears.

## Leading indicators (watch without re-running the audit)
- Google Search Console → Coverage → "Discovered – not indexed" should trend down after sitemap submission.
- `view-source:` on any production page should always have `<link rel="canonical">`.

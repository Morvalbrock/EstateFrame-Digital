# EstateFrame Digital — Full SEO Audit

**Audit date:** 9 November 2026
**Site state:** Pre-launch (local dev at `http://localhost:3000`; intended production `https://estateframe.digital` not yet deployed)
**Analysis mode:** Source-tree inspection (no public URL to crawl)
**Business type detected:** Boutique creative service studio — real-estate post-production (Local Service, Hybrid: physical studio + digital delivery, worldwide)

---

## Executive Summary

### SEO Health Score — **51 / 100**

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 42 | 9.2 |
| Content Quality | 23% | 58 | 13.3 |
| On-Page SEO | 20% | 68 | 13.6 |
| Schema / Structured Data | 10% | 8 | 0.8 |
| Performance (CWV) | 10% | 68 | 6.8 |
| AI Search Readiness | 10% | 32 | 3.2 |
| Images | 5% | 54 | 2.7 |
| **Total** | **100%** | — | **49.6 → 51** |

**Interpretation:** "Fair with critical structural gaps." The content and visual craft are above the bar — the voice is distinctive, the structure is clean, pages are substantive, the codebase is modern. What's missing is every machine-readable signal: no sitemap, no robots, no schema, no social cards, no llms.txt. These are quick to add and together would move the score to ~75+.

### Top 5 Critical Issues

1. **No `robots.txt`** — crawlers have no policy and no sitemap pointer (Technical)
2. **No `sitemap.xml`** — fresh domain will index slowly without it (Technical)
3. **No JSON-LD structured data anywhere** — site is invisible to Google's entity graph and to AI Overviews' "about the source" (Schema, GEO)
4. **No Open Graph / Twitter card metadata** — URL shares render as text-only unfurls (On-Page)
5. **Placeholder phone/email across the site** (`+91 00000 00000`, `hello@estateframe.digital`) — must be replaced before any public share (Content, Trust)

### Top 5 Quick Wins

1. **Add `app/robots.ts` and `app/sitemap.ts`** — 15 minutes, resolves 2 critical findings
2. **Add sitewide `ProfessionalService` JSON-LD in `app/layout.tsx`** — 30 minutes, moves Schema score from 8 → 55
3. **Add `openGraph` and `twitter` keys to every page's metadata** — 45 minutes, resolves two High findings and makes shares look professional
4. **Add `canonical` to every page via `alternates.canonical`** — 20 minutes, future-proof against UTM duplication
5. **Add `public/llms.txt`** — 10 minutes, highest-leverage AI-search discovery file

All five quick wins together: ~2 hours of work, estimated score lift to **~68 / 100**.

---

## Business Type Detection

Signals observed:
- Service studio (8 defined `Service` records under `data/services.tsx`)
- Local Service with worldwide digital delivery (studio composes files, ships via cloud)
- Hybrid (physical location implied by phone contact; delivery is digital)
- Creative/craft industry (post-production for real-estate photography)
- B2B primary (photographers, agencies, developers as audiences)
- No e-commerce, no SaaS, no publisher signals

**Recommendation:** Treat as **Local Service with digital-delivery reach**. This changes SEO priorities:
- Local SEO matters (GBP, NAP, LocalBusiness schema) but only for the physical studio city — pick one primary city for GBP.
- Industry/discipline keywords matter more than geo keywords ("HDR real estate editing" > "real estate editing Chennai").
- Case studies > location pages as authority assets.

---

## What Works (keep doing these)

- **Modern Next.js 15 App Router architecture** — static generation for all routes; crawler-friendly without JS.
- **Distinctive editorial voice** — consistent across every page; non-AI-detection-tripping copy. Google's Sept 2025 helpful-content update rewards this.
- **Consistent metadata structure** — every route has `title` + `description`; no inherited defaults.
- **Single H1 per page** — correct semantic hierarchy.
- **Clean URL structure** — six short slugs, no hash routing, no query parameter dependence.
- **`next/image` used correctly** — responsive `sizes`, `priority` on above-fold, lazy by default for the rest.
- **Reduced-motion and keyboard-focus support** — accessibility is covered for scroll-reveal, buttons, interactive sliders.
- **Dark palette with hairline motifs** — low LCP risk; nothing giant and raster on every page.

---

## Per-Category Summary

Full findings are in `findings/*.md`. One-paragraph summary per category below.

### Technical SEO — 42 / 100
Pre-launch plumbing is modern but every discovery/crawl-directive file is missing: no robots.txt, no sitemap.xml, no canonicals, no security headers, no HSTS target (not deployed yet). Favicon is 1.6 MB. All highly-fixable before launch. See `findings/technical.md`.

### Content Quality — 58 / 100
Editorial voice and prose depth are the strongest part of this site. The gaps are proof-of-work: no named editors, placeholder testimonials, no case studies, no journal. Add 2–3 case studies and 2–4 named editor bios before launch and this moves to 80+. See `findings/content.md`.

### On-Page SEO — 68 / 100
Titles and descriptions are unique and well-written. Missing: OG/Twitter metadata, canonical declarations, and some titles lean brand-first (lower non-brand CTR). Title rewrites + metadata additions are quick. See `findings/on-page.md`.

### Schema — 8 / 100
Zero JSON-LD. Single-largest quick win. Ship four schema types: sitewide `ProfessionalService`, per-service `Service`, `BreadcrumbList` on `/HDR`, `ImageObject` on hero frames. Do **not** ship `Review` schema until real testimonials exist. Do **not** ship `FAQPage` (Google retired the SERP feature May 2026). See `findings/schema.md`.

### Performance — 68 / 100
Architecture is CWV-friendly. Risks are the home-page autoplay video, Google Fonts via CSS `@import` (switch to `next/font`), 45 unoptimised JPGs totalling 360 MB in `public/`, and the 1.6 MB favicon. See `findings/performance.md`.

### AI Search Readiness — 32 / 100
Content is naturally citeable but no discovery signals for AI crawlers. Missing: `llms.txt`, Organization schema (covered under Schema), named authors, long-form explainer content. Journal with 6 seed posts + schema moves this to 70+. See `findings/ai-search-readiness.md`.

### Images — 54 / 100
Alt text is good, `next/image` usage is correct. Problem: all 45 raster images are JPG, source files are large, favicon is oversized. Let Next.js serve WebP automatically (zero code change) once deployed. Fix the favicon and hero logo file sizes manually. See `findings/images.md`.

---

## What This Audit Cannot Measure (Pre-Launch Limits)

These require a live production URL and are deferred to a post-launch re-run:

- **Core Web Vitals field data** (CrUX) — needs 28 days of real traffic on a public URL.
- **Lighthouse real-world scores** — can be estimated on localhost but TTFB, cache behaviour, and CDN headers matter.
- **Server headers** — HSTS, CSP, X-Content-Type-Options, Permissions-Policy — all depend on hosting choice.
- **Google Search Console data** — URL inspection, coverage, Discover inclusion.
- **Backlink profile** — no live URL = no backlinks yet.
- **Google Business Profile signals** — no GBP exists yet.
- **AI Overview / Perplexity citation share** — needs public content + time.
- **Agentic Browsing fraction** (Lighthouse) — needs a public URL and real DOM render test.

Re-run `/seo audit https://estateframe.digital` within 7 days of launch to capture these.

---

## Next Steps

See `ACTION-PLAN.md` for a prioritised, dependency-sequenced plan with time estimates and leading indicators.

The one-line plan: **before launch, ship robots + sitemap + schema + OG metadata + llms.txt (half a day). Within 2 weeks of launch, replace placeholder contacts, publish 2 case studies, add 2 editor bios, migrate fonts to `next/font`. Within 4 weeks, start a journal with 4–6 posts and acquire a Google Business Profile.**

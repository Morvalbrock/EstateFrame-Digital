# EstateFrame Digital — SEO Action Plan

Prioritised, sequenced by dependency. Each item lists: **effort**, **owner**, **falsifiability** (how you'd know it didn't work), and **leading indicator** (what to watch without re-running the audit).

---

## Phase 1 — Critical fixes (before any public share, ≤1 day)

### 1.1 Replace placeholder contact information (BLOCKER)
- **Effort:** 15 min
- **Owner:** Business owner provides real values; dev applies
- **Where:** `app/layout.tsx` metadata, `components/header.tsx`, `components/footer.tsx`, `components/contact-form.tsx`, `app/contact/page.tsx`, `app/page.tsx`, `app/HDR/page.tsx`, `app/services/page.tsx`, `app/portfolio/page.tsx`, `app/about/page.tsx`, `data/faq.ts`, `README.md`
- **Replace:**
  - `+91 00000 00000` → real number
  - `tel:+910000000000` and `https://wa.me/910000000000` → real
  - `hello@estateframe.digital` → real email
- **Grep:** `grep -r "00000 00000\|910000000000\|estateframe.digital" --include="*.tsx" --include="*.ts" --include="*.md"` should return 0 non-domain hits after.
- **Falsifiability:** No `0000` or placeholder email remaining anywhere.
- **Leading indicator:** None needed — binary check.

### 1.2 Add `app/robots.ts`
- **Effort:** 10 min
- **Create `app/robots.ts`:**
  ```ts
  import type { MetadataRoute } from "next";

  export default function robots(): MetadataRoute.Robots {
    return {
      rules: [
        { userAgent: "*", allow: "/" },
        // Explicitly allow AI crawlers — maximise GEO visibility
        { userAgent: "GPTBot", allow: "/" },
        { userAgent: "PerplexityBot", allow: "/" },
        { userAgent: "ClaudeBot", allow: "/" },
        { userAgent: "Google-Extended", allow: "/" },
      ],
      sitemap: "https://estateframe.digital/sitemap.xml",
      host: "https://estateframe.digital",
    };
  }
  ```
- **Falsifiability:** `curl https://estateframe.digital/robots.txt` returns 200 with the above content.

### 1.3 Add `app/sitemap.ts`
- **Effort:** 15 min
- **Create `app/sitemap.ts`:**
  ```ts
  import type { MetadataRoute } from "next";

  export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://estateframe.digital";
    const now = new Date();
    return [
      { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
      { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
      { url: `${base}/HDR`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
      { url: `${base}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
      { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
      { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    ];
  }
  ```
- **Falsifiability:** `curl https://estateframe.digital/sitemap.xml` lists 6 URLs.
- **Leading indicator:** GSC → Sitemaps → submit `/sitemap.xml` after launch; "Discovered" count should reach 6 within 48 hours.

### 1.4 Add canonical URLs to every page
- **Effort:** 20 min
- **Pattern** — add to every page's `metadata` export:
  ```ts
  export const metadata: Metadata = {
    title: "...",
    description: "...",
    alternates: { canonical: "/services" }, // page-specific slug
  };
  ```
- `app/layout.tsx` canonical is `"/"`.
- **Falsifiability:** `view-source:` on any production page shows `<link rel="canonical" href="https://estateframe.digital/<slug>"/>`.

### 1.5 Add sitewide `ProfessionalService` JSON-LD in `app/layout.tsx`
- **Effort:** 30 min
- **In `app/layout.tsx`**, after `<ScrollReveal />`, insert:
  ```tsx
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://estateframe.digital/#studio",
        name: "EstateFrame Digital",
        description:
          "Boutique post-production studio for real estate — HDR, twilight, virtual staging, drone, item removal, and property film composed with editorial discipline.",
        url: "https://estateframe.digital",
        logo: "https://estateframe.digital/images/EstateFrame_logo.png",
        image: "https://estateframe.digital/images/EstateFrame_logo.png",
        telephone: "+91 YOUR-REAL-NUMBER",
        email: "hello@YOUR-REAL-DOMAIN",
        areaServed: { "@type": "AdministrativeArea", name: "Worldwide" },
        serviceArea: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: "YOUR-LAT", longitude: "YOUR-LNG" }, geoRadius: "20000000" },
        priceRange: "$$",
        sameAs: [
          // Add once accounts exist: LinkedIn, Instagram, Behance
        ],
      }),
    }}
  />
  ```
- **Falsifiability:** Paste home URL into **Rich Results Test** (search.google.com/test/rich-results) — reports a detected `ProfessionalService` block, 0 errors.
- **Leading indicator:** Knowledge Panel for "EstateFrame Digital" in Google, 4–8 weeks post-launch.

### 1.6 Add `openGraph` + `twitter` metadata to every page
- **Effort:** 45 min
- **Create one 1200×630 OG image per section** (or at minimum, one shared card) — save under `public/og/`.
- **Pattern for every `metadata` export:**
  ```ts
  openGraph: {
    type: "website",
    url: "https://estateframe.digital/<slug>",
    siteName: "EstateFrame Digital",
    title: "<page title>",
    description: "<page description>",
    images: [{ url: "/og/<page>.png", width: 1200, height: 630, alt: "<page alt>" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "<page title>",
    description: "<page description>",
    images: ["/og/<page>.png"],
  },
  ```
- **Falsifiability:** Paste URL into Facebook Debugger (developers.facebook.com/tools/debug) — image preview appears.
- **Leading indicator:** Share any URL in Slack/LinkedIn — rich preview renders.

### 1.7 Add `public/llms.txt`
- **Effort:** 10 min
- **Create `public/llms.txt`:**
  ```md
  # EstateFrame Digital

  > Boutique post-production studio for real estate — HDR, twilight, virtual staging, drone, item removal, and cinematic property film composed with editorial discipline.

  ## Craft

  - [Services — the eight disciplines](https://estateframe.digital/services)
  - [The HDR Studio](https://estateframe.digital/HDR)
  - [Portfolio](https://estateframe.digital/portfolio)

  ## About

  - [The studio](https://estateframe.digital/about)
  - [Commission brief](https://estateframe.digital/contact)

  ## Working with the studio

  Rush frames returned under two hours. Revisions resolved inside sixty minutes, unbilled. Complimentary test frame on every commission. Delivery worldwide via cloud link.
  ```
- **Falsifiability:** `curl https://estateframe.digital/llms.txt` returns 200.
- **Leading indicator:** Ask Perplexity "What is EstateFrame Digital?" 7 days post-launch — expect a correct one-line answer, not "I have no information."

### 1.8 Shrink the favicon
- **Effort:** 10 min
- **Export** 32×32 (`app/icon.png`) and 180×180 (`app/apple-icon.png`) from the source logo — target <10 KB each.
- **Falsifiability:** `du -h app/icon.png app/apple-icon.png` both <20 KB.

---

## Phase 2 — High-impact improvements (first 2 weeks after launch)

### 2.1 Add per-service `Service` JSON-LD on `/services` detail sections
- **Effort:** 45 min
- **Pattern** — inside each `<article id="{service.id}">`:
  ```tsx
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: service.title,
        provider: { "@id": "https://estateframe.digital/#studio" },
        description: service.fullDescription,
        areaServed: "Worldwide",
      }),
    }}
  />
  ```
- **Falsifiability:** Rich Results Test on `/services#hdr-photo-editing` detects 8 `Service` blocks.
- **Leading indicator:** GSC → Enhancements → Services impressions.

### 2.2 Rewrite page titles for keyword-first SERP
- **Effort:** 20 min
- Changes in `app/services/page.tsx`, `app/portfolio/page.tsx`, `app/about/page.tsx`, `app/HDR/page.tsx` — see `findings/on-page.md` for exact strings.
- **Falsifiability:** Titles contain target keyword in first 30 characters.
- **Leading indicator:** GSC → non-branded CTR at 30 days vs baseline.

### 2.3 Migrate fonts to `next/font`
- **Effort:** 45 min (CSS variable rename ripples across globals.css)
- **Steps:**
  1. In `app/layout.tsx`, import `Fraunces` and `Inter` from `next/font/google` with `variable: "--font-display"` and `variable: "--font-sans"`.
  2. Add `${fraunces.variable} ${inter.variable}` to the root `<html>` className.
  3. Delete the `@import url(...)` line at top of `app/globals.css`.
  4. In `:root`, point `--font-display` and `--font-sans` to the imported variables.
- **Falsifiability:** Network tab shows no request to `fonts.googleapis.com`; fonts render identically.
- **Leading indicator:** PageSpeed LCP on `/` — target 150-400ms improvement.

### 2.4 Replace placeholder testimonials
- **Effort:** Depends on client outreach (external)
- **Where:** `data/testimonials.ts`
- **Blocker:** Need real written permission from 3+ real clients.
- **Falsifiability:** Attribution to real agencies, real names, ideally linked LinkedIn.
- **Interim:** If no real testimonials available at launch, **remove the home-page testimonials section entirely** rather than ship placeholders. Visible placeholders damage trust more than their absence.

### 2.5 Shrink hero logo PNG used in header/footer
- **Effort:** 15 min
- Export at 1024×1024 max, <80 KB, replace `public/images/EstateFrame_logo.png`.
- **Falsifiability:** `du -h public/images/EstateFrame_logo.png` <100 KB.

### 2.6 Add `BreadcrumbList` schema to `/HDR`
- **Effort:** 15 min
- **Pattern:**
  ```tsx
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://estateframe.digital" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://estateframe.digital/services" },
          { "@type": "ListItem", position: 3, name: "HDR Studio", item: "https://estateframe.digital/HDR" },
        ],
      }),
    }}
  />
  ```
- **Falsifiability:** Rich Results Test on `/HDR` detects `BreadcrumbList`.
- **Leading indicator:** SERP breadcrumb visible in Google for the HDR page.

### 2.7 Add security headers via `next.config.ts`
- **Effort:** 20 min
- **Add a `headers()` function** emitting:
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **Falsifiability:** `curl -I https://estateframe.digital/` shows the four headers.
- **Leading indicator:** Mozilla Observatory score ≥ 90.

---

## Phase 3 — Content & authority (weeks 3–6)

### 3.1 Publish 2 case studies at `/case-studies/[slug]`
- **Effort:** 4–8 hours per case study
- **Structure per case:** 600–1,200 words, named-or-anonymised client, bracketed workflow, before/after frames, outcome if available.
- **Falsifiability:** Case study ranks for `"<brokerage> real estate photo editing"` within 90 days.
- **Leading indicator:** Time on page >2 min; shares.

### 3.2 Add 2–4 named editor bios on `/about`
- **Effort:** 2–3 hours
- **Per editor:** Name, role, years at craft, 1-paragraph bio, one representative frame.
- **Falsifiability:** `/about` names ≥2 real humans; `Person` schema optional (add via `ProfessionalService.employee` array).
- **Leading indicator:** E-E-A-T band moves from Medium to High on next `/seo content /about` run.

### 3.3 Launch `/journal` with 4–6 seed posts
- **Effort:** 3–5 hours per post (1,000–1,500 words)
- **Topics to seed** (from `findings/content.md`):
  1. "How we compose a frame — brief to delivery"
  2. "Bracket best practices for real estate HDR"
  3. "Day-to-twilight conversion — the physics behind the frame"
  4. "The economics of virtual staging vs physical staging"
  5. "Item removal in real estate photography — technique and ethics"
  6. "Drone finishing — haze, horizon, and honest colour"
- **Falsifiability:** Journal posts ranked top 20 for long-tail queries within 90 days.
- **Leading indicator:** Non-branded impressions in GSC.

### 3.4 Create Google Business Profile for physical studio location
- **Effort:** 2 hours + GBP verification wait
- **Includes:** NAP consistency with site footer, service list matching site, Q&A seeded, photos uploaded from portfolio.
- **Falsifiability:** GBP profile appears in Google Maps for physical location.
- **Leading indicator:** GBP Insights → map views, calls.

### 3.5 Pre-generate WebP versions of portfolio frames
- **Effort:** 30 min (if automated via `sharp` script); 2 hours manually
- **Script approach:** Node `sharp` loop over `public/images/**/*.jpg` emitting `.webp` siblings at quality 82.
- **Falsifiability:** PageSpeed image audit reports "next-gen formats" passing.

---

## Phase 4 — Monitoring & iteration (ongoing)

### 4.1 Set up Google Search Console
- Verify the domain (DNS TXT or `next.config.ts` meta tag).
- Submit the sitemap.
- Monitor Coverage, Core Web Vitals, Enhancements reports weekly.

### 4.2 Set up Vercel Analytics (or Plausible/Fathom)
- Zero-runtime-cost analytics on page performance and traffic.
- Monitor top pages, LCP/CLS/INP by page.

### 4.3 Capture an SEO drift baseline
- Run `/seo drift baseline https://estateframe.digital/` once stable.
- Weekly `/seo drift compare` to catch regressions from deploys.

### 4.4 Quarterly re-audit
- Full `/seo audit https://estateframe.digital` every 90 days.
- Track SEO Health Score trajectory — target 75 within 30 days of launch, 85+ within 90 days.

---

## Sequencing summary

```
Week 0 (pre-launch):   Phase 1 (1.1 → 1.8)  — 2–3 hours of work, unblocks launch
Week 1 (post-launch):  Phase 2.1, 2.2, 2.3   — schema, titles, fonts
Week 2:                Phase 2.4–2.7         — testimonials, logo, breadcrumb, headers
Weeks 3–6:             Phase 3               — case studies, bios, journal, GBP
Ongoing:               Phase 4               — GSC, analytics, drift, quarterly audit
```

**Launch-readiness gate:** Phase 1 is complete AND a 90-second manual QA shows no `00000` placeholder remaining anywhere.

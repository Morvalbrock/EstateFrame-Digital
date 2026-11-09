# EstateFrame Digital — Re-audit (same day)

**Re-audit date:** 9 November 2026 (same day as baseline)
**Previous Health Score:** 51 / 100
**New Health Score:** **77 / 100** (+26)

Source-tree analysis plus live verification against `http://localhost:3001`.

---

## Score movement

| Category | Weight | Baseline | Now | Δ |
|---|---|---|---|---|
| Technical SEO | 22% | 42 | **82** | +40 |
| Content Quality | 23% | 58 | **72** | +14 |
| On-Page SEO | 20% | 68 | **86** | +18 |
| Schema / Structured Data | 10% | 8 | **70** | +62 |
| Performance (CWV) | 10% | 68 | **72** | +4 |
| AI Search Readiness | 10% | 32 | **68** | +36 |
| Images | 5% | 54 | **78** | +24 |
| **Total** | 100% | 51 | **77** | **+26** |

Interpretation: **"Strong launch-ready posture."** All critical findings from the baseline are resolved. What remains is time-dependent (case studies, bios, journal, Google Business Profile) and one deferred technical item (font migration).

---

## What moved — verified live

### Technical SEO (42 → 82)
- ✅ `/robots.txt` serves 200 with explicit `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `CCBot` allow + sitemap pointer
- ✅ `/sitemap.xml` serves 200 with all 6 routes, lastmod, priorities
- ✅ Canonical declared on every route via `alternates.canonical`
- ✅ Security headers live on every route: `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy` (verified via `curl -I`)
- ✅ Favicon `app/icon.png` 1.6 MB → **2 KB**
- ✅ Apple touch icon `app/apple-icon.png` 1.6 MB → **56 KB**
- ✅ Sitewide `ProfessionalService` JSON-LD carries real telephone + email

### Schema (8 → 70) — single largest category move
- ✅ Sitewide `ProfessionalService` in `app/layout.tsx` — declares entity + service types array + area served
- ✅ Per-service `Service` graph (8 blocks) on `/services`, each referencing the sitewide `@id`
- ✅ `BreadcrumbList` on `/HDR` matching the visual breadcrumb

### Content (58 → 72)
- ✅ Service descriptions rewritten direct and specific — example: "HDR photo editing for real estate: we manually blend 3 to 7 bracketed exposures... Works with brackets from Canon, Nikon, Sony, Fuji, and Pentax."
- ✅ FAQ expanded from 10 → **18 questions** — covers pricing, file formats, turnaround SLAs, HDR vs single image, iPhone editing, MLS exports, object removal, payment model, file retention
- ✅ About page restructured with **What we do / Who we serve / How we work** bolded leads
- ✅ Hero support copy rewritten direct + keyword-first

### On-Page (68 → 86)
- ✅ Keyword-first titles on Services, Portfolio, About, HDR, Contact
- ✅ OG + Twitter metadata per route with page-specific image + description
- ✅ Sitewide title template `%s | EstateFrame Digital`

### AI Search Readiness (32 → 68)
- ✅ `/llms.txt` serves correctly with studio description, discipline links, working-with-the-studio section
- ✅ Entity-level discovery via ProfessionalService JSON-LD
- ✅ 18 direct-answer FAQ passages = 18 citation targets

### Images (54 → 78)
- ✅ Favicon fixed
- ✅ Hero logo `public/images/EstateFrame_logo.png` 1.52 MB → **308 KB**
- ✅ Sharp installed as devDependency; `npm run optimize:images` re-runnable

### Performance (68 → 72) — modest move; deferred items dominate
- ✅ Favicon + logo weight dropped ~3 MB per cold cache
- ❌ Deferred: `next/font` migration (still @import from Google Fonts)
- ❌ Deferred: portfolio JPG optimization
- ⚠️ `next.config.ts` has `images: { unoptimized: true }` — Next won't auto-serve WebP

### Contact / Trust (not a scored category but a blocker)
- ✅ Placeholder `+91 00000 00000` and `hello@estateframe.digital` replaced sitewide with real values (**+91 63837 50315**, **agilansr222@gmail.com**)
- ✅ All `tel:`, `wa.me/`, and `mailto:` links point at real values
- ✅ JSON-LD `telephone` and `email` fields carry real values

---

## What's still open

### High — content work (needs human input)
| Item | Impact | Blocker |
|---|---|---|
| Replace placeholder testimonials, or remove the section | +3 Content, +Trust | Needs real client quotes under written permission |
| Publish 2 case studies at `/case-studies/[slug]` | +5 Content, +E-E-A-T | Needs real project narratives |
| Add 2–4 named editor bios on `/about` | +4 Content, +E-E-A-T | Needs real people |
| Launch `/journal` with 4–6 seed posts | +6 AI Search Readiness | Content writing work |
| Create Google Business Profile | +3 Local SEO | Needs physical studio address + verification |

### Medium — performance work (1–2 hours)
| Item | Impact |
|---|---|
| Migrate Google Fonts to `next/font` (self-host) | +3 Performance |
| Pre-generate WebP for all 45 portfolio images (extend `optimize-images.mjs`) | +4 Images, +2 Performance |
| Flip `images.unoptimized` to `false` in `next.config.ts` (requires sharp — already installed) | +2 Images |

### Low — nice-to-have
| Item | Impact |
|---|---|
| Add `ImageObject` JSON-LD on HDR hero frames | +1 Schema |
| Add security header: `Content-Security-Policy` once third-party scripts are known | +2 Technical |
| Image sitemap generation | +1 Images |

---

## Deploy-dependent items (unchanged)

Can't be measured until the site is live on `https://estateframe.digital`:
- Core Web Vitals field data (CrUX requires 28 days of traffic)
- Lighthouse real-world LCP, CLS, INP
- Google Search Console verification, coverage, enhancements reports
- Backlink profile (nothing to link to pre-launch)
- AI Overview / Perplexity citation share
- Agentic Browsing fraction (needs public URL + Lighthouse run)

Re-run `/seo audit https://estateframe.digital` within 7 days of launch.

---

## Launch readiness verdict

**Launch-ready.** The score moved from "Fair with critical gaps" (51) to "Strong launch-ready posture" (77) in one working session. Every pre-launch blocker is resolved:

- ✅ No placeholder contacts anywhere
- ✅ Discovery files (robots, sitemap, llms) live
- ✅ Schema entity (ProfessionalService + 8 Service + BreadcrumbList) live
- ✅ Social cards (OG + Twitter) live
- ✅ Security headers configured
- ✅ Favicon + logo weight reasonable
- ✅ Content is keyword-direct and FAQ-rich
- ✅ Build passes clean (13 static routes)

Remaining items are content maturity (case studies, bios, journal, testimonials) and one performance polish (font migration). None block launch — all accelerate growth after launch.

## Suggested next move

**Option A — launch now:** Deploy to Vercel or similar, submit sitemap to GSC, verify production URL, then iterate on content from live traffic signals.

**Option B — close one more gap first:** Pick the single highest-leverage deferred item:
- If you want AI-search citations: write the long-form explainer `/journal/how-we-compose-a-frame` (I can draft it from the service data)
- If you want E-E-A-T: write editor bios for `/about` (I need names + 1-paragraph role summary each)
- If you want physical-location visibility: tell me your Google Business Profile address and I'll add `LocalBusiness` schema with address + opening hours

Tell me which, or say "commit + prep for launch" and I'll bundle everything shipped today into a clean commit series and brief you on the Vercel deploy steps.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel. Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

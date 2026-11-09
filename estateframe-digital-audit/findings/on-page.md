# On-Page SEO — Findings

**Category score:** 68 / 100
**Weight:** 20%
**Posture:** Titles and descriptions are present, distinctive, and keyword-aware. Missing: OG/Twitter metadata, canonical declarations, and keyword-targeted title variants.

## What works
- Every route carries a unique `metadata` export with `title` and `description` — no page will inherit a default or duplicate.
- Titles follow a consistent studio voice pattern (`"Section — EstateFrame Digital"`) that reinforces brand entity on every impression.
- Descriptions are 140–170 chars (ideal SERP snippet range), action-led, keyword-aware ("post-production studio", "HDR", "twilight", "virtual staging").
- Single `<h1>` per page (verified across all five routes + HDR) — no H1 duplication.
- H2/H3 hierarchy is structured and semantic (section titles → subsection headings), not styled-h1-spam.
- Internal link structure is clean — the main nav links every page from every page, plus contextual cross-links (home → services, services → HDR, portfolio → contact).
- Links use descriptive anchor text ("Enter HDR Studio", "Study the craft", "Commission Studio") — no "click here" anti-patterns.

## Findings

### HIGH — No Open Graph / Twitter card metadata
- **Evidence:** No `openGraph` or `twitter` keys in any `metadata` export. Grep confirms zero matches in app code.
- **Why:** Rendering of the site URL in Slack, iMessage, LinkedIn, X, Facebook will fall back to a title-only unfurl with no image. For a visual studio this is the opposite of what the brand wants.
- **Recommendation:** Add `openGraph` and `twitter` keys to every page's metadata. Reference a 1200×630 PNG per page. Pattern provided in the Action Plan.

### HIGH — No canonical URLs declared
- **Evidence:** No `alternates.canonical` anywhere. Next.js does not auto-emit canonical tags unless declared via `alternates`.
- **Why:** UTM-tagged shares (e.g. `/services?utm_source=linkedin`) will be indexed as duplicate URLs, splitting ranking signals.
- **Recommendation:** Add `alternates: { canonical: "/<slug>" }` to every page. Combined with `metadataBase`, Next.js emits the fully-qualified absolute URL automatically.

### MEDIUM — Titles lean brand-first, not keyword-first
- **Evidence:** Current titles:
  - Home: `"EstateFrame Digital — Editorial Post-Production for Real Estate"` ✓ keyword-adjacent
  - Services: `"The Craft — Services | EstateFrame Digital"` — brand first
  - Portfolio: `"Portfolio — Selected Work | EstateFrame Digital"` — weak keyword
  - HDR: `"The HDR Studio — Real Brackets, Resolved | EstateFrame Digital"` ✓ ok
  - About: `"The Studio | EstateFrame Digital"` — weak keyword
  - Contact: `"Commission the Studio | EstateFrame Digital"` — weak keyword
- **Why:** For brand searches, these are fine. For non-brand ("real estate photo editing services", "HDR editing for property photographers", "virtual staging studio"), the keyword is buried or absent. SERP CTR drops ~15–30% when the primary keyword doesn't appear in the first 30 characters.
- **Recommendation:** Rebalance toward "keyword — brand descriptor" pattern:
  - Services: `"Real Estate Photo Editing Services — EstateFrame Digital"`
  - Portfolio: `"Real Estate Editing Portfolio — HDR, Twilight, Staging | EstateFrame Digital"`
  - About: `"About the Studio — Boutique Post-Production for Real Estate"`
  - Contact: `"Commission the Studio — EstateFrame Digital"`
- Target keyword research should inform these — run `/seo cluster "real estate photo editing"` to validate.

### MEDIUM — Header `h1` on home page is long and visually styled (`"The frame makes the property"`)
- **Evidence:** `app/page.tsx` line ~27 renders an `<h1>` as styled display with an italic `<em>` element. Google parses visible text, so the full phrase is the h1.
- **Why:** H1 is a strong keyword relevance signal. "The frame makes the property" is editorial but contains zero target keywords. Brand recall-high, SEO-low.
- **Recommendation:** Either (a) keep the display h1 as-is for brand voice and accept the trade-off; or (b) add a hidden `<h2>` or visible eyebrow with the keyword target ("Editorial real estate photo editing studio"). The eyebrow is already present — consider making its visual treatment slightly larger and semantic as an `<h2>`.

### MEDIUM — No internal linking to case studies or journal (which don't exist yet)
- **Evidence:** All internal links point to the six existing pages only.
- **Why:** When case studies and a journal are added (see content.md), they'll need inbound internal links to acquire PageRank. Current footer lists services only — journal and case-studies columns should be added when those routes exist.
- **Recommendation:** Pre-wire footer and nav slots for journal and case studies, even if the routes 404 initially. Or defer until those routes exist.

### LOW — Meta descriptions could be more CTA-forward
- **Evidence:** Descriptions describe the studio well but lack explicit CTAs. Example: `"EstateFrame Digital is a boutique post-production studio for real estate — HDR, twilight, virtual staging, drone, item removal, and cinematic walkthroughs composed with editorial discipline."`
- **Why:** Descriptions ending in a soft CTA ("Commission a frame", "Request a test edit") can lift SERP CTR 5–10%.
- **Recommendation:** Append soft CTAs to descriptions — "Commission a test frame →" or "See the work →" style.

### LOW — HDR page has long title (73 chars) that may truncate in SERP
- **Evidence:** `"The HDR Studio — Real Brackets, Resolved | EstateFrame Digital"` is 62 chars. Google truncates at ~60 on desktop, ~55 on mobile.
- **Why:** Truncation makes titles less legible, slightly hurts CTR.
- **Recommendation:** Trim to `"HDR Studio — Real Brackets, Resolved | EstateFrame Digital"` (58 chars). Drop "The".

### INFO — No pagination anywhere (no issue, noted for completeness)
- **Evidence:** No paginated listings. Portfolio is a single gallery.
- **Why:** No rel=prev/next concerns.

## Falsifiability checks
- `view-source:https://estateframe.digital/services` shows a `<link rel="canonical">` after canonical fix.
- Share any production URL on LinkedIn — image preview appears after OG fix.
- GSC → Performance → compare branded vs non-branded impressions 30 days after title changes. Non-branded should rise.

## Leading indicators
- Non-branded SERP impressions trending upward (from zero at launch).
- SERP CTR on `/services` and `/HDR` — titles rewrite target 3–6% baseline.

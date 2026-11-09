# Schema / Structured Data — Findings

**Category score:** 8 / 100
**Weight:** 10%
**Posture:** Nothing. Zero JSON-LD anywhere in the site. The single-largest low-hanging quick win in this audit.

## What works
- Nothing to report — no structured data is present.

## Findings

### CRITICAL — No JSON-LD structured data on any page
- **Evidence:** Grep for `application/ld+json` across the full source tree returns no matches in app code. No Schema.org markup anywhere.
- **Why:** Google uses structured data to (a) enable rich results (reviews, FAQ, services, business info in SERP), (b) populate Knowledge Graph entries, and (c) understand entity relationships for AI Overviews. A service studio with no `LocalBusiness` / `ProfessionalService` / `Organization` schema is essentially invisible to Google's entity graph. Perplexity and ChatGPT lean even harder on JSON-LD to decide which business the content describes.
- **Recommendation:** Add the four schema types below as JSON-LD blocks in `app/layout.tsx` (sitewide `Organization`) and page-level layouts.

### HIGH — Missing `Organization` / `ProfessionalService` sitewide schema
- **Evidence:** No sitewide JSON-LD. The studio is a professional service (post-production for real estate).
- **Why:** This is the root entity Google ties every page back to. Without it, every page is an orphan in Google's knowledge graph.
- **Recommendation:** Inject a `ProfessionalService` block in `app/layout.tsx` with `@id`, `name`, `url`, `logo`, `description`, `sameAs` (future LinkedIn / Instagram / Behance URLs), `contactPoint`, and `areaServed` (India + "Worldwide via digital delivery").

### HIGH — No `Service` schema per discipline
- **Evidence:** `data/services.tsx` lists 8 disciplines. Each is a `Service` offered by the studio but none is marked up.
- **Why:** Service schema qualifies the business for the "services carousel" rich result and gives AI engines a crisp list to cite when answering "what does EstateFrame Digital do?".
- **Recommendation:** Emit a `Service` JSON-LD block inside each `<article id="{service.id}">` on `/services`, with `serviceType`, `provider` (referencing the sitewide `Organization` `@id`), `description`, and `areaServed`.

### HIGH — No `BreadcrumbList` on `/HDR`
- **Evidence:** `app/HDR/page.tsx` already renders a visual breadcrumb (`Home › Services › HDR Studio`), but the JSON-LD equivalent is missing.
- **Why:** Google uses `BreadcrumbList` schema to render the SERP breadcrumb in place of the URL — a direct CTR uplift on a subpage.
- **Recommendation:** Emit a `BreadcrumbList` JSON-LD block next to the visual breadcrumb in `app/HDR/page.tsx`. Pattern can be reused on future deep pages.

### MEDIUM — No `ImageObject` schema on HDR before/after frames
- **Evidence:** HDR page uses the `BeforeAfterSlider` component on six real brackets; images are composed by the studio but not schema-marked as the studio's work.
- **Why:** For "hero" image frames, `ImageObject` with `creator`, `copyrightHolder`, and `contentLocation` cements authorship for Google Images and for AI Overviews that pull image citations.
- **Recommendation:** Add `ImageObject` JSON-LD for the six HDR hero frames, referencing the sitewide Organization `@id` as `creator`.

### MEDIUM — Testimonial content exists but no `Review` schema
- **Evidence:** `data/testimonials.ts` defines three testimonials rendered on the home page; these are self-described as "representative" in `testimonials-demo-notice`.
- **Why:** Review schema is Google's hook for star-rating rich results. But — these are currently placeholder quotes. Using Review schema on placeholder testimonials is technically a Google Webmaster Guidelines violation (false claims of third-party ratings).
- **Recommendation:** Do **not** add Review schema until real client testimonials are approved. When they are, use `Review` with `author` (Person with `name` + `jobTitle`), `reviewRating`, and `itemReviewed` (reference to the Organization). Flagged Medium (not High) to prevent premature implementation.

### INFO — Do NOT use FAQPage schema (Google retired the SERP feature)
- **Evidence:** FAQ exists on the home page (`FAQAccordion` component, ten entries in `data/faq.ts`). Pre-2026 SEO guides would recommend FAQPage schema here.
- **Why:** Google retired FAQ rich results for all sites on 7 May 2026. Adding FAQPage schema now yields no SERP benefit and the AI-citation benefit is unconfirmed.
- **Recommendation:** Leave FAQ unmarked for now. If / when AI Overviews begin citing FAQ passages (track in GEO analytics), revisit.

## Falsifiability checks
- Paste any page URL into Google's **Rich Results Test** (search.google.com/test/rich-results) — should detect at least `ProfessionalService` and `Service`.
- `/HDR` should detect `BreadcrumbList` once added.
- Knowledge Panel for "EstateFrame Digital" should appear in Google within 4–8 weeks of launch + schema deployment.

## Leading indicators
- GSC → Enhancements → "Breadcrumbs", "Services", "ProfessionalService" surfaces should begin reporting impressions once Google crawls the schema.

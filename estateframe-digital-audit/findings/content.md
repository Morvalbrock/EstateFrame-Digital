# Content Quality (E-E-A-T, Readability, Thin-content) — Findings

**Category score:** 58 / 100
**Weight:** 23%
**Posture:** Editorial voice is strong and distinctive; thin pages aren't a problem. The gap is proof — no bylines, no dates, no author bios, no case-study depth.

## What works
- Distinctive, non-generic editorial voice ("the quiet work", "composed, not rendered", "the frame makes the property"). Google's helpful-content signal rewards consistency of voice and perspective — this site has it.
- Every page carries substantive copy (home page alone is ~800 words of narrative; services page ~1,400 words across eight disciplines). No page is <300 words.
- Clear, benefit-led service descriptions in `data/services.tsx` — each discipline has `shortDescription`, `fullDescription` (long-form), and a `benefits` list.
- Specific, non-fluffy claims ("rush delivery within two hours", "revisions returned in under an hour", "3 to 7 bracket merges"). Specificity is an E-E-A-T positive.
- First-person plural studio voice is consistent — reinforces entity authority.

## Findings

### HIGH — No author bylines or studio bios (Experience + Expertise signal missing)
- **Evidence:** `app/about/page.tsx` describes the studio in third person ("The studio…", "we work behind the lens…") but names no editors, lead colourists, or founders. No author schema. No photos or credentials.
- **Why:** Google's Sept 2025 E-E-A-T update made Experience (the first "E") a first-class signal. For a craft studio, the hands behind the frame *are* the authority. A nameless studio is treated as lower-E-E-A-T than a comparable studio with named colourists, each with a mini bio.
- **Recommendation:** Add a "People of the studio" block to `/about` with 2–4 named editors — role, years at craft, one representative frame. Even a small team (two names) materially moves this needle.

### HIGH — Testimonials are self-flagged as "representative" (Trust signal weak)
- **Evidence:** Home page footer on testimonials section renders "Representative notes — verified references available on commission brief." Testimonial component uses placeholder names (Marcus Vance, Elena Rostova, David Chen) with no linking to real agencies.
- **Why:** Explicitly-placeholder testimonials actively undermine trust. A user who notices this once will discount every other claim on the page.
- **Recommendation:** Replace with 3–5 real client quotes under written permission, with attribution to real businesses and ideally headshots. Until real quotes are available, remove the section entirely — no social proof is better than visibly fake social proof.

### HIGH — No case studies (Authoritativeness signal missing)
- **Evidence:** Portfolio page is a gallery of before/after thumbnails. No long-form case study anywhere — no "we received 47 raw brackets from Compass agent X and shipped the folder in 94 minutes" narrative.
- **Why:** Case studies are the highest-density E-E-A-T asset a creative studio can publish. They demonstrate Experience (specific projects), Expertise (technique explained), and Trust (named client, outcome). AI Overviews cite case studies disproportionately when answering "best HDR editing services" style queries.
- **Recommendation:** Publish 2–3 anonymised or named case studies at `/case-studies/[slug]` — each 600–1,200 words with embedded before/after. Draft one even without a named client; narrative + frames can be real even if the brokerage is anonymised.

### MEDIUM — No "last updated" dates visible anywhere
- **Evidence:** No `datePublished` or `dateModified` text on any page. No JSON-LD `Article` schema (which would carry these as machine-readable fields).
- **Why:** Freshness is an E-E-A-T sub-signal. For a static studio site without a blog, this is less load-bearing than for a publisher, but for FAQ and service pages, dates help Google decide to re-crawl.
- **Recommendation:** Add a subtle "Studio practices updated — Nov 2026" footer to `/services` and `/about`. Update when disciplines or pricing meaningfully shift.

### MEDIUM — No blog / editorial channel
- **Evidence:** No `/blog`, `/journal`, `/notes` route exists. Project structure confirms six public routes only.
- **Why:** For a studio site, a journal is the primary vehicle for long-tail organic traffic ("how to shoot brackets for HDR editing", "day-to-twilight conversion workflow explained"). Without it, the site can only rank for brand + head terms like "real estate photo editing", which are competitive and intent-mismatched.
- **Recommendation:** Add `/journal` route with 6 seed posts: HDR workflow, bracket best practices, twilight science, virtual staging economics, item-removal ethics, drone-finishing basics. Each 1,000–1,500 words. Run `/seo cluster "real estate photo editing"` to design the hub-and-spoke before writing.

### MEDIUM — Placeholder contact info reduces trust
- **Evidence:** Phone number appears everywhere as `+91 00000 00000`; email as `hello@estateframe.digital`. Flagged in Technical and On-Page sections but material to Content Trust as well.
- **Why:** A real business doesn't ship with `00000 00000`. Any user who clicks the number will disbelieve the rest of the page.
- **Recommendation:** Blocker on launch, not a post-launch polish item. Must be replaced with real values before any publication.

### LOW — FAQ is plain markdown, could be richer
- **Evidence:** `data/faq.ts` has 10 questions with clear, conversational answers. Good structure, honest prose.
- **Why:** Even without FAQPage schema (retired, see schema.md), well-structured FAQ copy ranks for "people also ask" and is highly citeable by AI Overviews.
- **Recommendation:** Keep as-is. Expand by 3–5 questions over time based on actual client questions: "how do you handle multi-bracket exposure mismatches across a folder", "what if my camera is X and your editors don't have a profile for it", etc.

### INFO — No AI-detection tells in the content
- **Evidence:** Content reads as deliberate human editorial — contractions, idiomatic phrasing, specific numerical claims. No "In the realm of…" / "navigating the landscape of…" patterns that score as AI-written in detection models.
- **Why:** This matters for AI Overviews citation ranking (Perplexity down-weights obviously-AI content) and for brand perception.
- **Recommendation:** Keep this voice. If you ever auto-generate blog posts, run them through `/seo content clean` before shipping.

## Falsifiability checks
- Paste any page's copy into an AI-content detector (GPTZero, Originality.ai). Should score >70% human.
- Run `/seo content <page>` after adding bios + case studies — E-E-A-T band should move from Medium to High.
- Does the About page name anyone? If not, Experience score cannot move.

## Leading indicators
- Branded search impressions for "EstateFrame Digital" in GSC — proxy for entity recognition.
- Time-on-page for `/about` and `/services` — if >90 seconds, copy is being read.
- Referrals from Compass / Sotheby's / small brokerage sites to case studies — signals authoritativeness.

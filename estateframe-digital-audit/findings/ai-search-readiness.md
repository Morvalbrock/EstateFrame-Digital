# AI Search Readiness (GEO) — Findings

**Category score:** 32 / 100
**Weight:** 10%
**Posture:** Content is naturally citeable (clear prose, specific claims, no fluff) — but zero discovery signals for AI crawlers. No llms.txt, no Article/Service schema, no author bios, no clearly-stated entity.

## What works
- Static HTML — AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) can parse the site without JS execution.
- Clear factual statements ("rush delivery under two hours", "revisions returned under an hour", "three to seven bracket merges") — these are the kind of specific passages AI Overviews love to cite.
- No mixed-intent content — every page is monotonic (services page is about services, portfolio about portfolio). AI engines can confidently decide which page answers a given query.
- FAQ section on home page — natural passage-level targets for citation.

## Findings

### HIGH — No `llms.txt` file (AI crawler discovery signal)
- **Evidence:** `ls public/llms*` returns no results.
- **Why:** `llms.txt` is the emerging convention for pointing AI crawlers at the canonical description and content inventory of a site. Anthropic, OpenAI, Perplexity, and Jina all now read it. It's optional (ignored by Google Search), but for an AI-first discovery strategy, it's the single highest-leverage file you can ship.
- **Recommendation:** Add `public/llms.txt` with a clear studio description, the eight disciplines, and links to `/services` and `/portfolio`. Pattern in Action Plan.

### HIGH — No `Organization` / `ProfessionalService` JSON-LD
- **Evidence:** See `schema.md` — zero JSON-LD anywhere.
- **Why:** AI engines increasingly cite businesses by entity (Knowledge Graph identifier). Without schema, your studio is a page about a studio, not a known entity. Perplexity's "About the source" sidebar leans entirely on JSON-LD + Wikidata.
- **Recommendation:** Covered under Schema findings. Ship the sitewide `Organization` block first.

### HIGH — No named authors / studio members
- **Evidence:** Covered under Content findings. Nobody is named on the About page.
- **Why:** AI Overviews heavily weight human authorship. A nameless source scores lower than a named-author source on identical content.
- **Recommendation:** Covered under Content findings — add 2–4 named editors with roles.

### MEDIUM — No "how to work with the studio" long-form explainer
- **Evidence:** The home page describes the pipeline in four bullets (Brief → Transfer → Composition → Delivery). No long-form "How a frame is composed from brief to delivery" article.
- **Why:** When a user asks ChatGPT "how does real estate photo editing work" or "what's involved in an HDR blend", AI engines cite long-form procedural content. Four bullets aren't citeable.
- **Recommendation:** Publish a 1,200–1,800 word explainer at `/journal/how-we-compose-a-frame` or similar. Walk through the actual workflow — bracket intake, alignment, exposure composition, line correction, delivery. Specific numbers (stops, DPI, color temperature). This is high-value GEO content.

### MEDIUM — Content is passages-ready but not passage-structured
- **Evidence:** Each service in `data/services.tsx` has a `fullDescription` (1 paragraph, 50–80 words). Good density but no sub-headings within.
- **Why:** AI Overviews cite passages (3–5 sentences max). A single dense paragraph is one passage. If you want AI engines to cite multiple ideas from one service, split it into labelled sub-passages.
- **Recommendation:** On the `/services` detail pages, break each service into `<h3>` micro-sections: "What it is", "When to use it", "What the studio composes" — each 2–3 sentences. Every micro-section becomes an independent citation target.

### MEDIUM — No anti-scraping or AI-opt-out signals (which is correct for GEO, but worth confirming intent)
- **Evidence:** No robots.txt yet; no `X-Robots-Tag: noai`; no Content-Signal headers.
- **Why:** Some businesses opt their content out of LLM training. If you want to be cited by AI engines, you want the opposite — explicit permission.
- **Recommendation:** Confirm intent. Default recommendation for a visibility-maximising studio: ship robots.txt with `User-agent: GPTBot`, `PerplexityBot`, `ClaudeBot` all `Allow: /`. Do not add noai signals.

### LOW — No brand "sameAs" references (Wikidata, LinkedIn, Instagram, Behance)
- **Evidence:** No external profile linkage because the business is pre-launch.
- **Why:** AI engines use `sameAs` on Organization schema to disambiguate your entity from similarly-named businesses, and to pull reputation signals from LinkedIn/Wikidata.
- **Recommendation:** Once LinkedIn / Instagram / Behance / Wikidata presences exist, add their URLs to the Organization JSON-LD `sameAs` array.

## Falsifiability checks
- Ask Perplexity: "What is EstateFrame Digital?" After launch + schema + llms.txt, answer should reference the studio with a correct one-line description, not "I don't have information about this business."
- Ask ChatGPT: "best HDR editing services for real estate photographers". Watch whether the studio is mentioned in a cited list within 8 weeks of publishing case studies + journal posts.
- Google AI Overviews for "day to night real estate photo editing" — monitor whether the studio is cited.

## Leading indicators
- Perplexity "Sources" sidebar hits — track via referer header once analytics is installed.
- ChatGPT traffic via `chat.openai.com` referer.
- AI Overview citation share (via tools like Mangools AI Overview Checker once budget allows).

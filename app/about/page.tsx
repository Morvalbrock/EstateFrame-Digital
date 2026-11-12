import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Users, Sparkles, Phone } from "lucide-react";

const PAGE_TITLE = "About — AI + Human Real Estate Photo Editing";
const PAGE_DESC =
  "AI real estate photo editing studio with human QC. Style memory per photographer, MLS compliance checklist, 12-hour SLA. USA, Canada, UK, Australia.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "https://estateframe.digital/about",
    siteName: "EstateFrame Digital",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [{ url: "/images/hdr/hdr-sample-2-after.jpg", width: 1200, height: 800, alt: "EstateFrame Digital — AI real estate photo editing studio with human verification" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/hdr/hdr-sample-2-after.jpg"],
  },
};

const aboutHeroImg = "/images/hdr/hdr-sample-2-after.jpg";
const aboutWorkflowImg = "/images/single-image/single-sample-3-after.jpg";

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      {/* HERO */}
      <section className="page-hero-banner container">
        <span className="eyebrow">The studio</span>
        <h1 className="page-hero-title">
          AI real estate photo editing — with the human who stops the mistakes.
        </h1>
        <p className="page-hero-subtitle">
          EstateFrame Digital is an AI-powered real estate photo and video editing studio with human quality control, serving real estate photographers and agencies across the USA, Canada, UK, Australia, and New Zealand. HDR, virtual staging, twilight, item removal, drone finishing, property film — AI-accelerated for speed, human-verified for consistency and MLS compliance, SLA-backed with credit if we miss.
        </p>
      </section>

      {/* INTRO */}
      <section className="about-intro-split container" data-reveal suppressHydrationWarning>
        <div className="about-intro-text">
          <span className="eyebrow">What the studio is</span>
          <h2 className="section-title">AI efficiency. Human expertise. One accountable partner.</h2>
          <p className="about-body-paragraph">
            <strong>What we do.</strong> AI real estate photo editing with human verification across eight services: single image editing, HDR blending, day-to-dusk conversion, twilight enhancement, AI virtual staging, real estate video editing, item and object removal, and aerial drone photo editing. AI handles the throughput — blends, swaps, staging, masking — and a human editor locks every frame to your stored style preset and the MLS compliance checklist before sign-off. Standard turnaround: 12 hours photos, 24 hours staging, 3–5 days video. Rush under 2 hours. Revisions free within the hour.
          </p>
          <p className="about-body-paragraph">
            <strong>Who we serve.</strong> US real estate photographers shipping MLS folders for Compass, Coldwell Banker, Keller Williams, RE/MAX, Sotheby&apos;s International Realty, and Berkshire Hathaway HomeServices; Canadian photographers on Realtor.ca workflows with Royal LePage, Century 21, Sutton, and Chestnut Park; Australian photographers delivering to realestate.com.au and Domain.com.au for Ray White, LJ Hooker, Harcourts, Belle Property, and McGrath; UK and New Zealand photographers via cloud link. Independent listing photographers, marketing teams, and property developers are all welcome.
          </p>
          <p className="about-body-paragraph">
            <strong>Why AI + human beats AI-only.</strong> AI editing tools are fast, but they drift across a 40-image shoot, flatten every photographer into the same look, and will remove permanent fixtures that your MLS board treats as misrepresentation. Our workflow stores your style preset per photographer, re-applies it on every folder, and routes every frame past a human editor and an MLS compliance checklist. Result: AI-fast turnaround without the AI mistakes that get you delisted.
          </p>
          <p className="about-body-paragraph">
            <strong>The time-zone advantage.</strong> We work from India (IST, UTC+5:30). Our workday overlaps your overnight — files shipped at end-of-shoot on US Pacific, US Eastern, UK, or Australian Eastern time come back as finished folders before your next morning. No night-shift editing your own folder at 2am.
          </p>
          <p className="about-body-paragraph">
            <strong>How we work.</strong> Share RAW files through any cloud link — Drive, Dropbox, WeTransfer, OneDrive, pCloud, MASV. AI pre-passes the folder, a human editor verifies against your style preset and the MLS compliance checklist, and we return print and MLS-ready exports named to your convention. No portal to log into. No new tool to learn. Just the folder, delivered inside the SLA.
          </p>
          <div className="about-pillar-tags">
            <span className="about-tag">USA · Canada · UK · Australia</span>
            <span className="about-tag">AI + human workflow</span>
            <span className="about-tag">Style memory per photographer</span>
            <span className="about-tag">MLS compliance checklist</span>
            <span className="about-tag">12h / 24h SLA with credits</span>
          </div>
        </div>

        <div className="about-intro-image-box">
          <div className="about-image-frame">
            <Image
              src={aboutHeroImg}
              alt="AI real estate photo editing — human-verified interior with balanced window pull and honest tone"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="about-capabilities-strip" data-reveal suppressHydrationWarning>
        <div className="container">
          <div className="section-header-block">
            <div>
              <span className="eyebrow">Capabilities</span>
              <h2 className="section-title">AI real estate editing — stills, space, motion.</h2>
            </div>
            <p className="section-lead-paragraph">
              Three capability areas, one accountable workflow. The AI pre-pass runs the heavy lifting; a human editor
              verifies every output against your style preset and MLS compliance before delivery.
            </p>
          </div>

          <div className="capabilities-triad-grid">
            <div className="capability-column-card">
              <h3>AI still composition</h3>
              <p>
                AI bracket blending, window pulls, perspective correction, and item removal — human-verified for
                straight verticals, honest white balance, and MLS-compliant retouching.
              </p>
              <ul className="capability-bullet-list">
                <li>HDR exposure blending</li>
                <li>Flambient flash + ambient integration</li>
                <li>Verticals, keystone, MLS-safe retouching</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <h3>AI virtual staging &amp; twilight</h3>
              <p>
                AI virtual staging, AI sky swaps, and AI day-to-dusk conversions — human-verified for scale, shadow
                direction, and furniture style that matches the room, not a stock library.
              </p>
              <ul className="capability-bullet-list">
                <li>AI day-to-twilight conversion</li>
                <li>AI virtual staging, photo-real QC</li>
                <li>Floor plans in 2D and 3D</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <h3>Property film</h3>
              <p>
                Gimbal, drone, and agent footage edited into cinematic walkthroughs with AI-assisted color grading and
                human-verified pacing — horizontal 4K and vertical 9:16 delivered from one brief.
              </p>
              <ul className="capability-bullet-list">
                <li>Grade matched to the stills</li>
                <li>Stabilisation and pacing</li>
                <li>Lower-thirds and branded titles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="about-workflow-section container" data-reveal suppressHydrationWarning>
        <div className="workflow-split-layout">
          <div className="workflow-image-container">
            <div className="workflow-photo-frame">
              <Image
                src={aboutWorkflowImg}
                alt="AI + human real estate photo editing workflow — calibrated interior with MLS-safe composition"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="workflow-steps-column">
            <span className="eyebrow">The workflow</span>
            <h2 className="section-title">AI pre-pass. Human QC. Four-stage sign-off.</h2>
            <p className="about-body-paragraph">
              Every real estate photo folder clears four stages before it leaves the studio — AI handles throughput, a
              human editor signs off every stage against your style and MLS compliance.
            </p>

            <div className="workflow-checklist">
              <div className="workflow-point">
                <div className="workflow-point-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>AI pre-pass</strong>
                  <p>HDR blend, sky swap, staging, or item removal run by AI against bracket alignment and dynamic range — in minutes, not hours.</p>
                </div>
              </div>

              <div className="workflow-point">
                <div className="workflow-point-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>Style preset lock</strong>
                  <p>Your stored WB, contrast, sky, and sharpening preset re-applied so every frame in the folder reads like your other work.</p>
                </div>
              </div>

              <div className="workflow-point">
                <div className="workflow-point-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>MLS compliance checklist</strong>
                  <p>A human editor checks every frame against the published rules — no removed permanent fixtures, no banned sky swaps, no misrepresented furnishings.</p>
                </div>
              </div>

              <div className="workflow-point">
                <div className="workflow-point-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>Sign-off and SLA delivery</strong>
                  <p>300 DPI print masters plus web and MLS-ready variants, named to your convention, delivered inside the 12h / 24h SLA — credit if we miss.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="about-collaboration-section" data-reveal suppressHydrationWarning>
        <div className="container">
          <div className="section-header-block text-center-block">
            <span className="eyebrow">Why photographers switch</span>
            <h2 className="section-title">AI-fast. Human-accountable. SLA-backed.</h2>
            <p className="section-subtitle centered">
              A studio that uses AI as a tool — not a replacement — and takes responsibility for every frame it ships.
            </p>
          </div>

          <div className="collaboration-quad-grid">
            <div className="collab-feature-card">
              <ShieldCheck size={24} style={{ color: "var(--bronze)", marginBottom: "18px" }} />
              <h3>Style memory per photographer</h3>
              <p>Your WB, contrast, sky, sharpening, and crop preferences stored and re-applied across every folder. No AI drift mid-shoot.</p>
            </div>

            <div className="collab-feature-card">
              <Clock size={24} style={{ color: "var(--bronze)", marginBottom: "18px" }} />
              <h3>SLA with credits</h3>
              <p>12h photo SLA. 24h staging SLA. 2h rush. Miss the window, your next folder is credited — no dispute.</p>
            </div>

            <div className="collab-feature-card">
              <Users size={24} style={{ color: "var(--bronze)", marginBottom: "18px" }} />
              <h3>Direct line to the editor</h3>
              <p>WhatsApp or phone straight to the human editor working your folder — urgent notes answered by the person doing the edit, not a ticket queue.</p>
            </div>

            <div className="collab-feature-card">
              <Sparkles size={24} style={{ color: "var(--bronze)", marginBottom: "18px" }} />
              <h3>MLS compliance, built in</h3>
              <p>Every frame checked against published MLS rules before sign-off — stays off the delisting line, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta-section" data-reveal suppressHydrationWarning>
        <div className="container final-cta-wrapper">
          <div className="final-cta-content">
            <span className="eyebrow">Begin</span>
            <h2 className="section-title text-light">
              Ready to swap AI-only editing for AI + human verification?
            </h2>
            <p className="final-cta-text">
              Share a brief, a RAW folder, or two sample frames. The studio replies with a direction and a quote,
              usually within the hour.
            </p>
          </div>

          <div className="final-cta-actions">
            <Link href="/contact" className="button button-accent cta-large-btn">
              Commission Studio <ArrowRight size={14} />
            </Link>
            <a href="tel:+916383750315" className="phone-cta-link">
              <Phone size={14} /> Call +91 63837 50315
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  Aperture,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Eye,
  Layers,
  Phone,
  SlidersHorizontal,
} from "lucide-react";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { hdrComparisons } from "@/data/comparisons";

const PAGE_TITLE = "AI HDR Real Estate Photo Editing | EstateFrame";
const PAGE_DESC =
  "AI HDR real estate photo editing with human QC — six real bracketed sets, RAW to delivered. Honest window pulls, no halo. MLS-compliant, 12-hour SLA.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/HDR" },
  openGraph: {
    type: "website",
    url: "https://estateframe.digital/HDR",
    siteName: "EstateFrame Digital",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [{ url: "/images/hdr/hdr-sample-1-after.jpg", width: 1200, height: 800, alt: "Composed HDR interior with honest window pull — EstateFrame Digital" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/hdr/hdr-sample-1-after.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://estateframe.digital/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://estateframe.digital/services" },
    { "@type": "ListItem", position: 3, name: "HDR Studio", item: "https://estateframe.digital/HDR" },
  ],
};

export default function HDRPage() {
  return (
    <div className="page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* HERO */}
      <section className="page-hero-banner container hdr-page-hero">
        <div className="hdr-top-navigation-row">
          <nav className="hdr-breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={12} />
            <Link href="/services">Services</Link>
            <ChevronRight size={12} />
            <span aria-current="page">HDR Studio</span>
          </nav>

          <a href="#samples-grid" className="button button-accent hdr-top-view-btn">
            See the Six Frames <ArrowDown size={13} />
          </a>
        </div>

        <span className="eyebrow">The HDR Studio · AI + Human QC</span>
        <h1 className="page-hero-title">
          AI HDR real estate photo editing — six real brackets.
        </h1>
        <p className="page-hero-subtitle">
          Six multi-exposure sets from real commissions. AI blends 3-to-7 brackets at speed; a human editor verifies
          no haloing, straight verticals, honest window pull, and your stored style preset across the folder. The
          output: HDR frames that hold the window, the room, and the architecture — MLS-safe, 12-hour SLA.
        </p>

        <div className="hero-cta-group" style={{ marginTop: "32px", marginBottom: "20px" }}>
          <a href="#samples-grid" className="button button-accent">
            See the Six Frames <ArrowDown size={14} />
          </a>
          <Link href="/contact" className="button button-secondary">
            Try Two Free HDR Frames <ArrowRight size={14} />
          </Link>
        </div>

        <div className="hero-value-pills" style={{ marginTop: "32px" }}>
          <span className="value-pill">
            <CheckCircle2 size={14} /> AI bracket blending (3-to-7 exposures)
          </span>
          <span className="value-pill">
            <CheckCircle2 size={14} /> Human-verified window pulls
          </span>
          <span className="value-pill">
            <CheckCircle2 size={14} /> Style preset locked across the folder
          </span>
          <span className="value-pill">
            <CheckCircle2 size={14} /> MLS-safe retouching
          </span>
        </div>
      </section>

      {/* FEATURED SLIDER */}
      <section className="container" style={{ marginBottom: "96px" }}>
        <div className="section-header-block">
          <div>
            <span className="eyebrow">Compare</span>
            <h2 className="section-title">Drag the handle. RAW to AI-blended to human-verified.</h2>
          </div>
          <p className="section-lead-paragraph">
            Cycle six real bracket sets from recent US, Canadian, and Australian folders — each one blended by AI,
            then signed off by a human editor against the style preset and MLS compliance checklist.
          </p>
        </div>

        <div className="spotlight-slider-container">
          <BeforeAfterSlider items={hdrComparisons} initialPresetId="hdr-sample-1" showSelector={true} />
        </div>
      </section>

      {/* ALL SIX */}
      <section id="samples-grid" className="container" style={{ marginBottom: "120px", scrollMarginTop: "100px" }}>
        <div className="section-header-block">
          <div>
            <span className="eyebrow">The six frames</span>
            <h2 className="section-title">AI-blended. Human-verified. Not auto-merged.</h2>
          </div>
          <p className="section-lead-paragraph">
            Every set is calibrated for MLS, print editorial, and digital feed — human editor runs the compliance
            checklist before delivery, so the folder ships without the AI mistakes that get agents delisted.
          </p>
        </div>

        <div className="hdr-samples-grid">
          {hdrComparisons.map((sample, idx) => (
            <article key={sample.id} className="hdr-sample-card">
              <div className="hdr-sample-header">
                <div>
                  <span className="hdr-sample-number">Frame {String(idx + 1).padStart(2, "0")}</span>
                  <h3 className="hdr-sample-title">{sample.title}</h3>
                </div>
              </div>
              <p className="hdr-sample-desc">{sample.description}</p>
              <div className="hdr-sample-slider-wrap">
                <BeforeAfterSlider
                  items={[sample]}
                  initialPresetId={sample.id}
                  showSelector={false}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* METHOD */}
      <section className="about-capabilities-strip" style={{ marginBottom: "120px" }}>
        <div className="container">
          <div className="section-header-block text-center-block">
            <span className="eyebrow">Method</span>
            <h2 className="section-title">Why AI + human HDR beats AI-only.</h2>
            <p className="section-lead-paragraph centered">
              AI-only HDR tools flatten the room, halo the window, and drift mid-shoot. Our workflow: AI handles the
              blend at speed, a human editor verifies the result against your style preset and the MLS compliance
              checklist — folder-wide consistency, every time.
            </p>
          </div>

          <div className="capabilities-triad-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <div className="capability-column-card">
              <Aperture size={24} style={{ marginBottom: "22px", color: "var(--bronze)" }} />
              <h3>AI alignment &amp; ghost correction</h3>
              <p>
                AI blends 3-to-7 bracket exposures at sub-pixel precision — foliage drift corrected, handheld shake
                resolved, human editor verifies no doubled edges or ghost artifacts remain.
              </p>
              <ul className="capability-bullet-list">
                <li>3 to 7 bracket merges from your camera</li>
                <li>Handheld stabilisation across exposures</li>
                <li>Curtain and tree ghost removal, human-QC&apos;d</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <Eye size={24} style={{ marginBottom: "22px", color: "var(--bronze)" }} />
              <h3>Honest window pull, no halo</h3>
              <p>
                AI pulls the exterior view through — pool, garden, sky — with outdoor color that reads true; human
                editor verifies no halo rim around the frame and no muddied reflections.
              </p>
              <ul className="capability-bullet-list">
                <li>Reflection and glare softened honestly</li>
                <li>Exterior tone locked to your preset</li>
                <li>Edge definition verified by hand</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <SlidersHorizontal size={24} style={{ marginBottom: "22px", color: "var(--bronze)" }} />
              <h3>Color cast &amp; material truth</h3>
              <p>
                Incandescent yellow and daylight blue cleared across walls, ceilings, and floors; timber, stone, and
                painted surfaces read as themselves. Flambient (ambient + speedlight) blended when both are shot.
              </p>
              <ul className="capability-bullet-list">
                <li>Wood grain and stone held true to colour</li>
                <li>Ceilings held neutral, not green-cast</li>
                <li>Flambient ambient + flash integration</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <Layers size={24} style={{ marginBottom: "22px", color: "var(--bronze)" }} />
              <h3>Line, perspective &amp; MLS QC</h3>
              <p>
                Verticals pulled true, wide-angle distortion cleared, the architecture holds. Human editor runs every
                frame through the MLS compliance checklist before sign-off — no removed permanent fixtures.
              </p>
              <ul className="capability-bullet-list">
                <li>True 90° vertical correction</li>
                <li>Barrel distortion resolved</li>
                <li>MLS permanent-fixture rules checked</li>
              </ul>
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
              Send a bracket set. See the AI + human HDR workflow answer.
            </h2>
            <p className="final-cta-text">
              Share a three- or five-stop bracket from your own camera. We return an AI-blended, human-verified frame
              inside your preferred window — free, so you can judge the output on your own capture before you commission.
            </p>
          </div>

          <div className="final-cta-actions">
            <Link href="/contact" className="button button-accent cta-large-btn">
              Request a Test Frame <ArrowRight size={14} />
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

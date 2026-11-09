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

export const metadata: Metadata = {
  title: "The HDR Studio — Real Brackets, Resolved | EstateFrame Digital",
  description:
    "Six real bracketed sets, raw to resolved. EstateFrame Digital composes HDR interiors by hand — exposure, line, and tone, held in balance.",
};

export default function HDRPage() {
  return (
    <div className="page-wrapper">
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

        <span className="eyebrow">The HDR Studio</span>
        <h1 className="page-hero-title">
          Six real brackets, resolved by hand.
        </h1>
        <p className="page-hero-subtitle">
          Not generated. Not preset. Six actual multi-exposure sets from recent commissions — composed into
          frames that hold the window, the room, and the architecture in a single breath.
        </p>

        <div className="hero-cta-group" style={{ marginTop: "32px", marginBottom: "20px" }}>
          <a href="#samples-grid" className="button button-accent">
            See the Six Frames <ArrowDown size={14} />
          </a>
          <Link href="/contact" className="button button-secondary">
            Request a Test Frame <ArrowRight size={14} />
          </Link>
        </div>

        <div className="hero-value-pills" style={{ marginTop: "32px" }}>
          <span className="value-pill">
            <CheckCircle2 size={14} /> Multi-bracket blending
          </span>
          <span className="value-pill">
            <CheckCircle2 size={14} /> Clean window pulls
          </span>
          <span className="value-pill">
            <CheckCircle2 size={14} /> Honest shadow recovery
          </span>
          <span className="value-pill">
            <CheckCircle2 size={14} /> True architectural line
          </span>
        </div>
      </section>

      {/* FEATURED SLIDER */}
      <section className="container" style={{ marginBottom: "96px" }}>
        <div className="section-header-block">
          <div>
            <span className="eyebrow">Compare</span>
            <h2 className="section-title">Drag the handle. The work speaks.</h2>
          </div>
          <p className="section-lead-paragraph">
            Cycle the six sample sets below — each one a real bracketed capture, composed into a resolved frame.
            No preset, no filter stack.
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
            <h2 className="section-title">Each one composed, not auto-merged.</h2>
          </div>
          <p className="section-lead-paragraph">
            Every set is balanced against the room it was shot in — calibrated for MLS, print editorial, and
            digital feed in equal measure.
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
            <h2 className="section-title">Why the frame holds — and the preset doesn&apos;t.</h2>
            <p className="section-lead-paragraph centered">
              Automated HDR flattens the room and haloes the window. The studio composes by hand — colour science
              in service of aesthetic judgement, not the other way around.
            </p>
          </div>

          <div className="capabilities-triad-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <div className="capability-column-card">
              <Aperture size={24} style={{ marginBottom: "22px", color: "var(--bronze)" }} />
              <h3>Alignment &amp; ghost correction</h3>
              <p>
                Multi-stop brackets aligned at sub-pixel precision — foliage drift corrected, handheld shake resolved, the composition held true.
              </p>
              <ul className="capability-bullet-list">
                <li>3 to 7 bracket merges</li>
                <li>Handheld stabilisation</li>
                <li>Curtain and tree ghost removal</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <Eye size={24} style={{ marginBottom: "22px", color: "var(--bronze)" }} />
              <h3>Window pull, without the halo</h3>
              <p>
                Rather than mask and muddy, the studio pulls the view through — pool, garden, sky — with outdoor colour that feels like outdoor colour.
              </p>
              <ul className="capability-bullet-list">
                <li>Reflection and glare, softened</li>
                <li>Exterior tone kept honest</li>
                <li>Edge definition, clean</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <SlidersHorizontal size={24} style={{ marginBottom: "22px", color: "var(--bronze)" }} />
              <h3>Colour cast &amp; material truth</h3>
              <p>
                Incandescent yellow and daylight blue cleared from walls and ceilings — timber, stone, and painted surfaces read as themselves.
              </p>
              <ul className="capability-bullet-list">
                <li>Wood grain and stone, true</li>
                <li>Ceilings held neutral</li>
                <li>Ambient and flash in harmony</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <Layers size={24} style={{ marginBottom: "22px", color: "var(--bronze)" }} />
              <h3>Line, perspective, geometry</h3>
              <p>
                Vertical line pulled true, wide-angle distortion cleared, the crop composed — the architecture reads.
              </p>
              <ul className="capability-bullet-list">
                <li>True 90° vertical</li>
                <li>Barrel distortion resolved</li>
                <li>High-resolution master export</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta-section" data-reveal>
        <div className="container final-cta-wrapper">
          <div className="final-cta-content">
            <span className="eyebrow">Begin</span>
            <h2 className="section-title text-light">
              Send a bracket. See the studio answer.
            </h2>
            <p className="final-cta-text">
              Share a three- or five-stop set from your own camera. The studio will return a resolved frame — free,
              in your preferred window, so you can read the work on your own capture.
            </p>
          </div>

          <div className="final-cta-actions">
            <Link href="/contact" className="button button-accent cta-large-btn">
              Request a Test Frame <ArrowRight size={14} />
            </Link>
            <a href="tel:+910000000000" className="phone-cta-link">
              <Phone size={14} /> Call +91 00000 00000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Users, Sparkles, Phone } from "lucide-react";

export const metadata = {
  title: "The Studio | EstateFrame Digital",
  description:
    "EstateFrame Digital is a quiet post-production studio for real estate — HDR, twilight, virtual staging, drone, item removal, and property films composed with editorial discipline.",
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
          A quiet partner for the frame that has to earn attention.
        </h1>
        <p className="page-hero-subtitle">
          EstateFrame Digital is a small post-production studio composing for photographers, agencies, and
          developers who treat the image as part of the architecture — not an afterthought.
        </p>
      </section>

      {/* INTRO */}
      <section className="about-intro-split container" data-reveal>
        <div className="about-intro-text">
          <span className="eyebrow">The intent</span>
          <h2 className="section-title">Resolved frames, composed by hand — not rendered by preset.</h2>
          <p className="about-body-paragraph">
            The studio exists because the listing image has become the architecture of the property. Buyers
            decide in a scroll; a careless frame undoes the room. We work behind the lens, resolving exposure,
            line, tone, and composition, so what the viewer sees is the property — not the post.
          </p>
          <p className="about-body-paragraph">
            Every frame is handled by a human editor, calibrated to the camera profile of the photographer who
            shot it. No filter stack, no cookie-cutter preset. The same quiet discipline, from a single luxury hero
            to a hundred-image volume folder.
          </p>
          <div className="about-pillar-tags">
            <span className="about-tag">Natural light</span>
            <span className="about-tag">Honest tone</span>
            <span className="about-tag">Editorial restraint</span>
          </div>
        </div>

        <div className="about-intro-image-box">
          <div className="about-image-frame">
            <Image
              src={aboutHeroImg}
              alt="Resolved interior with balanced window pull and honest architectural tone"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="about-capabilities-strip" data-reveal>
        <div className="container">
          <div className="section-header-block">
            <div>
              <span className="eyebrow">Capabilities</span>
              <h2 className="section-title">The full arc — stills, space, motion.</h2>
            </div>
            <p className="section-lead-paragraph">
              Three disciplines, one hand. The output is consistent whether it ships as a hero image, a vertical
              reel, or a floor plan.
            </p>
          </div>

          <div className="capabilities-triad-grid">
            <div className="capability-column-card">
              <h3>Still composition</h3>
              <p>
                Bracketed exposure blending, window pulls, perspective correction, honest white balance, and
                quiet item removal — for interiors and exteriors that read true to the room.
              </p>
              <ul className="capability-bullet-list">
                <li>HDR exposure blending</li>
                <li>Flash and ambient integration</li>
                <li>Line, keystone, and crop</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <h3>Space &amp; twilight</h3>
              <p>
                Turning empty, unfinished, or daytime scenes into high-converting marketing frames through the
                careful hand of digital composition.
              </p>
              <ul className="capability-bullet-list">
                <li>Day-to-twilight conversion</li>
                <li>Virtual staging, photo-real</li>
                <li>Floor plans in 2D and 3D</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <h3>Property film</h3>
              <p>
                Gimbal, drone, and agent footage composed into cinematic walkthroughs that hold attention across
                a website, a social feed, and a client inbox.
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
      <section className="about-workflow-section container" data-reveal>
        <div className="workflow-split-layout">
          <div className="workflow-image-container">
            <div className="workflow-photo-frame">
              <Image
                src={aboutWorkflowImg}
                alt="Interior frame with calibrated contrast and composed line"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="workflow-steps-column">
            <span className="eyebrow">The method</span>
            <h2 className="section-title">A workflow that reads the same every time.</h2>
            <p className="about-body-paragraph">
              Every frame and every floor plan clears a four-stage check before it leaves the studio.
            </p>

            <div className="workflow-checklist">
              <div className="workflow-point">
                <div className="workflow-point-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>Pre-flight</strong>
                  <p>Bracket alignment, dynamic range reading, and a close read of the photographer&apos;s notes.</p>
                </div>
              </div>

              <div className="workflow-point">
                <div className="workflow-point-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>Colour calibration</strong>
                  <p>White balance harmonised across hallways, living rooms, and exteriors — the room reads as one.</p>
                </div>
              </div>

              <div className="workflow-point">
                <div className="workflow-point-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>Line and perspective</strong>
                  <p>Verticals pulled true, keystone resolved, barrel distortion cleared — the architecture holds.</p>
                </div>
              </div>

              <div className="workflow-point">
                <div className="workflow-point-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>Final review and export</strong>
                  <p>300 DPI print masters alongside web and MLS variants, named to your convention.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="about-collaboration-section" data-reveal>
        <div className="container">
          <div className="section-header-block text-center-block">
            <span className="eyebrow">Why the studio works</span>
            <h2 className="section-title">A disciplined partner — quiet, dependable, calibrated.</h2>
            <p className="section-subtitle centered">
              The studio exists to disappear into your workflow.
            </p>
          </div>

          <div className="collaboration-quad-grid">
            <div className="collab-feature-card">
              <ShieldCheck size={24} style={{ color: "var(--bronze)", marginBottom: "18px" }} />
              <h3>Consistent voice</h3>
              <p>Your colour temperature, contrast, and sky style are stored and applied uniformly across every folder.</p>
            </div>

            <div className="collab-feature-card">
              <Clock size={24} style={{ color: "var(--bronze)", marginBottom: "18px" }} />
              <h3>Dependable return</h3>
              <p>Clear turnarounds, honoured — so listings launch on the schedule your calendar already assumes.</p>
            </div>

            <div className="collab-feature-card">
              <Users size={24} style={{ color: "var(--bronze)", marginBottom: "18px" }} />
              <h3>Direct studio line</h3>
              <p>Phone and WhatsApp straight to the studio — urgent notes answered by the people doing the edit.</p>
            </div>

            <div className="collab-feature-card">
              <Sparkles size={24} style={{ color: "var(--bronze)", marginBottom: "18px" }} />
              <h3>Scale, held steady</h3>
              <p>From a single hero frame to continuous weekly volume — the discipline doesn&apos;t loosen at the thousandth image.</p>
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
              Ready to compose the next folder together?
            </h2>
            <p className="final-cta-text">
              Share a brief or a RAW frame. The studio replies with a direction, often within the hour.
            </p>
          </div>

          <div className="final-cta-actions">
            <Link href="/contact" className="button button-accent cta-large-btn">
              Commission Studio <ArrowRight size={14} />
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

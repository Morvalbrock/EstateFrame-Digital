import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDownRight,
  Clock,
  Phone,
  RotateCcw,
  Sparkles,
  Zap,
} from "lucide-react";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { FAQAccordion } from "@/components/faq-accordion";
import { PortfolioGallery } from "@/components/portfolio-gallery";

const heroImage = "/videos/posters/real-estate-promo-poster.jpg";
const trustImage = "/images/hdr/hdr-sample-4-after.jpg";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section container">
        <div className="hero-headline-block">
          <span className="eyebrow">Editorial post-production · Est. for real estate</span>
          <h1 className="hero-main-title">
            <span>The frame makes</span><br />
            <span>the <em>property.</em></span>
          </h1>
        </div>

        <div className="hero-split-grid">
          <div className="hero-content-column">
            <p className="hero-support-copy">
              EstateFrame Digital is a real estate photo and video editing studio for US, Canadian, and Australian photographers, agencies, and brokerages. We blend HDR brackets, convert daytime exteriors to twilight, virtually stage empty rooms, retouch drone captures, remove items, and cut cinematic property films — all composed by hand, calibrated to your camera profile. Your overnight is our workday: send files at end-of-shoot, get the folder back before your next morning. Rush turnaround under two hours. Free revisions within the hour.
            </p>

            <div className="hero-cta-group">
              <Link className="button button-accent" href="/contact">
                Commission Studio <ArrowRight size={14} />
              </Link>
              <Link className="button button-secondary" href="/portfolio">
                See the Portfolio <ArrowDownRight size={14} />
              </Link>
            </div>

            <div className="hero-value-pills">
              <span className="value-pill">
                <Zap size={14} /> Rush delivery within two hours
              </span>
              <span className="value-pill">
                <RotateCcw size={14} /> Revisions returned in under an hour
              </span>
              <span className="value-pill">
                <Clock size={14} /> Complimentary test frame on request
              </span>
            </div>
          </div>

          <div className="hero-visual-column">
            <div className="hero-photo-frame">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={heroImage}
                className="hero-video-loop"
                aria-label="Contemporary luxury residential property film"
              >
                <source src="/videos/real-estate-promo.mp4" type="video/mp4" />
              </video>
              <div className="hero-visual-tag">
                <Sparkles size={14} />
                <span>Exposure composed. Twilight considered. Nothing hurried.</span>
              </div>
            </div>
            <div className="hero-scroll-indicator">
              <span>Scroll — the studio</span>
              <span aria-hidden="true">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & AUDIENCES */}
      <section className="trust-strip-section" data-reveal>
        <div className="container trust-split-layout">
          <div className="trust-narrative-copy">
            <span className="eyebrow">A quiet partner · US · Canada · Australia</span>
            <h2 className="section-title">A studio built for the way property is sold now.</h2>
            <p>
              We edit for real estate photographers and agencies across the United States, Canada, and Australia — MLS-ready folders for Compass, Coldwell Banker, Keller Williams, and RE/MAX; Realtor.ca-ready exports for Royal LePage, Century 21, and Sutton; realestate.com.au and Domain.com.au-ready frames for Ray White, LJ Hooker, Harcourts, and Belle Property. Eight disciplines, one studio voice, from a single luxury hero frame to a weekly volume pipeline.
            </p>
            <div className="trust-photo-card">
              <Image
                src={trustImage}
                alt="Composed interior with resolved window pull and architectural tone"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="trust-audiences-stack">
            <div className="trust-audience-item">
              <h3>Real-estate photographers</h3>
              <p>
                High-volume bracket blending, window pulling, and tonal calibration — composed to your camera profile
                so you shoot more and finish less.
              </p>
            </div>

            <div className="trust-audience-item">
              <h3>Property agencies</h3>
              <p>
                A consistent editorial voice across every residential and commercial listing — the quiet work that
                separates a brand from a template.
              </p>
            </div>

            <div className="trust-audience-item">
              <h3>Marketing leads</h3>
              <p>
                Publish-ready staging, floor plans, and vertical property films — paced for the channels your buyers
                actually scroll.
              </p>
            </div>

            <div className="trust-audience-item">
              <h3>Developers</h3>
              <p>
                Architectural renderings, furnished spatial compositions, and twilight conversions for pre-sale
                launches that need to look finished months before they are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-overview-section container" id="services" data-reveal>
        <div className="section-header-block">
          <div>
            <span className="eyebrow">The craft</span>
            <h2 className="section-title">
              <span>Eight disciplines,</span><br />
              <span>one considered hand.</span>
            </h2>
          </div>
          <p className="section-lead-paragraph">
            From the single resolved frame to immersive property films, each service is handled by an editor who
            treats every image as if it were going to print.
          </p>
        </div>

        <div className="services-bento-grid" data-reveal data-reveal-stagger>
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`service-bento-card ${index === 0 || index === 6 ? "featured-card" : ""}`}
            >
              <div className="service-bento-media">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="service-bento-body">
                <h3 className="service-bento-title">{service.title}</h3>
                <p className="service-bento-copy">{service.shortDescription}</p>
                <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap", marginTop: "auto" }}>
                  <Link
                    href={`/services#${service.id}`}
                    className="service-explore-action"
                    aria-label={`Open ${service.title}`}
                  >
                    <span>Study the craft</span>
                    <ArrowRight size={13} />
                  </Link>
                  {service.id === "hdr-photo-editing" && (
                    <Link
                      href="/HDR"
                      className="service-explore-action"
                      aria-label="Enter the HDR studio"
                    >
                      <span>Enter HDR studio</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="transformation-section" id="comparison" data-reveal>
        <div className="container transformation-grid">
          <div className="transformation-copy-column">
            <span className="eyebrow">Before / After</span>
            <h2 className="section-title text-light">The difference is in the restraint.</h2>
            <p className="transformation-lead-text">
              Drag the handle. You&apos;re seeing the untouched capture against the finished frame — the same
              composition, calibrated for tone, line, and light. No filter stack. No preset.
            </p>

            <div className="transformation-perks-list">
              <div className="transformation-perk-item">
                <span className="perk-bullet" />
                <span>Exposure composed across window and interior, without halo</span>
              </div>
              <div className="transformation-perk-item">
                <span className="perk-bullet" />
                <span>Dusk skies and warm architectural light, held in balance</span>
              </div>
              <div className="transformation-perk-item">
                <span className="perk-bullet" />
                <span>Virtually furnished rooms that read as photographed, not rendered</span>
              </div>
            </div>

            <div className="transformation-cta-wrap" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link className="button button-accent" href="/HDR">
                Enter HDR Studio <ArrowRight size={14} />
              </Link>
              <Link className="button button-secondary" href="/contact">
                Commission a Frame <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="transformation-widget-column">
            <BeforeAfterSlider initialPresetId="hdr" showSelector={true} />
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="featured-portfolio-section container" id="portfolio" data-reveal>
        <div className="section-header-block">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title">A quiet catalog of composed frames.</h2>
          </div>
          <p className="section-lead-paragraph">
            A rotating cut of recent studio work — interiors, exteriors, staging, and film. Press any frame to open
            the before and after.
          </p>
        </div>

        <PortfolioGallery />
      </section>

      {/* WHY US */}
      <section className="why-us-section" data-reveal>
        <div className="container why-us-split-layout">
          <div className="why-us-lead-box">
            <span className="eyebrow">Working with the studio</span>
            <h2 className="section-title">A disciplined pipeline. Built around yours.</h2>
            <p>
              The studio exists to disappear into your workflow — predictable file naming, a known turnaround,
              edits returned in the formats your MLS, website, and social already expect. The quiet work is the point.
            </p>
            <Link href="/contact" className="button button-primary">
              Discuss a Pipeline <ArrowRight size={14} />
            </Link>
          </div>

          <div className="why-us-benefits-matrix">
            <div className="why-benefit-item">
              <h3 className="why-benefit-title">Two-hour rush delivery</h3>
              <p className="why-benefit-text">
                When a listing goes live tonight, the studio can turn the hero folder in under 120 minutes — no
                surcharge, no explanation required.
              </p>
            </div>

            <div className="why-benefit-item">
              <h3 className="why-benefit-title">Revisions, inside the hour</h3>
              <p className="why-benefit-text">
                Every note is treated as editorial direction and returned within sixty minutes. Revisions are
                unlimited, and never billed.
              </p>
            </div>

            <div className="why-benefit-item">
              <h3 className="why-benefit-title">A frame on the house</h3>
              <p className="why-benefit-text">
                Send a RAW set with your camera and location notes. We&apos;ll return a finished frame to the exact
                turnaround you request — so you can see the work before you commission it.
              </p>
            </div>

            <div className="why-benefit-item">
              <h3 className="why-benefit-title">Calibrated at scale</h3>
              <p className="why-benefit-text">
                Camera profiles, white-balance targets, and crop ratios stored per client — so your tenth folder
                reads exactly like your first, and your hundredth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-timeline-section container" id="process" data-reveal>
        <div className="section-header-block">
          <div>
            <span className="eyebrow">The arc</span>
            <h2 className="section-title">
              <span>From RAW capture</span><br />
              <span>to published frame.</span>
            </h2>
          </div>
          <p className="section-lead-paragraph">
            Four stages. Nothing hidden, nothing improvised — the pipeline is the product.
          </p>
        </div>

        <div className="process-horizontal-grid" data-reveal data-reveal-stagger>
          <div className="process-stage-item">
            <span className="process-stage-badge">01 — Brief</span>
            <h3 className="process-stage-title">Share the project</h3>
            <p className="process-stage-desc">
              Tell the studio what the frame needs to do. Attach camera notes, prior work, or a listing script. Or
              request a complimentary test frame.
            </p>
          </div>

          <div className="process-stage-item">
            <span className="process-stage-badge">02 — Transfer</span>
            <h3 className="process-stage-title">Send the files</h3>
            <p className="process-stage-desc">
              Drop RAW brackets, drone footage, or reference frames via any link you use — Drive, Dropbox,
              WeTransfer, OneDrive.
            </p>
          </div>

          <div className="process-stage-item">
            <span className="process-stage-badge">03 — Composition</span>
            <h3 className="process-stage-title">The quiet work</h3>
            <p className="process-stage-desc">
              Exposure, line, tone, composition. Revisions handled inside the hour — as many as the frame needs.
            </p>
          </div>

          <div className="process-stage-item">
            <span className="process-stage-badge">04 — Delivery</span>
            <h3 className="process-stage-title">Returned, resolved</h3>
            <p className="process-stage-desc">
              Publish-ready assets in print and web resolutions, named to your convention, delivered inside the
              agreed window — two hours for rush folders.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section" data-reveal>
        <div className="container">
          <div className="section-header-block">
            <div>
              <span className="eyebrow">In their words</span>
              <h2 className="section-title">The quiet work tends to speak for itself.</h2>
            </div>
            <p className="section-lead-paragraph">
              Notes from the photographers, agencies, and marketing teams the studio composes for.
            </p>
          </div>

          <div className="testimonials-cards-grid" data-reveal data-reveal-stagger>
            {testimonials.map((t) => (
              <blockquote key={t.name} className="testimonial-quote-card">
                <p className="quote-text">{t.quote}</p>
                <footer className="quote-author-footer">
                  <div className="author-avatar-initials">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="author-details-column">
                    <cite className="author-name">{t.name}</cite>
                    <span className="author-role">{t.role}</span>
                    <span className="author-agency">{t.location}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="testimonials-demo-notice">
            <p>Representative notes — verified references available on commission brief.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section container" id="faq" data-reveal>
        <div className="faq-layout-split">
          <div className="faq-intro-column">
            <span className="eyebrow">Quietly asked</span>
            <h2 className="section-title">Questions, answered plainly.</h2>
            <p className="faq-intro-text">
              The things worth knowing before you commission a frame — turnaround, revisions, file transfer, and
              how the studio keeps your work consistent.
            </p>
            <div className="faq-support-box">
              <span className="faq-box-title">A question not covered here?</span>
              <p>The studio answers directly — no form wall, no routing desk.</p>
              <a href="tel:+916383750315" className="faq-phone-link">
                <Phone size={14} /> +91 63837 50315
              </a>
            </div>
          </div>

          <div className="faq-accordion-column">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta-section" data-reveal>
        <div className="container final-cta-wrapper">
          <div className="final-cta-content">
            <span className="eyebrow">Begin</span>
            <h2 className="section-title text-light">
              Ready to compose a frame that holds the room?
            </h2>
            <p className="final-cta-text">
              Share a brief, or a single RAW file — the studio will return a direction within the hour.
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
    </>
  );
}

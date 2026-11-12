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
import { faqItems } from "@/data/faq";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { FAQAccordion } from "@/components/faq-accordion";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { FreeTrialForm } from "@/components/free-trial-form";

const heroImage = "/videos/posters/real-estate-promo-poster.jpg";
const trustImage = "/images/hdr/hdr-sample-4-after.jpg";

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* FREE-TRIAL RIBBON */}
      <aside className="trial-ribbon" aria-label="Free trial offer">
        <div className="container trial-ribbon-inner">
          <span className="trial-ribbon-dot" aria-hidden="true" />
          <p className="trial-ribbon-copy">
            <strong>Try the studio free.</strong> Two RAW frames — AI-accelerated, human-verified — returned in 12 hours. No card, no subscription.
          </p>
          <a href="#free-trial" className="trial-ribbon-link">
            Claim two free edits <ArrowRight size={13} />
          </a>
        </div>
      </aside>

      {/* HERO */}
      <section className="hero-section container">
        <div className="hero-headline-block">
          <span className="eyebrow">AI real estate photo editing · Human-verified · USA · Canada · UK · Australia</span>
          <h1 className="hero-main-title">
            <span>Every frame in</span><br />
            <span>your <em>style.</em> Every shoot, every time.</span>
          </h1>
        </div>

        <div className="hero-split-grid">
          <div className="hero-content-column">
            <p className="hero-support-copy">
              EstateFrame Digital is an AI real estate photo editing service with human quality control — built for real estate photographers and agencies across the USA, Canada, UK, and Australia. Our AI pre-pass handles HDR blends, sky swaps, virtual staging, item removal, drone finishing, and day-to-dusk conversions at speed. A human editor then locks consistency to your stored style preset, checks every frame against the MLS compliance checklist, and signs it off. Guaranteed 12-hour folders. 24-hour SLA with credit if we miss. Rush under two hours. Free revisions within the hour.
            </p>

            <div className="hero-cta-group">
              <Link className="button button-accent" href="#free-trial">
                Try Two Free Edits <ArrowRight size={14} />
              </Link>
              <Link className="button button-secondary" href="/portfolio">
                See the Portfolio <ArrowDownRight size={14} />
              </Link>
            </div>

            <div className="hero-value-pills">
              <span className="value-pill">
                <Zap size={14} /> Style memory per photographer
              </span>
              <span className="value-pill">
                <RotateCcw size={14} /> MLS compliance checklist on every frame
              </span>
              <span className="value-pill">
                <Clock size={14} /> 12h / 24h SLA — credit if we miss
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
                <span>AI speed. Human-locked consistency. MLS-compliant.</span>
              </div>
            </div>
            <div className="hero-scroll-indicator">
              <span>Scroll — the workflow</span>
              <span aria-hidden="true">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* FREE TRIAL */}
      <section className="free-trial-section" id="free-trial" data-reveal suppressHydrationWarning>
        <div className="container free-trial-layout">
          <div className="free-trial-copy-column">
            <span className="eyebrow">Try the studio — on the house</span>
            <h2 className="section-title text-light">
              <span>Two frames. AI-accelerated.</span><br />
              <span>Human-verified in <em>12 hours.</em></span>
            </h2>
            <p className="free-trial-lead-text">
              Judge the output before you commission. Send two RAW frames and your usual preset — AI handles the heavy lifting, a human editor verifies the result against your style and the MLS compliance checklist. No card, no subscription. If they belong in your listing, we&apos;ll quote your weekly folder in one line.
            </p>

            <ul className="free-trial-benefits">
              <li>
                <span className="benefit-mark" aria-hidden="true">01</span>
                <div>
                  <strong>Any service</strong>
                  <span>HDR blend, day-to-dusk, virtual staging, item removal, drone finish — pick one craft.</span>
                </div>
              </li>
              <li>
                <span className="benefit-mark" aria-hidden="true">02</span>
                <div>
                  <strong>AI-assisted. Human-verified.</strong>
                  <span>AI handles the pre-pass; a human editor locks consistency, straight verticals, and MLS compliance.</span>
                </div>
              </li>
              <li>
                <span className="benefit-mark" aria-hidden="true">03</span>
                <div>
                  <strong>Back in 12 hours — SLA-backed</strong>
                  <span>Miss the window, get credit on your next folder. Revisions inside the hour.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="free-trial-form-column">
            <FreeTrialForm />
          </div>
        </div>
      </section>

      {/* TRUST & AUDIENCES */}
      <section className="trust-strip-section" data-reveal suppressHydrationWarning>
        <div className="container trust-split-layout">
          <div className="trust-narrative-copy">
            <span className="eyebrow">AI-powered editing · Human QC · USA · Canada · UK · Australia</span>
            <h2 className="section-title">Built for the AI era — without the AI mistakes.</h2>
            <p>
              Pure AI editing drifts across a 40-image shoot, crops out permanent fixtures that break MLS rules, and flattens every photographer into the same look. <Link href="/about">EstateFrame Digital</Link> uses AI for what it&apos;s good at — speed on HDR blends, sky swaps, virtual staging, and item removal — then a human editor locks your stored style preset across the folder and runs every frame through an MLS compliance checklist. The result: AI-fast turnaround on real estate photo editing for Compass, Coldwell Banker, Keller Williams, RE/MAX, Royal LePage, Century 21, Ray White, LJ Hooker, Harcourts, and independent photographers across USA, Canada, UK, Australia, and New Zealand.
            </p>
            <div className="trust-photo-card">
              <Image
                src={trustImage}
                alt="AI real estate photo editing output with human-verified window pull and MLS-compliant frame"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="trust-audiences-stack">
            <div className="trust-audience-item">
              <h3>Real estate photographers</h3>
              <p>
                High-volume HDR blending, window pulls, and style-consistent output — AI handles throughput, a human
                editor keeps your look identical from the first folder to the hundredth.
              </p>
            </div>

            <div className="trust-audience-item">
              <h3>Property agencies &amp; brokerages</h3>
              <p>
                MLS-compliant frames across every residential and commercial listing — no removed fixtures, no banned
                sky swaps, no drift between agents. One brand voice, locked.
              </p>
            </div>

            <div className="trust-audience-item">
              <h3>Marketing leads</h3>
              <p>
                AI virtual staging, floor plans, and vertical property films verified by human QC before they publish —
                paced for the channels your buyers actually scroll.
              </p>
            </div>

            <div className="trust-audience-item">
              <h3>Developers</h3>
              <p>
                AI-accelerated day-to-dusk conversions, furnished spatial compositions, and twilight hero frames for
                pre-sale launches that need to look finished months before they are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-overview-section container" id="services" data-reveal suppressHydrationWarning>
        <div className="section-header-block">
          <div>
            <span className="eyebrow">The services</span>
            <h2 className="section-title">
              <span>Eight real estate editing services.</span><br />
              <span>AI speed. One consistent voice.</span>
            </h2>
          </div>
          <p className="section-lead-paragraph">
            From single-image corrections to AI virtual staging and cinematic property film — every service runs through
            the same AI pre-pass, the same human QC, and the same MLS compliance checklist before it ships.
          </p>
        </div>

        <div className="services-bento-grid" data-reveal data-reveal-stagger suppressHydrationWarning>
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
                    <span>See the workflow</span>
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
      <section className="transformation-section" id="comparison" data-reveal suppressHydrationWarning>
        <div className="container transformation-grid">
          <div className="transformation-copy-column">
            <span className="eyebrow">Before / After</span>
            <h2 className="section-title text-light">The difference AI-only editing can&apos;t make.</h2>
            <p className="transformation-lead-text">
              Drag the handle. You&apos;re seeing the untouched RAW against a frame that ran through our AI pre-pass and
              a human verification pass — straight verticals, honest window pull, MLS-safe composition, locked to your
              style preset. No halo. No inconsistent drift across the folder.
            </p>

            <div className="transformation-perks-list">
              <div className="transformation-perk-item">
                <span className="perk-bullet" />
                <span>HDR window pull across the folder — same exposure, every frame</span>
              </div>
              <div className="transformation-perk-item">
                <span className="perk-bullet" />
                <span>MLS-compliant sky, facade, and dusk lighting — no banned swaps</span>
              </div>
              <div className="transformation-perk-item">
                <span className="perk-bullet" />
                <span>AI virtual staging that passes human QC — shadows, scale, style verified</span>
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
      <section className="featured-portfolio-section container" id="portfolio" data-reveal suppressHydrationWarning>
        <div className="section-header-block">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title">Real estate frames, AI-accelerated, human-verified.</h2>
          </div>
          <p className="section-lead-paragraph">
            A rotating cut of recent folders — interiors, exteriors, virtual staging, twilight conversions, and property
            film. Press any frame to open the RAW-to-delivered comparison.
          </p>
        </div>

        <PortfolioGallery />
      </section>

      {/* WHY US */}
      <section className="why-us-section" data-reveal suppressHydrationWarning>
        <div className="container why-us-split-layout">
          <div className="why-us-lead-box">
            <span className="eyebrow">Why AI + human beats AI-only</span>
            <h2 className="section-title">AI editing without the AI mistakes.</h2>
            <p>
              Pure AI editing tools flatten every photographer into the same look, drift mid-shoot, and will cheerfully
              remove a ceiling fan or window grille that your local MLS lists as a permanent fixture. Our workflow stores
              your style preset per photographer, re-applies it on every folder, and routes every frame past a human
              editor and an MLS compliance checklist before delivery. Predictable file names. Guaranteed SLA. Credit if we miss.
            </p>
            <Link href="/contact" className="button button-primary">
              Discuss a Pipeline <ArrowRight size={14} />
            </Link>
          </div>

          <div className="why-us-benefits-matrix">
            <div className="why-benefit-item">
              <h3 className="why-benefit-title">Style memory per photographer</h3>
              <p className="why-benefit-text">
                We onboard with 15–20 of your finished edits and store your look — WB, contrast, sky, sharpening, crop.
                Every folder after that ships in your style, not the generic Zillow look.
              </p>
            </div>

            <div className="why-benefit-item">
              <h3 className="why-benefit-title">MLS compliance checklist</h3>
              <p className="why-benefit-text">
                A human editor runs every frame against the published MLS rules — no removed permanent fixtures, no
                banned sky manipulation, no misrepresented furnishings. You stay off the delisting line.
              </p>
            </div>

            <div className="why-benefit-item">
              <h3 className="why-benefit-title">12h / 24h SLA with credits</h3>
              <p className="why-benefit-text">
                12-hour delivery on photo folders, 24 hours on virtual staging, 2-hour rush on hero frames. Miss the
                SLA, your next folder is credited. Revisions free within the hour.
              </p>
            </div>

            <div className="why-benefit-item">
              <h3 className="why-benefit-title">Workflow integration</h3>
              <p className="why-benefit-text">
                Drive, Dropbox, WeTransfer, OneDrive, pCloud, MASV — send the folder however you work now. No portal to
                log into, no new tool to learn. Deliveries come back named to your convention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-timeline-section container" id="process" data-reveal suppressHydrationWarning>
        <div className="section-header-block">
          <div>
            <span className="eyebrow">The workflow</span>
            <h2 className="section-title">
              <span>From RAW to delivered folder</span><br />
              <span>— AI speed, human-verified.</span>
            </h2>
          </div>
          <p className="section-lead-paragraph">
            Four stages. AI handles throughput; a human editor signs off. Nothing hidden — the pipeline is the product.
          </p>
        </div>

        <div className="process-horizontal-grid" data-reveal data-reveal-stagger suppressHydrationWarning>
          <div className="process-stage-item">
            <span className="process-stage-badge">01 — Style memory</span>
            <h3 className="process-stage-title">Onboard your look</h3>
            <p className="process-stage-desc">
              Share 15–20 of your finished edits. We extract your WB, contrast, sky, sharpening, and crop preferences
              into a stored style preset that our workflow re-applies on every future folder.
            </p>
          </div>

          <div className="process-stage-item">
            <span className="process-stage-badge">02 — Transfer</span>
            <h3 className="process-stage-title">Send the RAW folder</h3>
            <p className="process-stage-desc">
              Drop RAW brackets, drone captures, or empty rooms via any cloud link — Drive, Dropbox, WeTransfer,
              OneDrive, pCloud, MASV. Confirmation inside an hour.
            </p>
          </div>

          <div className="process-stage-item">
            <span className="process-stage-badge">03 — AI + Human QC</span>
            <h3 className="process-stage-title">AI pre-pass, human verify</h3>
            <p className="process-stage-desc">
              AI handles HDR blends, sky swaps, staging, and item removal. A human editor locks your style preset,
              straightens verticals, and runs every frame against the MLS compliance checklist before sign-off.
            </p>
          </div>

          <div className="process-stage-item">
            <span className="process-stage-badge">04 — Delivery + SLA</span>
            <h3 className="process-stage-title">Returned inside the SLA</h3>
            <p className="process-stage-desc">
              Print and web masters, named to your convention, delivered inside 12h / 24h — 2h for rush hero frames.
              Miss the SLA, your next folder is credited. Revisions free within the hour.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section" data-reveal suppressHydrationWarning>
        <div className="container">
          <div className="section-header-block">
            <div>
              <span className="eyebrow">In their words</span>
              <h2 className="section-title">Photographers who&apos;ve stopped firefighting their editing.</h2>
            </div>
            <p className="section-lead-paragraph">
              Notes from US, Canadian, UK, and Australian real estate photographers and agencies on the AI + human workflow.
            </p>
          </div>

          <div className="testimonials-cards-grid" data-reveal data-reveal-stagger suppressHydrationWarning>
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
      <section className="faq-section container" id="faq" data-reveal suppressHydrationWarning>
        <div className="faq-layout-split">
          <div className="faq-intro-column">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Questions, answered plainly.</h2>
            <p className="faq-intro-text">
              How the AI + human workflow works, what style memory stores, how MLS compliance is verified, SLA credit
              terms, and the stack of file formats and cloud links we accept.
            </p>
            <div className="faq-support-box">
              <span className="faq-box-title">A question not covered here?</span>
              <p>Studio answers directly — no form wall, no routing desk.</p>
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
      <section className="final-cta-section" data-reveal suppressHydrationWarning>
        <div className="container final-cta-wrapper">
          <div className="final-cta-content">
            <span className="eyebrow">Begin</span>
            <h2 className="section-title text-light">
              Try AI real estate photo editing with human QC — free, on two RAW frames.
            </h2>
            <p className="final-cta-text">
              Send two RAW frames and the preset you shoot with. We&apos;ll return them AI-accelerated and
              human-verified in 12 hours — judge the output on your own camera profile before you commission a folder.
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

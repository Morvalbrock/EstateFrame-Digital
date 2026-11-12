import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { ServiceVideoPlayer } from "@/components/service-video-player";
import {
  comparisons,
  hdrComparisons,
  twilightComparisons,
  stagingComparisons,
} from "@/data/comparisons";

const PAGE_TITLE = "AI Real Estate Photo Editing Services | EstateFrame";
const PAGE_DESC =
  "AI real estate photo editing services with human QC — HDR, virtual staging, twilight, drone, item removal, property film. MLS-compliant. 12-hour SLA.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "https://estateframe.digital/services",
    siteName: "EstateFrame Digital",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [{ url: "/images/EstateFrame_logo.png", width: 1024, height: 1024, alt: "EstateFrame Digital studio mark" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/EstateFrame_logo.png"],
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": services.map((service) => ({
    "@type": "Service",
    "@id": `https://estateframe.digital/services#${service.id}`,
    name: service.title,
    serviceType: service.title,
    description: service.fullDescription,
    provider: { "@id": "https://estateframe.digital/#studio" },
    areaServed: { "@type": "Place", name: "Worldwide" },
    url: `https://estateframe.digital/services#${service.id}`,
  })),
};

const comparisonPresetMap: Record<string, string> = {
  "single-image": "single-image",
  "hdr-photo-editing": "hdr-sample-1",
  "day-to-night": "day-to-night",
  "twilight": "twilight",
  "virtual-staging": "staging",
  "item-removal": "item-removal",
  "aerial-drone": "aerial",
};

export default function ServicesPage() {
  return (
    <div className="page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {/* HERO */}
      <section className="page-hero-banner container">
        <span className="eyebrow">AI real estate photo editing services</span>
        <h1 className="page-hero-title">
          Eight AI-powered editing services. One human sign-off.
        </h1>
        <p className="page-hero-subtitle">
          AI real estate photo editing for photographers and agencies — HDR blending, single image editing, day-to-dusk,
          twilight, AI virtual staging, property film, item removal, aerial drone. Every service runs through the same
          workflow: AI pre-pass for speed, human editor for style-memory and MLS compliance, SLA-backed delivery.
        </p>

        <div className="hero-value-pills" style={{ marginTop: "40px" }}>
          <span className="value-pill"><CheckCircle2 size={14} /> Single Image Editing</span>
          <span className="value-pill"><CheckCircle2 size={14} /> HDR Blending</span>
          <span className="value-pill"><CheckCircle2 size={14} /> Day to Dusk</span>
          <span className="value-pill"><CheckCircle2 size={14} /> Twilight</span>
          <span className="value-pill"><CheckCircle2 size={14} /> AI Virtual Staging</span>
          <span className="value-pill"><CheckCircle2 size={14} /> Property Films</span>
          <span className="value-pill"><CheckCircle2 size={14} /> Item Removal</span>
          <span className="value-pill"><CheckCircle2 size={14} /> Aerial Drone</span>
        </div>

        <div
          className="service-guarantee-banner"
          style={{
            marginTop: "48px",
            padding: "22px 28px",
            background: "var(--bg-soft)",
            border: "1px solid var(--line)",
            borderLeft: "2px solid var(--bronze)",
            borderRadius: "var(--radius-sm)",
            color: "var(--ink-soft)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: "28px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              <strong style={{ color: "var(--bronze)", fontWeight: 500 }}>SLA</strong> — 12h / 24h with credit
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              <strong style={{ color: "var(--bronze)", fontWeight: 500 }}>Revisions</strong> — free, within an hour
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              <strong style={{ color: "var(--bronze)", fontWeight: 500 }}>MLS QC</strong> — on every frame
            </span>
          </div>
          <Link href="/contact" className="button button-accent" style={{ padding: "11px 22px" }}>
            Request a Test Frame <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* DETAILED FLOW */}
      <section className="services-detailed-flow container">
        {services.map((service, index) => {
          const isEven = index % 2 === 1;
          const comparisonPresetId = comparisonPresetMap[service.id];

          return (
            <article
              key={service.id}
              id={service.id}
              className={`service-detail-section ${isEven ? "reverse-layout" : ""}`}
              data-reveal
              suppressHydrationWarning
            >
              {service.id === "hdr-photo-editing" && (
                <div className="hdr-service-top-strip">
                  <div className="hdr-top-badge-group">
                    <span className="about-tag">
                      <Sparkles size={13} /> The HDR Studio
                    </span>
                    <span className="hdr-top-subtext">
                      Six real bracketed sets — RAW to AI-blended to human-verified.
                    </span>
                  </div>
                  <Link href="/HDR" className="button button-accent hdr-top-prominent-btn">
                    Enter HDR Studio <ArrowRight size={14} />
                  </Link>
                </div>
              )}

              <div className="service-media-pane">
                {service.id === "video-editing" ? (
                  <div className="service-embedded-slider">
                    <ServiceVideoPlayer />
                  </div>
                ) : comparisonPresetId ? (
                  <div className="service-embedded-slider">
                    <BeforeAfterSlider
                      initialPresetId={
                        service.id === "day-to-night" || service.id === "twilight"
                          ? "twilight-sample-1"
                          : service.id === "virtual-staging"
                          ? "staging-sample-1"
                          : comparisonPresetId
                      }
                      items={
                        service.id === "hdr-photo-editing"
                          ? hdrComparisons
                          : service.id === "day-to-night" || service.id === "twilight"
                          ? twilightComparisons
                          : service.id === "virtual-staging"
                          ? stagingComparisons
                          : comparisons.filter((c) => c.id === comparisonPresetId)
                      }
                      showSelector={
                        service.id === "hdr-photo-editing" ||
                        service.id === "day-to-night" ||
                        service.id === "twilight" ||
                        service.id === "virtual-staging"
                      }
                    />
                  </div>
                ) : (
                  <div className="service-large-photo">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="service-content-pane">
                <div className="service-content-header-row">
                  <span className="about-tag">
                    № {String(index + 1).padStart(2, "0")}
                  </span>
                  {service.id === "hdr-photo-editing" && (
                    <Link href="/HDR" className="hdr-top-link-chip">
                      Enter HDR Studio →
                    </Link>
                  )}
                </div>
                <h2 className="service-headline">{service.title}</h2>
                <p className="service-summary-text">{service.shortDescription}</p>
                <p className="service-extended-text">{service.fullDescription}</p>

                <div className="service-benefits-group">
                  <span className="benefits-group-title">What&apos;s included</span>
                  <ul className="benefits-checklist">
                    {service.benefits.map((benefit) => (
                      <li key={benefit}>
                        <CheckCircle2 size={15} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-cta-row" style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="button button-accent">
                    Commission {service.title} <ArrowRight size={14} />
                  </Link>
                  {service.id === "hdr-photo-editing" && (
                    <Link href="/HDR" className="button button-secondary">
                      Enter HDR Studio <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* CTA */}
      <section className="final-cta-section" data-reveal suppressHydrationWarning>
        <div className="container final-cta-wrapper">
          <div className="final-cta-content">
            <span className="eyebrow">Begin</span>
            <h2 className="section-title text-light">
              Ready to put the AI + human workflow on your next folder?
            </h2>
            <p className="final-cta-text">
              Share a brief, a RAW set, or two sample frames. A direction and a quote return within the hour — and
              two edits run free on the house.
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

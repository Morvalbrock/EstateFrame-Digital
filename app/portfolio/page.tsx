import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { BeforeAfterSlider } from "@/components/before-after-slider";

const PAGE_TITLE = "Real Estate Editing Portfolio — HDR, Twilight, Staging | EstateFrame Digital";
const PAGE_DESC =
  "A quiet catalog of composed frames across HDR interiors, twilight exteriors, virtual staging, item removal, and property film. Selected work from EstateFrame Digital.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    type: "website",
    url: "https://estateframe.digital/portfolio",
    siteName: "EstateFrame Digital",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [{ url: "/images/hdr/hdr-sample-4-after.jpg", width: 1200, height: 800, alt: "Composed interior from the EstateFrame Digital portfolio" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/hdr/hdr-sample-4-after.jpg"],
  },
};

export default function PortfolioPage() {
  return (
    <div className="page-wrapper">
      {/* HERO */}
      <section className="page-hero-banner container">
        <span className="eyebrow">Selected work</span>
        <h1 className="page-hero-title">
          A quiet catalog of composed frames.
        </h1>
        <p className="page-hero-subtitle">
          A rotating cut from across the studio&apos;s disciplines. Filter by craft, drag the comparison to see the
          before, and open any card for a closer look at the resolved frame.
        </p>
      </section>

      {/* COMPARISON SPOTLIGHT */}
      <section className="portfolio-transformation-spotlight container" data-reveal>
        <div className="spotlight-header">
          <span className="eyebrow">Compare</span>
          <h2 className="section-title">Drag the handle. Look at the restraint.</h2>
          <p className="section-lead-paragraph">
            The studio does not use filters or presets. Each frame is composed to the architecture of the room
            it lives in — exposure, line, light.
          </p>
        </div>

        <div className="spotlight-slider-container">
          <BeforeAfterSlider initialPresetId="hdr" showSelector={true} />
        </div>
      </section>

      {/* GALLERY */}
      <section className="portfolio-gallery-section container" data-reveal>
        <div className="gallery-header-row">
          <div>
            <span className="eyebrow">By craft</span>
            <h2 className="section-title">The catalog.</h2>
          </div>
          <p className="gallery-disclaimer-note">
            Representative studio work — individual client frames available under commission brief.
          </p>
        </div>

        <PortfolioGallery />
      </section>

      {/* CTA */}
      <section className="final-cta-section" data-reveal>
        <div className="container final-cta-wrapper">
          <div className="final-cta-content">
            <span className="eyebrow">Begin</span>
            <h2 className="section-title text-light">
              Have a frame you want the studio to answer?
            </h2>
            <p className="final-cta-text">
              Send a RAW or a reference. The studio will return a direction within the hour.
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

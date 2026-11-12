import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { BeforeAfterSlider } from "@/components/before-after-slider";

const PAGE_TITLE = "Portfolio — AI Real Estate Photo Editing";
const PAGE_DESC =
  "Selected real estate photo editing work — AI-accelerated, human-verified. HDR interiors, twilight exteriors, AI virtual staging, item removal, property film.";

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
        <span className="eyebrow">Selected work · AI-accelerated · Human-verified</span>
        <h1 className="page-hero-title">
          AI real estate photo editing, by the folder.
        </h1>
        <p className="page-hero-subtitle">
          A rotating cut of recent folders across HDR blending, AI virtual staging, day-to-dusk, twilight, item
          removal, and drone finishing. Filter by service, drag the handle to see the RAW, and open any frame to read
          what the AI pre-pass handled and what human QC verified.
        </p>
      </section>

      {/* COMPARISON SPOTLIGHT */}
      <section className="portfolio-transformation-spotlight container" data-reveal suppressHydrationWarning>
        <div className="spotlight-header">
          <span className="eyebrow">Compare</span>
          <h2 className="section-title">RAW on the left. AI-blended, human-verified on the right.</h2>
          <p className="section-lead-paragraph">
            Every frame runs through the same workflow — AI pre-pass for speed, a human editor for style preset
            lock and MLS compliance. No generic filter stack. No preset drift across the folder.
          </p>
        </div>

        <div className="spotlight-slider-container">
          <BeforeAfterSlider initialPresetId="hdr" showSelector={true} />
        </div>
      </section>

      {/* GALLERY */}
      <section className="portfolio-gallery-section container" data-reveal suppressHydrationWarning>
        <div className="gallery-header-row">
          <div>
            <span className="eyebrow">By service</span>
            <h2 className="section-title">The catalog.</h2>
          </div>
          <p className="gallery-disclaimer-note">
            Representative studio work — named client references available on commission brief.
          </p>
        </div>

        <PortfolioGallery />
      </section>

      {/* CTA */}
      <section className="final-cta-section" data-reveal suppressHydrationWarning>
        <div className="container final-cta-wrapper">
          <div className="final-cta-content">
            <span className="eyebrow">Begin</span>
            <h2 className="section-title text-light">
              Have a folder you want to put on the AI + human workflow?
            </h2>
            <p className="final-cta-text">
              Send two RAW frames and the preset you shoot with. The studio returns them AI-accelerated and
              human-verified in 12 hours — no card, no subscription.
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

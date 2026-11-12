import {
  Phone,
  MessageSquare,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Zap,
  RotateCcw,
  Clock,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const PAGE_TITLE = "Contact — AI Real Estate Photo Editing";
const PAGE_DESC =
  "Commission AI real estate photo editing with human QC — HDR, virtual staging, twilight, drone, property film. 12h SLA, 2h rush, two free sample frames.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "https://estateframe.digital/contact",
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

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      {/* HERO */}
      <section className="page-hero-banner container">
        <span className="eyebrow">Commission · AI real estate photo editing · Human QC</span>
        <h1 className="page-hero-title">
          Share a folder. Try two frames free.
        </h1>
        <p className="page-hero-subtitle">
          Send two RAW frames and the preset you shoot with. We return them AI-accelerated and human-verified in
          12 hours — no card, no subscription. One hero image, a full folder, or an ongoing pipeline for your
          agency — a reply with a quote and a direction, usually within the hour.
        </p>
      </section>

      {/* MAIN */}
      <section className="contact-main-grid container" data-reveal suppressHydrationWarning>
        {/* LEFT: DETAILS */}
        <div className="contact-details-column">
          <div className="contact-card-surface">
            <span className="eyebrow">Direct lines</span>
            <h2 className="contact-section-heading">Reach the human editor directly.</h2>
            <p className="contact-intro-text">
              No form queue, no routing desk. The editor working your folder answers directly — phone, WhatsApp, or email.
            </p>

            <div className="contact-buttons-stack">
              <a href="tel:+916383750315" className="direct-contact-tile">
                <span className="tile-icon-circle">
                  <Phone size={18} />
                </span>
                <span className="tile-text-group">
                  <small className="tile-label">Studio line</small>
                  <strong className="tile-value">+91 63837 50315</strong>
                </span>
              </a>

              <a
                href="https://wa.me/916383750315"
                target="_blank"
                rel="noreferrer"
                className="direct-contact-tile whatsapp-tile"
              >
                <span className="tile-icon-circle">
                  <MessageSquare size={18} />
                </span>
                <span className="tile-text-group">
                  <small className="tile-label">WhatsApp</small>
                  <strong className="tile-value">Begin a conversation</strong>
                </span>
              </a>

              <a href="mailto:agilansr222@gmail.com" className="direct-contact-tile">
                <span className="tile-icon-circle">
                  <Mail size={18} />
                </span>
                <span className="tile-text-group">
                  <small className="tile-label">Email the studio</small>
                  <strong className="tile-value">agilansr222@gmail.com</strong>
                </span>
              </a>
            </div>

            <div className="contact-workflow-perks">
              <span className="perks-heading">What to send for a faster brief</span>
              <ul className="perks-list">
                <li>
                  <CheckCircle2 size={15} />
                  <span>Count of RAW folders and bracketed sets per week</span>
                </li>
                <li>
                  <CheckCircle2 size={15} />
                  <span>Service needed — HDR, virtual staging, twilight, drone, item removal</span>
                </li>
                <li>
                  <CheckCircle2 size={15} />
                  <span>Your style preset (or 15-20 finished edits for onboarding)</span>
                </li>
                <li>
                  <CheckCircle2 size={15} />
                  <span>Cloud link (Drive, Dropbox, WeTransfer, OneDrive)</span>
                </li>
              </ul>
            </div>

            <div className="contact-workflow-perks">
              <span className="perks-heading">The SLA guarantees</span>
              <ul className="perks-list">
                <li>
                  <Zap size={15} />
                  <span>12-hour photo SLA, 2-hour rush — credit on next folder if we miss</span>
                </li>
                <li>
                  <RotateCcw size={15} />
                  <span>Revisions free within the hour — unlimited passes</span>
                </li>
                <li>
                  <Clock size={15} />
                  <span>Two free sample frames on every new account — AI + human verified</span>
                </li>
              </ul>
            </div>

            <div className="contact-security-badge">
              <ShieldCheck size={18} />
              <span>Files encrypted on studio drives, deleted on request. Your style preset and RAW folders never reused, never republished, never cataloged.</span>
            </div>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="contact-form-column">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

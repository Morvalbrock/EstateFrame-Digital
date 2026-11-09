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

const PAGE_TITLE = "Commission the Studio — EstateFrame Digital";
const PAGE_DESC =
  "Commission EstateFrame Digital for HDR, twilight, virtual staging, drone, item removal, and cinematic property film. Rush folders under two hours. Complimentary test frame on request.";

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
        <span className="eyebrow">Commission</span>
        <h1 className="page-hero-title">
          Share a frame. Begin a brief.
        </h1>
        <p className="page-hero-subtitle">
          Tell the studio what the frame needs to do. A single hero image, a full folder, or an ongoing pipeline —
          a reply, often within the hour.
        </p>
      </section>

      {/* MAIN */}
      <section className="contact-main-grid container" data-reveal>
        {/* LEFT: DETAILS */}
        <div className="contact-details-column">
          <div className="contact-card-surface">
            <span className="eyebrow">Direct lines</span>
            <h2 className="contact-section-heading">Reach the studio.</h2>
            <p className="contact-intro-text">
              You will not reach a form queue. The editors at the studio answer directly — phone, WhatsApp, or email.
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
                  <span>Count of RAW or bracketed sets</span>
                </li>
                <li>
                  <CheckCircle2 size={15} />
                  <span>Craft needed — HDR, twilight, staging, film</span>
                </li>
                <li>
                  <CheckCircle2 size={15} />
                  <span>Preferred delivery window</span>
                </li>
                <li>
                  <CheckCircle2 size={15} />
                  <span>Cloud link (Drive, Dropbox, WeTransfer)</span>
                </li>
              </ul>
            </div>

            <div className="contact-workflow-perks">
              <span className="perks-heading">The studio guarantees</span>
              <ul className="perks-list">
                <li>
                  <Zap size={15} />
                  <span>Rush folders returned in under two hours</span>
                </li>
                <li>
                  <RotateCcw size={15} />
                  <span>Revisions resolved inside the hour — unbilled</span>
                </li>
                <li>
                  <Clock size={15} />
                  <span>Complimentary test frame on request</span>
                </li>
              </ul>
            </div>

            <div className="contact-security-badge">
              <ShieldCheck size={18} />
              <span>Every file handled under studio confidentiality — stored encrypted, deleted on request.</span>
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

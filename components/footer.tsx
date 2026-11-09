import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-strip">
          <div className="footer-cta-headline">
            <p className="footer-lead-text">
              A disciplined post-production studio for the properties that deserve more than a listing photo.
            </p>
          </div>
          <div className="footer-top-actions">
            <Link href="/contact" className="button button-accent">
              Begin a Project <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="footer-columns-grid">
          <div className="footer-brand-column">
            <Link className="brand-logo footer-logo" href="/" aria-label="EstateFrame Digital — home">
              <Image
                src="/images/EstateFrame_logo.png"
                alt="EstateFrame Digital"
                width={512}
                height={512}
                className="brand-image footer-brand-image"
              />
            </Link>
            <p className="footer-about-copy">
              Editorial post-production for real estate — HDR, twilight, virtual staging, drone, item removal,
              and cinematic property films — composed with the discipline of a magazine shoot.
            </p>
            <div className="footer-direct-contact">
              <a href="tel:+910000000000" className="footer-contact-item">
                <Phone size={14} />
                <span>+91 00000 00000</span>
              </a>
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noreferrer"
                className="footer-contact-item"
              >
                <MessageSquare size={14} />
                <span>Studio on WhatsApp</span>
              </a>
              <a href="mailto:hello@estateframe.digital" className="footer-contact-item">
                <Mail size={14} />
                <span>hello@estateframe.digital</span>
              </a>
            </div>
          </div>

          <div className="footer-nav-column">
            <span className="footer-column-heading">Navigate</span>
            <ul className="footer-link-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/HDR">HDR Studio</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">The Studio</Link></li>
              <li><Link href="/contact">Commission</Link></li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <span className="footer-column-heading">Craft</span>
            <ul className="footer-link-list">
              <li><Link href="/services#single-image">Single Frame</Link></li>
              <li><Link href="/HDR">HDR Blending</Link></li>
              <li><Link href="/services#day-to-night">Day to Night</Link></li>
              <li><Link href="/services#twilight">Twilight</Link></li>
              <li><Link href="/services#virtual-staging">Virtual Staging</Link></li>
              <li><Link href="/services#video-editing">Property Films</Link></li>
              <li><Link href="/services#item-removal">Item Removal</Link></li>
              <li><Link href="/services#aerial-drone">Aerial</Link></li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <span className="footer-column-heading">Studio</span>
            <p className="footer-detail-note">
              Rush frames returned in under two hours. Revisions resolved inside sixty minutes.
              Scalable from a single hero image to volume agency flow.
            </p>
            <div className="footer-support-hours">
              <span className="status-indicator-dot" />
              <span>Studio open now — Phone &amp; WhatsApp</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p suppressHydrationWarning>© {new Date().getFullYear()} EstateFrame Digital. All rights reserved.</p>
          <div className="footer-legal-links">
            <span className="legal-placeholder-link">Privacy</span>
            <span className="legal-separator">·</span>
            <span className="legal-placeholder-link">Terms</span>
            <span className="legal-separator">·</span>
            <span>EstateFrame Digital Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

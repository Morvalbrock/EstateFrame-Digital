"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/HDR", label: "HDR Studio" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="top-guarantee-strip">
        <div className="container top-guarantee-content">
          <span className="top-guarantee-item">
            <strong>Rush Delivery</strong> — within 2 hours
          </span>
          <span className="strip-dot" aria-hidden="true">•</span>
          <span className="top-guarantee-item">
            <strong>Unlimited Revisions</strong> — free, under 60 minutes
          </span>
          <span className="strip-dot" aria-hidden="true">•</span>
          <span className="top-guarantee-item">
            <strong>Complimentary Test Frame</strong> — on request
          </span>
        </div>
      </div>

      <div className="container header-container">
        <Link
          className="brand-logo"
          href="/"
          aria-label="EstateFrame Digital — home"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/EstateFrame_logo.png"
            alt="EstateFrame Digital"
            width={512}
            height={512}
            priority
            className="brand-image"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href="tel:+916383750315"
            className="header-phone-action"
            aria-label="Direct studio line"
          >
            <Phone size={14} />
            <span>+91 63837 50315</span>
          </a>
          <Link href="/contact" className="button button-accent header-cta">
            Commission Studio
          </Link>
          <button
            type="button"
            className="mobile-toggle"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-drawer" role="dialog" aria-label="Mobile navigation menu">
          <nav className="mobile-drawer-nav">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <Link
              href="/contact"
              className="button button-accent mobile-drawer-btn"
              onClick={() => setIsOpen(false)}
            >
              Commission Studio
            </Link>
            <div className="mobile-drawer-contacts">
              <a href="tel:+916383750315" className="mobile-contact-pill">
                <Phone size={14} /> +91 63837 50315
              </a>
              <a
                href="https://wa.me/916383750315"
                target="_blank"
                rel="noreferrer"
                className="mobile-contact-pill"
              >
                <MessageSquare size={14} /> WhatsApp the Studio
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

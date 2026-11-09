import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BootLoader } from "@/components/boot-loader";
import { ScrollReveal } from "@/components/scroll-reveal";

const SITE_URL = "https://estateframe.digital";
const SITE_NAME = "EstateFrame Digital";
const OG_IMAGE = `${SITE_URL}/images/EstateFrame_logo.png`;
const DESCRIPTION =
  "EstateFrame Digital is a boutique post-production studio for real estate — HDR, twilight, virtual staging, drone, item removal, and cinematic property films composed with editorial discipline.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EstateFrame Digital — Editorial Post-Production for Real Estate",
    template: "%s | EstateFrame Digital",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "EstateFrame Digital — Editorial Post-Production for Real Estate",
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1024, height: 1024, alt: "EstateFrame Digital studio mark" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EstateFrame Digital — Editorial Post-Production for Real Estate",
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
  category: "photography",
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#studio`,
  name: SITE_NAME,
  description: DESCRIPTION,
  url: SITE_URL,
  logo: OG_IMAGE,
  image: OG_IMAGE,
  telephone: "+91 63837 50315",
  email: "agilansr222@gmail.com",
  priceRange: "$$",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "New Zealand" },
    { "@type": "Place", name: "Worldwide" },
  ],
  serviceType: [
    "Real estate photo editing",
    "HDR photo blending",
    "Day-to-night conversion",
    "Twilight photo enhancement",
    "Virtual staging",
    "Real estate video editing",
    "Item and object removal",
    "Aerial and drone photo editing",
  ],
  currenciesAccepted: "USD, CAD, AUD, GBP, NZD, INR",
  paymentAccepted: "Stripe, Wise, PayPal, Bank transfer",
  availableLanguage: ["English"],
  sameAs: [] as string[],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <BootLoader />
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </body>
    </html>
  );
}

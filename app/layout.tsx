import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BootLoader } from "@/components/boot-loader";
import { ScrollReveal } from "@/components/scroll-reveal";

const SITE_URL = "https://estateframe.digital";
const SITE_NAME = "EstateFrame Digital";
const OG_IMAGE = `${SITE_URL}/images/EstateFrame_logo.png`;
const TITLE_DEFAULT =
  "AI Real Estate Photo Editing + Human QC | EstateFrame";
const DESCRIPTION =
  "AI real estate photo editing with human QC — HDR, virtual staging, twilight, drone. 12-hour SLA, MLS-compliant. For USA, Canada, UK, Australia photographers.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: "%s | EstateFrame Digital",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  keywords: [
    "AI real estate photo editing",
    "AI real estate photo editing service",
    "real estate photo editing USA",
    "real estate photo editing Canada",
    "real estate photo editing Australia",
    "MLS-compliant photo editing",
    "AI + human real estate editing",
    "HDR real estate photo editing",
    "virtual staging real estate",
    "real estate photo editing with human QC",
    "twilight real estate photo editing",
    "day-to-dusk real estate editing",
    "real estate drone photo editing",
    "real estate video editing service",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1024, height: 1024, alt: "EstateFrame Digital — AI real estate photo editing with human QC" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
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
    "AI real estate photo editing",
    "AI + human HDR photo editing",
    "MLS-compliant real estate photo editing",
    "Day-to-dusk conversion",
    "Twilight photo enhancement",
    "AI virtual staging with human QC",
    "Real estate video editing",
    "AI item and object removal",
    "Aerial and drone photo editing",
  ],
  slogan: "Every frame in your style. Every shoot, every time.",
  knowsAbout: [
    "AI real estate photo editing workflow",
    "MLS compliance for photo editing (Compass, Coldwell Banker, Keller Williams, RE/MAX)",
    "Realtor.ca photo editing standards",
    "realestate.com.au and Domain.com.au upload specifications",
    "Per-photographer style memory and preset calibration",
    "Flambient flash and ambient exposure blending",
    "HDR bracket blending with window pulls",
    "Virtual staging quality control",
  ],
  paymentAccepted: "Stripe, Wise, PayPal, Bank transfer, USD, CAD, AUD, GBP, NZD, INR",
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
        <Header />
        <ScrollReveal>{children}</ScrollReveal>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </body>
    </html>
  );
}

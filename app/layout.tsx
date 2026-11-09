import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BootLoader } from "@/components/boot-loader";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "EstateFrame Digital — Editorial Post-Production for Real Estate",
  description:
    "EstateFrame Digital is a boutique post-production studio for real estate — HDR, twilight, virtual staging, drone, item removal, and cinematic walkthroughs composed with editorial discipline.",
  metadataBase: new URL("https://estateframe.digital"),
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
      </body>
    </html>
  );
}

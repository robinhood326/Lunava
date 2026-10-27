import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Lunava — Remote U.S. roles for LATAM engineers",
    template: "%s · Lunava",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Lunava",
    "remote software engineer jobs",
    "LATAM software engineers",
    "remote jobs for Latin America developers",
    "U.S. remote engineering jobs",
    "software engineer consulting",
    "nearshore engineers",
    "work for US companies from Latin America",
  ],
  authors: [{ name: "Lunava" }],
  creator: "Lunava",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: "Lunava — Your U.S. remote engineering career starts here.",
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunava — Your U.S. remote engineering career starts here.",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#06070c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} data-scroll-behavior="smooth">
      <body className="min-h-dvh font-sans">
        <div aria-hidden="true" className="scroll-progress" />
        <AmbientBackground />
        <SiteHeader />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

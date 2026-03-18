import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { AgeGate } from "@/components/AgeGate";
import { MobileJoinBar } from "@/components/MobileJoinBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/content/site";
import { SITE_URL_OBJECT } from "@/lib/config";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: SITE_URL_OBJECT,
  title: {
    default: siteConfig.name,
    template: "%s | Druncord",
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Druncord",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="bg-wood font-body text-offwhite antialiased">
        <AgeGate />
        <SiteHeader />
        <div className="flex min-h-screen flex-col">
          <main className="flex-1 pb-24 md:pb-0">{children}</main>
          <SiteFooter />
        </div>
        <MobileJoinBar />
      </body>
    </html>
  );
}

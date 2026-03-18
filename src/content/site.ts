import type { Metadata } from "next";
import { DISCORD_INVITE_URL, SITE_URL } from "@/lib/config";

export const siteConfig = {
  name: "Druncord",
  description:
    "Druncord is an 18+ Discord community built like an online bar: voice-first, adult, social, and open late.",
  shortTagline: "An online bar. 18+ only.",
  discordInviteUrl: DISCORD_INVITE_URL,
  siteUrl: SITE_URL,
  ogImage: "/og-image.png",
  navLinks: [
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/rules", label: "House Rules" },
    { href: "/faq", label: "FAQ" },
  ],
  footerLinks: [
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/rules", label: "House Rules" },
    { href: "/faq", label: "FAQ" },
    { href: "/join", label: "Join" },
  ],
  legalLinks: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const canonical = path === "/" ? siteConfig.siteUrl : `${siteConfig.siteUrl}${path}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
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
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function createBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? siteConfig.siteUrl : `${siteConfig.siteUrl}${item.path}`,
    })),
  };
}

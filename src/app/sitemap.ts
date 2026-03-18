import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

const pages = [
  { url: "", priority: 1.0 },
  { url: "/about", priority: 0.7 },
  { url: "/events", priority: 0.7 },
  { url: "/rules", priority: 0.7 },
  { url: "/faq", priority: 0.8 },
  { url: "/join", priority: 0.9 },
  { url: "/contact", priority: 0.7 },
  { url: "/privacy", priority: 0.7 },
  { url: "/terms", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map((page) => ({
    url: `${siteConfig.siteUrl}${page.url}`,
    lastModified,
    priority: page.priority,
  }));
}

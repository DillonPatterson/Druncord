import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-amber/10 bg-wood-light">
      <div className="section-shell py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="font-display text-3xl text-amber">
              Druncord
            </Link>
            <p className="mt-3 text-sm text-offwhite/70">{siteConfig.shortTagline}</p>
          </div>
          <nav aria-label="Footer navigation">
            <h2 className="text-sm uppercase tracking-[0.2em] text-warmgray">Explore</h2>
            <ul className="mt-4 space-y-3 text-sm text-offwhite/75">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-amber">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Legal navigation">
            <h2 className="text-sm uppercase tracking-[0.2em] text-warmgray">Legal</h2>
            <ul className="mt-4 space-y-3 text-sm text-offwhite/75">
              {siteConfig.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-amber">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-amber/20 pt-6 text-sm text-warmgray">
          © {new Date().getFullYear()} Druncord. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

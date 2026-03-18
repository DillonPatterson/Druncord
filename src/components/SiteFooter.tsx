import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="section-shell flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <Link
            href="/"
            className="font-serif text-xl italic text-text opacity-30 hover:opacity-60"
          >
            Druncord
          </Link>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-dim">
            Online since 2017
          </p>
        </div>

        <nav className="flex gap-16">
          <div>
            <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.15em] text-dim">
              Explore
            </p>
            <ul className="space-y-3">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-[11px] text-sub hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.15em] text-dim">
              Legal
            </p>
            <ul className="space-y-3">
              {siteConfig.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-[11px] text-sub hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="section-shell border-t border-border py-5">
        <p className="font-mono text-[10px] text-dim">
          &copy; {new Date().getFullYear()} Druncord
        </p>
      </div>
    </footer>
  );
}

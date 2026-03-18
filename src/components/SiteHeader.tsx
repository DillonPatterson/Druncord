"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MENU_EVENT } from "@/components/MobileJoinBar";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerClasses =
    scrolled || menuOpen
      ? "bg-bg/95 border-b border-border backdrop-blur"
      : "bg-transparent border-b border-transparent";

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-200 ease-out ${headerClasses}`}>
        <div className="section-shell flex h-20 items-center justify-between gap-6">
          <Link href="/" className="font-serif text-2xl italic text-text">
            Druncord
          </Link>
          <nav className="hidden items-center gap-10 md:flex">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`font-mono text-xs tracking-widest uppercase transition-opacity ${
                    isActive
                      ? "text-text opacity-100"
                      : "text-text opacity-40 hover:opacity-70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="text-text opacity-60 hover:opacity-100 md:hidden"
            onClick={() => {
              const next = !menuOpen;
              setMenuOpen(next);
              window.dispatchEvent(
                new CustomEvent<boolean>(MENU_EVENT, { detail: next }),
              );
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d={menuOpen ? "M6 6L18 18M18 6L6 18" : "M4 7H20M4 12H20M4 17H20"}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-[35] bg-bg transition-opacity duration-200 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-10 px-8">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-10">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => {
                    setMenuOpen(false);
                    window.dispatchEvent(
                      new CustomEvent<boolean>(MENU_EVENT, { detail: false }),
                    );
                  }}
                  className="font-display text-5xl font-black tracking-tight text-text opacity-80 hover:opacity-100"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}

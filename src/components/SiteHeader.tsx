"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { JoinButton } from "@/components/JoinButton";
import { MENU_EVENT } from "@/components/MobileJoinBar";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

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
      ? "bg-wood/95 border-b border-amber/20 backdrop-blur"
      : "bg-transparent border-b border-transparent";

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-200 ease-out ${headerClasses}`}>
        <div className="section-shell flex h-20 items-center justify-between gap-6">
          <Link href="/" className="font-display text-3xl text-amber">
            Druncord
          </Link>
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm ${
                    isActive ? "text-offwhite" : "text-offwhite/70 hover:text-offwhite"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden md:block">
            <JoinButton source="nav" />
          </div>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-amber/20 text-amber md:hidden"
            onClick={() => {
              const next = !menuOpen;
              setMenuOpen(next);
              window.dispatchEvent(
                new CustomEvent<boolean>(MENU_EVENT, { detail: next })
              );
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d={menuOpen ? "M6 6L18 18M18 6L6 18" : "M4 7H20M4 12H20M4 17H20"}
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-[35] bg-wood transition-opacity duration-200 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 pt-28 pb-10">
          <nav aria-label="Mobile navigation" className="flex flex-1 flex-col justify-center gap-8">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`font-display text-4xl ${
                    isActive ? "text-offwhite" : "text-offwhite/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <JoinButton source="mobile-menu" size="large" fullWidth />
        </div>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import type { FaqItem } from "@/content/faq";

type FAQAccordionProps = {
  items: FaqItem[];
  title?: string;
};

export function FAQAccordion({
  items,
  title = "Frequently asked questions.",
}: FAQAccordionProps) {
  const [openId, setOpenId] = useState(items[0]?.id ?? "");

  return (
    <section className="bg-wood py-20 md:py-24">
      <div className="section-shell">
        <div className="max-w-4xl">
          <h2 className="font-display text-4xl text-offwhite md:text-5xl">
            {title}
          </h2>
          <div className="mt-10 divide-y divide-amber/20 rounded-3xl border border-amber/15 bg-wood-light/50">
            {items.map((item) => {
              const isOpen = item.id === openId;
              const panelId = `${item.id}-panel`;

              return (
                <div key={item.id} className="px-6 py-5 md:px-8">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                  >
                    <span className="text-lg font-medium text-offwhite">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-amber transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={panelId}
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-70"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-4 text-base leading-8 text-warmgray">
                        {item.answer}
                      </p>
                      {item.links?.length ? (
                        <div className="mt-4 flex flex-wrap gap-4">
                          {item.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="text-sm font-medium text-amber hover:text-amber-hover"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

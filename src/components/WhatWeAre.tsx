import { homeContent } from "@/content/home";

export function WhatWeAre() {
  return (
    <section className="bg-warm py-24">
      <div className="section-shell">
        <p className="max-w-2xl text-[15px] leading-[1.95] text-sub">
          {homeContent.whatWeAreBody}
        </p>
      </div>
    </section>
  );
}

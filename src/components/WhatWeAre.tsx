import { homeContent } from "@/content/home";

export function WhatWeAre() {
  return (
    <section className="grain bg-wood-light py-20 md:py-24">
      <div className="section-shell">
        <div className="max-w-4xl">
          <h2 className="font-display text-4xl text-offwhite md:text-5xl">
            {homeContent.whatWeAreTitle}
          </h2>
          <p className="mt-6 text-lg leading-9 text-offwhite/82">
            {homeContent.whatWeAreBody}
          </p>
        </div>
      </div>
    </section>
  );
}

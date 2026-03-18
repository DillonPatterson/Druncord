type PageHeroProps = {
  title: string;
  description?: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="grain relative overflow-hidden border-b border-amber/10 bg-wood pt-32 pb-14 md:pt-40 md:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,122,42,0.16),transparent_42%)]" />
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-amber/80">
            Druncord
          </p>
          <h1 className="font-display text-5xl leading-none text-offwhite md:text-7xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-8 text-offwhite/80 md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

type PageHeroProps = {
  title: string;
  description?: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="noise relative overflow-hidden bg-nightgreen pt-36 pb-20 md:pt-44 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[rgba(180,110,10,0.12)] to-transparent"
      />
      <div className="section-shell relative">
        <h1 className="font-display text-[clamp(44px,8vw,80px)] font-black leading-[1.0] tracking-[-0.03em] text-text">
            {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-[15px] leading-[1.85] text-sub">
            {description}
          </p>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
    </section>
  );
}

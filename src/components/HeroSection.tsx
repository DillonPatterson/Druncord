import { JoinButton } from "@/components/JoinButton";
import { homeContent } from "@/content/home";

export function HeroSection() {
  return (
    <section className="grain relative flex min-h-[100dvh] items-center overflow-hidden bg-wood pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(193,122,42,0.12),transparent_44%)]" />
      <div className="section-shell">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex rounded-full border border-amber/30 bg-amber/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-amber">
            {homeContent.hero.eyebrow}
          </div>
          <h1 className="font-display text-5xl leading-none tracking-tight text-offwhite sm:text-6xl md:text-7xl">
            {homeContent.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-offwhite/80 md:text-xl">
            {homeContent.hero.description}
          </p>
          <div className="mt-8">
            <JoinButton source="hero" size="large" />
          </div>
        </div>
      </div>
    </section>
  );
}

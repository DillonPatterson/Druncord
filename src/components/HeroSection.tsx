import { homeContent } from "@/content/home";

export function HeroSection() {
  return (
    <section className="noise relative flex min-h-[100dvh] items-end overflow-hidden bg-nightgreen pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[rgba(180,110,10,0.18)] to-transparent" />
        <div className="absolute bottom-[-60px] left-1/2 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-[rgba(200,130,26,0.13)] blur-3xl" />
      </div>

      <div className="section-shell relative pb-24 pt-8">
        <h1 className="font-display text-[clamp(42px,8vw,80px)] font-black leading-[1.0] tracking-[-0.03em] text-text">
          The largest online bar
        </h1>
        <p className="mb-10 font-serif text-[clamp(42px,8vw,80px)] italic leading-[1.0] text-amber">
          on Discord.
        </p>
        <p className="mb-0 max-w-sm text-[15px] leading-[1.85] text-sub">
          {homeContent.hero.description}
        </p>
      </div>
    </section>
  );
}

import { homeContent } from "@/content/home";

export function VoiceExplainer() {
  return (
    <section className="grain bg-wood py-20 md:py-24">
      <div className="section-shell">
        <div className="surface-card max-w-4xl p-8 md:p-10">
          <h2 className="font-display text-4xl text-offwhite md:text-5xl">
            {homeContent.voiceExplainerTitle}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-offwhite/78">
            {homeContent.voiceExplainerBody}
          </p>
        </div>
      </div>
    </section>
  );
}

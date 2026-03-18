import { JoinButton } from "@/components/JoinButton";
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-warm py-32 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(200,130,26,0.1), transparent 70%)" }}
      />
      <div className="section-shell relative">
        <p className="mb-10 font-serif text-[32px] italic text-text">
          First round is on me.
        </p>
        <JoinButton source="cta" size="large" />
      </div>
    </section>
  );
}

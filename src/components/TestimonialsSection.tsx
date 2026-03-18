import { SHOW_TESTIMONIALS, testimonials } from "@/content/testimonials";

export function TestimonialsSection() {
  if (!SHOW_TESTIMONIALS) {
    return null;
  }

  return (
    <section className="bg-warm py-0 pb-24">
      <div className="section-shell grid grid-cols-1 gap-10 md:grid-cols-2">
        {testimonials.slice(0, 2).map((t, i) => (
          <div
            key={t.username}
            className="border-l-2 pl-6"
            style={{ borderColor: i === 0 ? "var(--amber)" : "rgba(200,130,26,0.22)" }}
          >
            <blockquote className="mb-3 font-serif text-[17px] italic leading-[1.65] text-text">
              "{t.quote}"
            </blockquote>
            <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-sub">
              {t.username}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

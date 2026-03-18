import { SHOW_TESTIMONIALS, testimonials } from "@/content/testimonials";

export function TestimonialsSection() {
  if (!SHOW_TESTIMONIALS) {
    return null;
  }

  return (
    <section className="bg-wood-light py-20 md:py-24">
      <div className="section-shell">
        <div className="mb-10">
          <h2 className="font-display text-4xl text-offwhite md:text-5xl">
            From the regulars.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.slice(0, 4).map((testimonial) => (
            <article key={testimonial.username} className="surface-card p-6 md:p-8">
              <blockquote className="text-lg leading-8 text-offwhite/80">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <p className="mt-5 text-sm uppercase tracking-[0.18em] text-amber/75">
                {testimonial.username}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

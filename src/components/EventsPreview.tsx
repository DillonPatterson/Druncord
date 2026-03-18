import Link from "next/link";
import { events } from "@/content/events";

export function EventsPreview() {
  if (!events.length) {
    return null;
  }

  return (
    <section className="bg-wood py-20 md:py-24">
      <div className="section-shell">
        <div className="mb-10">
          <h2 className="font-display text-4xl text-offwhite md:text-5xl">
            What&apos;s on tonight.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {events.slice(0, 3).map((event) => (
            <article key={event.title} className="surface-card overflow-hidden">
              <div className="h-1 w-full bg-amber/80" />
              <div className="p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber/80">
                  {event.date}
                </p>
                <h3 className="mt-4 font-display text-3xl text-offwhite">
                  {event.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-offwhite/75">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/events" className="text-sm font-medium text-amber hover:text-amber-hover">
            See all events
          </Link>
        </div>
      </div>
    </section>
  );
}

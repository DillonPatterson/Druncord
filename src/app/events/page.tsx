import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { SchemaOrg } from "@/components/SchemaOrg";
import { events } from "@/content/events";
import { createBreadcrumbSchema, createPageMetadata, siteConfig } from "@/content/site";

export const metadata = createPageMetadata({
  title: "What's On at Druncord | Discord Events for Adults",
  description:
    "See recurring nights and upcoming one-off events at Druncord, the 18+ online bar Discord community.",
  path: "/events",
});

const recurringEvents = events.filter((event) => event.recurring);
const upcomingEvents = events.filter((event) => !event.recurring);

const eventSchema = upcomingEvents
  .filter((event) => event.startDate)
  .map((event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: event.startDate,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: `${siteConfig.siteUrl}/join`,
    },
    organizer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
  }));

function EventCard({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <article className="surface-card overflow-hidden">
      <div className="h-1 w-full bg-amber/80" />
      <div className="p-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber/80">{date}</p>
        <h2 className="mt-4 font-display text-3xl text-offwhite">{title}</h2>
        <p className="mt-4 text-base leading-7 text-offwhite/75">{description}</p>
      </div>
    </article>
  );
}

export default function EventsPage() {
  return (
    <>
      <SchemaOrg
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
        ])}
      />
      {eventSchema.length ? <SchemaOrg data={eventSchema} /> : null}
      <PageHero
        title="What's on."
        description="Recurring nights, one-off drop-ins, and the kinds of events that keep the room moving without turning it into a calendar app."
      />
      <section className="bg-wood-light py-16 md:py-20">
        <div className="section-shell space-y-14">
          {recurringEvents.length ? (
            <div>
              <h2 className="font-display text-4xl text-offwhite">Recurring events</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {recurringEvents.map((event) => (
                  <EventCard key={event.title} {...event} />
                ))}
              </div>
            </div>
          ) : null}
          {upcomingEvents.length ? (
            <div>
              <h2 className="font-display text-4xl text-offwhite">Upcoming events</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.title} {...event} />
                ))}
              </div>
            </div>
          ) : null}
          {!events.length ? (
            <p className="text-lg text-offwhite/75">
              Nothing on the books right now. Check back soon.
            </p>
          ) : null}
        </div>
      </section>
      <FinalCTA
        title="Want the easiest way to catch the next one?"
        description="Join the server and walk in when the room starts filling."
        source="events-page"
      />
    </>
  );
}

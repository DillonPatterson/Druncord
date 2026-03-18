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
      <section className="bg-warm py-16 md:py-20">
        <div className="section-shell">
          <p className="max-w-2xl text-[15px] leading-[1.95] text-sub">
            Things happen around holidays, long weekends, and whenever the room
            feels like staying up too late. Join the server if you want to hear
            about it when it happens.
          </p>
        </div>
      </section>
    </>
  );
}

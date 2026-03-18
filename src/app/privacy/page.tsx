import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { SchemaOrg } from "@/components/SchemaOrg";
import { privacyPageContent } from "@/content/pages/privacy";
import { createBreadcrumbSchema, createPageMetadata } from "@/content/site";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Druncord",
  description:
    "Read Druncord's privacy policy covering minimal data collection, site usage, and contact information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <SchemaOrg
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <PageHero title="Privacy Policy" description="Short, readable, and built around minimal data." />
      <section className="bg-wood-light py-16 md:py-20">
        <div className="section-shell">
          <div className="max-w-4xl space-y-8">
            {privacyPageContent.sections.map((section) => (
              <article key={section.title} className="surface-card p-6 md:p-8">
                <h2 className="font-display text-3xl text-offwhite">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-offwhite/78">{section.body}</p>
              </article>
            ))}
            <p className="text-sm uppercase tracking-[0.18em] text-warmgray">
              Last updated {privacyPageContent.updatedAt}
            </p>
          </div>
        </div>
      </section>
      <FinalCTA
        title="Questions handled. Door still open."
        description="If you came here before joining, that part is simple."
        source="privacy-page"
      />
    </>
  );
}

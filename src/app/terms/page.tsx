import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { SchemaOrg } from "@/components/SchemaOrg";
import { termsPageContent } from "@/content/pages/terms";
import { createBreadcrumbSchema, createPageMetadata } from "@/content/site";

export const metadata = createPageMetadata({
  title: "Terms of Service | Druncord",
  description:
    "Read the simple terms of service for the Druncord website, including the 18+ requirement and basic site usage terms.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <SchemaOrg
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <PageHero title="Terms of Service" description="Short, plain, and current." />
      <section className="bg-wood-light py-16 md:py-20">
        <div className="section-shell">
          <div className="max-w-4xl space-y-8">
            {termsPageContent.sections.map((section) => (
              <article key={section.title} className="surface-card p-6 md:p-8">
                <h2 className="font-display text-3xl text-offwhite">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-offwhite/78">{section.body}</p>
              </article>
            ))}
            <p className="text-sm uppercase tracking-[0.18em] text-warmgray">
              Last updated {termsPageContent.updatedAt}
            </p>
          </div>
        </div>
      </section>
      <FinalCTA
        title="Terms read. Stool still available."
        description="If you are satisfied, the invite is one click away."
        source="terms-page"
      />
    </>
  );
}

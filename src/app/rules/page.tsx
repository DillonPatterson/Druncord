import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { SchemaOrg } from "@/components/SchemaOrg";
import { createBreadcrumbSchema, createPageMetadata } from "@/content/site";
import { rulesContent } from "@/content/rules";

export const metadata = createPageMetadata({
  title: "House Rules | Druncord 18+ Discord Server",
  description:
    "Read the house rules for Druncord, including age policy, harassment standards, privacy expectations, moderation, and live video limits.",
  path: "/rules",
});

export default function RulesPage() {
  return (
    <>
      <SchemaOrg
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "House Rules", path: "/rules" },
        ])}
      />
      <PageHero
        title="The house rules."
        description="Plain language, enforced like the room matters."
      />
      <section className="bg-wood-light py-16 md:py-20">
        <div className="section-shell">
          <div className="max-w-4xl">
            <p className="text-lg leading-8 text-offwhite/82">{rulesContent.intro}</p>
            <div className="mt-10 space-y-8">
              {rulesContent.sections.map((section) => (
                <article key={section.title} className="surface-card p-6 md:p-8">
                  <h2 className="font-display text-3xl text-offwhite">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-offwhite/78">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets?.length ? (
                    <ul className="mt-5 space-y-3 text-base text-warmgray">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>• {bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
            <div className="mt-10 surface-card p-6 md:p-8">
              <h2 className="font-display text-3xl text-offwhite">Moderation and enforcement</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-offwhite/78">
                {rulesContent.enforcement.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-warmgray">{rulesContent.crisisResources}</p>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA
        title="Read the room, follow the rules, and come in."
        description="That is the whole deal."
        source="rules-page"
      />
    </>
  );
}

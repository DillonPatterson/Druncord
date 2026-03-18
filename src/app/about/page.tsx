import { PageHero } from "@/components/PageHero";
import { SchemaOrg } from "@/components/SchemaOrg";
import { aboutContent } from "@/content/about";
import { createBreadcrumbSchema, createPageMetadata } from "@/content/site";

export const metadata = createPageMetadata({
  title: "About Druncord | The 18+ Online Bar Discord Community",
  description:
    "Learn what Druncord is, why it exists, who hangs around, and what makes this 18+ voice-first Discord community feel like an online bar.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SchemaOrg
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        title={aboutContent.title}
        description="Why the room exists, who it is for, and why it feels different from the usual server clutter."
      />
      <section className="bg-warm py-16 md:py-20">
        <div className="section-shell">
          <div className="max-w-4xl space-y-7 text-[15px] leading-[1.95] text-sub">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

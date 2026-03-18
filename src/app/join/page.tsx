import Link from "next/link";
import { JoinButton } from "@/components/JoinButton";
import { PageHero } from "@/components/PageHero";
import { SchemaOrg } from "@/components/SchemaOrg";
import { joinPageContent } from "@/content/pages/join";
import { createBreadcrumbSchema, createPageMetadata } from "@/content/site";

export const metadata = createPageMetadata({
  title: "Join Druncord | 18+ Discord Community | Online Bar",
  description:
    "Get the Discord invite and know what to expect before you step into Druncord's 18+ voice-first online bar.",
  path: "/join",
});

export default function JoinPage() {
  return (
    <>
      <SchemaOrg
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Join", path: "/join" },
        ])}
      />
      <PageHero
        title="You're almost in."
        description="A quick look at what the first few minutes usually feel like."
      />
      <section className="bg-warm py-16 md:py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl space-y-6 text-[15px] leading-[1.95] text-sub">
            {joinPageContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="text-[13px] text-sub">
              Adults only. The rules still apply. Read the{" "}
              <Link href="/rules" className="text-amber hover:text-amber-hover">
                house rules
              </Link>{" "}
              before you step in.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <JoinButton source="join-page" size="large" />
          </div>
        </div>
      </section>
    </>
  );
}

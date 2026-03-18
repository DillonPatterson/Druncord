import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { SchemaOrg } from "@/components/SchemaOrg";
import { extendedFaqItems, faqItems } from "@/content/faq";
import { createBreadcrumbSchema, createPageMetadata } from "@/content/site";

const allFaqItems = [...faqItems, ...extendedFaqItems];

export const metadata = createPageMetadata({
  title: "Frequently Asked Questions | Druncord 18+ Discord",
  description:
    "Answers about joining Druncord, using voice, server activity, moderation, events, and what an online bar actually means.",
  path: "/faq",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <SchemaOrg
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <SchemaOrg data={faqSchema} />
      <PageHero
        title="Got questions."
        description="Fair. Here are the straight answers."
      />
      <FAQAccordion items={allFaqItems} title="Frequently asked questions." />
      <FinalCTA
        title="If the answers were enough, the room is still open."
        description="You can read all night or just come in and say hello."
        source="faq-page"
      />
    </>
  );
}

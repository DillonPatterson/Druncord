import { ActivitySignal } from "@/components/ActivitySignal";
import { EventsPreview } from "@/components/EventsPreview";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroSection } from "@/components/HeroSection";
import { RulesSummary } from "@/components/RulesSummary";
import { SchemaOrg } from "@/components/SchemaOrg";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { VoiceExplainer } from "@/components/VoiceExplainer";
import { WhatWeAre } from "@/components/WhatWeAre";
import { faqItems } from "@/content/faq";
import { createPageMetadata, siteConfig } from "@/content/site";

export const metadata = createPageMetadata({
  title: "Druncord | The Online Bar | 18+ Discord Community for Adults",
  description:
    "Pull up a stool at Druncord, the 18+ voice-first Discord community built like an online bar for adults.",
  path: "/",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <SchemaOrg data={organizationSchema} />
      <SchemaOrg data={faqSchema} />
      <HeroSection />
      <ActivitySignal />
      <WhatWeAre />
      <VoiceExplainer />
      <EventsPreview />
      <TestimonialsSection />
      <RulesSummary />
      <FAQAccordion items={faqItems} />
      <FinalCTA />
    </>
  );
}

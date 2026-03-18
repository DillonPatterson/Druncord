import { ActivitySignal } from "@/components/ActivitySignal";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroSection } from "@/components/HeroSection";
import { RulesSummary } from "@/components/RulesSummary";
import { SchemaOrg } from "@/components/SchemaOrg";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhatWeAre } from "@/components/WhatWeAre";
import { createPageMetadata, siteConfig } from "@/content/site";

export const metadata = createPageMetadata({
  title: "Druncord | The Online Bar | 18+ Discord Community for Adults",
  description:
    "The largest online bar on Discord. Voice chat, real people, always open. First round is on me.",
  path: "/",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <SchemaOrg data={organizationSchema} />
      <HeroSection />
      <ActivitySignal />
      <WhatWeAre />
      <TestimonialsSection />
      <RulesSummary />
      <FinalCTA />
    </>
  );
}

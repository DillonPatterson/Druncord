import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { SchemaOrg } from "@/components/SchemaOrg";
import { createBreadcrumbSchema, createPageMetadata } from "@/content/site";

export const metadata = createPageMetadata({
  title: "404 | Druncord",
  description: "Page not found.",
  path: "/",
});

export default function NotFound() {
  return (
    <>
      <SchemaOrg
        data={createBreadcrumbSchema([{ name: "Home", path: "/" }])}
      />
      <PageHero
        title="Nothing here."
        description="You may have taken a wrong turn. The bar is still open though."
      />
      <FinalCTA
        title="Head back to the main room."
        description="The good part of the site is still where you left it."
        source="not-found"
      />
    </>
  );
}

import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Nothing here."
        description="You may have taken a wrong turn. The bar is still open though."
      />
      <FinalCTA
        title="Head back to the main room."
        description="The door is right where you left it."
        source="not-found"
      />
    </>
  );
}

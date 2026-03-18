import { JoinButton } from "@/components/JoinButton";
import { homeContent } from "@/content/home";

type FinalCTAProps = {
  title?: string;
  description?: string;
  source?: string;
};

export function FinalCTA({
  title = homeContent.finalCta.title,
  description = homeContent.finalCta.description,
  source = "final-cta",
}: FinalCTAProps) {
  return (
    <section className="bg-wood py-20 text-center md:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl text-offwhite md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-offwhite/78">
            {description}
          </p>
          <div className="mt-8 flex justify-center">
            <JoinButton source={source} size="large" />
          </div>
        </div>
      </div>
    </section>
  );
}

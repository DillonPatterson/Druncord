import Link from "next/link";
import { homeContent } from "@/content/home";

export function RulesSummary() {
  return (
    <section className="border-t border-amber/30 bg-wood py-20 md:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl text-offwhite md:text-5xl">
            {homeContent.rulesSummaryTitle}
          </h2>
          <p className="mt-6 text-lg leading-8 text-offwhite/78">
            {homeContent.rulesSummaryBody}
          </p>
          <Link href="/rules" className="mt-6 inline-flex text-sm font-medium text-amber hover:text-amber-hover">
            Full house rules
          </Link>
        </div>
      </div>
    </section>
  );
}

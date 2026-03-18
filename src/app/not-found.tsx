import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Nothing here."
        description="You may have taken a wrong turn. The bar is still open though."
      />
      <section className="bg-warm py-16 md:py-20">
        <div className="section-shell">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-amber hover:opacity-70"
          >
            Back to the main room
          </Link>
        </div>
      </section>
    </>
  );
}

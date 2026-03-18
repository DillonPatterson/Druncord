import Link from "next/link";
export function RulesSummary() {
  return (
    <section className="border-y border-border bg-bg">
      <div className="section-shell flex items-center justify-between py-6">
        <p className="text-[13px] text-sub">
          No hate. No harassment. No minors. We mod.
        </p>
        <Link
          href="/rules"
          className="font-mono text-[10px] uppercase tracking-[0.08em] text-amber hover:opacity-70"
        >
          Rules →
        </Link>
      </div>
    </section>
  );
}

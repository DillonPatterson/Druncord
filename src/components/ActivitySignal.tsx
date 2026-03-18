export function ActivitySignal() {
  const bars = [
    { delay: "0ms", duration: "1.6s" },
    { delay: "140ms", duration: "2.0s" },
    { delay: "260ms", duration: "1.7s" },
    { delay: "90ms", duration: "1.85s" },
    { delay: "320ms", duration: "1.5s" },
  ] as const;

  return (
    <section className="border-y border-border-warm bg-counter">
      <div className="section-shell flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-5 items-end gap-[3px]" aria-hidden="true">
            {bars.map((b, i) => (
              <span
                key={i}
                className="block w-[3px] origin-bottom animate-wave rounded-sm bg-amber"
                style={{ animationDelay: b.delay, animationDuration: b.duration }}
              />
            ))}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-amber">
            Voice open
          </span>
        </div>
        <span className="font-mono text-[10px] text-sub">
          busiest after 9pm ET
        </span>
      </div>
    </section>
  );
}

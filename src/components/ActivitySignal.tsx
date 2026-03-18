import { homeContent } from "@/content/home";

const waveform = [
  { delay: "0ms", duration: "1.5s" },
  { delay: "120ms", duration: "1.8s" },
  { delay: "240ms", duration: "1.65s" },
  { delay: "360ms", duration: "1.95s" },
  { delay: "180ms", duration: "1.7s" },
] as const;

export function ActivitySignal() {
  return (
    <section className="border-y border-amber/10 bg-wood-light py-10">
      <div className="section-shell flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div
          className="flex h-20 items-end gap-3"
          aria-hidden="true"
          aria-label="Voice activity indicator"
        >
          {waveform.map((bar, index) => (
            <span
              key={index}
              className="block w-3 origin-bottom animate-wave rounded-full bg-amber/85"
              style={{
                animationDelay: bar.delay,
                animationDuration: bar.duration,
              }}
            />
          ))}
        </div>
        <div className="space-y-3 text-left md:text-right">
          {homeContent.activity.map((line) => (
            <p key={line} className="text-base text-warmgray md:text-lg">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { CSSProperties } from "react";
import { homeContent } from "@/content/home";

const waveform = [
  { height: "40%", delay: "0ms", duration: "1.5s" },
  { height: "82%", delay: "120ms", duration: "1.8s" },
  { height: "56%", delay: "240ms", duration: "1.65s" },
  { height: "92%", delay: "360ms", duration: "1.95s" },
  { height: "48%", delay: "180ms", duration: "1.7s" },
];

export function ActivitySignal() {
  return (
    <section className="border-y border-amber/10 bg-wood-light py-10">
      <div className="section-shell flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex h-20 items-end gap-3" aria-hidden="true">
          {waveform.map((bar, index) => (
            <span
              key={index}
              className="block w-3 animate-wave rounded-full bg-amber/85"
              style={
                {
                  height: bar.height,
                  animationDelay: bar.delay,
                  animationDuration: bar.duration,
                } as CSSProperties
              }
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

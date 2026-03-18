"use client";

import { trackJoinClick } from "@/lib/analytics";
import { DISCORD_INVITE_URL } from "@/lib/config";

type JoinButtonProps = {
  source: string;
  size?: "default" | "large";
  className?: string;
};

export function JoinButton({
  source,
  size = "default",
  className = "",
}: JoinButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[3px] font-mono font-bold tracking-[0.04em] uppercase transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber";
  const sizes = {
    default: "text-[12px] px-5 py-2.5",
    large: "text-[13px] px-9 py-4",
  };

  return (
    <a
      href={DISCORD_INVITE_URL}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Join Druncord on Discord"
      onClick={() => trackJoinClick(source)}
      className={`${base} ${sizes[size]} bg-amber text-bg ${className}`}
    >
      Join Druncord
    </a>
  );
}

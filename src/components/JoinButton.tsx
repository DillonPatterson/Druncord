"use client";

import { trackJoinClick } from "@/lib/analytics";
import { DISCORD_INVITE_URL } from "@/lib/config";

type JoinButtonProps = {
  source: string;
  className?: string;
  size?: "default" | "large";
  fullWidth?: boolean;
};

export function JoinButton({
  source,
  className = "",
  size = "default",
  fullWidth = false,
}: JoinButtonProps) {
  const sizeClasses =
    size === "large"
      ? "min-h-[3.75rem] px-8 text-base"
      : "min-h-[3.25rem] px-6 text-sm md:text-base";

  return (
    <a
      href={DISCORD_INVITE_URL}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Join Druncord on Discord"
      onClick={() => trackJoinClick(source)}
      className={[
        "inline-flex items-center justify-center rounded-lg bg-amber font-medium text-wood shadow-amber",
        "hover:bg-amber-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber",
        sizeClasses,
        fullWidth ? "w-full" : "w-auto",
        className,
      ].join(" ")}
    >
      Join Druncord
    </a>
  );
}

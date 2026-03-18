"use client";

import { useEffect, useRef, useState } from "react";
import {
  AGE_GATE_VISIBILITY_EVENT,
  hasValidAgeConfirmation,
  setAgeConfirmation,
} from "@/lib/ageGate";

const FADE_DURATION_MS = 240;

function dispatchVisibility(isVisible: boolean) {
  window.dispatchEvent(new CustomEvent<boolean>(AGE_GATE_VISIBILITY_EVENT, { detail: isVisible }));
}

export function AgeGate() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isDeclined, setIsDeclined] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const valid = hasValidAgeConfirmation();
    const frame = window.requestAnimationFrame(() => {
      setMounted(true);
      setIsVisible(!valid);
      dispatchVisibility(!valid);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!mounted || !isVisible) {
      return;
    }

    confirmRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements.length) {
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mounted, isVisible]);

  const handleConfirm = () => {
    setAgeConfirmation();
    setIsLeaving(true);

    window.setTimeout(() => {
      setIsVisible(false);
      setIsLeaving(false);
      dispatchVisibility(false);
    }, FADE_DURATION_MS);
  };

  const handleDecline = () => {
    setIsDeclined(true);
    dispatchVisibility(true);
  };

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <div
      className={`grain fixed inset-0 z-[60] flex items-center justify-center bg-wood px-6 py-10 ${
        isLeaving ? "animate-soft-fade" : ""
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,122,42,0.16),transparent_36%)]" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Age confirmation"
        className="surface-card relative w-full max-w-[420px] p-8 text-center shadow-amber"
      >
        {isDeclined ? (
          <>
            <h2 className="font-display text-4xl text-offwhite">
              Come back when you&apos;re ready.
            </h2>
            <a
              href="about:blank"
              className="mt-6 inline-flex text-sm text-amber hover:text-amber-hover"
            >
              Leave
            </a>
          </>
        ) : (
          <>
            <h2 className="font-display text-4xl leading-tight text-offwhite md:text-5xl">
              This bar is for adults.
            </h2>
            <p className="mt-4 text-lg text-offwhite/82">Are you 18 or older?</p>
            <div className="mt-8 space-y-3">
              <button
                ref={confirmRef}
                type="button"
                onClick={handleConfirm}
                className="min-h-[3.5rem] w-full rounded-lg bg-amber px-6 font-medium text-wood hover:bg-amber-hover"
              >
                I&apos;m in
              </button>
              <button
                type="button"
                onClick={handleDecline}
                className="text-sm text-offwhite/75 hover:text-offwhite"
              >
                Take me out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

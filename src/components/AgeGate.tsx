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
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-bg px-6 py-10 ${
        isLeaving ? "animate-soft-fade" : ""
      }`}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Age confirmation"
        className="w-full max-w-[380px] rounded-[4px] border border-border-warm bg-warm p-10 text-center"
      >
        {isDeclined ? (
          <>
            <h2 className="font-serif text-[22px] italic text-sub">
              Come back when you&apos;re ready.
            </h2>
            <a
              href="about:blank"
              className="mt-3 block font-mono text-[11px] text-dim hover:text-sub"
            >
              Leave
            </a>
          </>
        ) : (
          <>
            <h2 className="font-serif text-[26px] italic text-text">
              This bar is for adults.
            </h2>
            <p className="mt-2 mb-8 font-mono text-[12px] text-sub">Are you 18 or older?</p>
            <div className="mt-8 space-y-3">
              <button
                ref={confirmRef}
                type="button"
                onClick={handleConfirm}
                className="w-full rounded-[3px] bg-amber px-9 py-4 font-mono text-[13px] font-bold uppercase tracking-[0.04em] text-bg transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
              >
                I&apos;m in
              </button>
              <button
                type="button"
                onClick={handleDecline}
                className="mt-3 block font-mono text-[11px] text-dim hover:text-sub"
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

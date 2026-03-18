"use client";

import { useEffect, useState } from "react";
import { JoinButton } from "@/components/JoinButton";
import { AGE_GATE_VISIBILITY_EVENT, hasValidAgeConfirmation } from "@/lib/ageGate";

const MENU_EVENT = "druncord-menu-open";

function getInitialHidden(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return !hasValidAgeConfirmation();
  } catch {
    return true;
  }
}

export function MobileJoinBar() {
  const [hidden, setHidden] = useState(getInitialHidden);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onAgeGate(e: Event) {
      const ev = e as CustomEvent<boolean>;
      setHidden(ev.detail);
    }

    function onMenu(e: Event) {
      const ev = e as CustomEvent<boolean>;
      setMenuOpen(ev.detail);
    }

    window.addEventListener(AGE_GATE_VISIBILITY_EVENT, onAgeGate as EventListener);
    window.addEventListener(MENU_EVENT, onMenu as EventListener);
    return () => {
      window.removeEventListener(AGE_GATE_VISIBILITY_EVENT, onAgeGate as EventListener);
      window.removeEventListener(MENU_EVENT, onMenu as EventListener);
    };
  }, []);

  if (hidden || menuOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-amber/30 bg-wood/95 p-4 backdrop-blur md:hidden">
      <JoinButton source="mobile-bar" fullWidth />
    </div>
  );
}

export { MENU_EVENT };

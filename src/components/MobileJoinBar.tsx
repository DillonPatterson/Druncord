"use client";

import { useEffect, useState } from "react";
import { JoinButton } from "@/components/JoinButton";
import { AGE_GATE_VISIBILITY_EVENT, hasValidAgeConfirmation } from "@/lib/ageGate";

const MENU_OPEN_EVENT = "druncord-menu-open";

function getInitialHiddenState(): boolean {
  if (typeof window === "undefined") {
    return true;
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { hasValidAgeConfirmation: checkAgeConfirmation } = require("@/lib/ageGate");
    return !checkAgeConfirmation();
  } catch {
    return true;
  }
}

export function MobileJoinBar() {
  const [hidden, setHidden] = useState(getInitialHiddenState);
  const [menuHidden, setMenuHidden] = useState(false);

  useEffect(() => {
    const onVisibilityChange = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      setHidden(customEvent.detail);
    };

    const onMenuOpenChange = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      setMenuHidden(customEvent.detail);
      if (!customEvent.detail) {
        setHidden(!hasValidAgeConfirmation());
      }
    };

    window.addEventListener(AGE_GATE_VISIBILITY_EVENT, onVisibilityChange as EventListener);
    window.addEventListener(MENU_OPEN_EVENT, onMenuOpenChange as EventListener);
    return () => {
      window.removeEventListener(
        AGE_GATE_VISIBILITY_EVENT,
        onVisibilityChange as EventListener,
      );
      window.removeEventListener(MENU_OPEN_EVENT, onMenuOpenChange as EventListener);
    };
  }, []);

  if (hidden || menuHidden) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-amber/30 bg-wood/95 p-4 backdrop-blur md:hidden">
      <JoinButton source="mobile-bar" fullWidth />
    </div>
  );
}

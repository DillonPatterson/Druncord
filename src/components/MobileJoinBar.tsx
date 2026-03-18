"use client";

import { useEffect, useState } from "react";
import { JoinButton } from "@/components/JoinButton";
import { AGE_GATE_VISIBILITY_EVENT, hasValidAgeConfirmation } from "@/lib/ageGate";

export function MobileJoinBar() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setHidden(!hasValidAgeConfirmation());
    });

    const onVisibilityChange = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      setHidden(customEvent.detail);
    };

    window.addEventListener(AGE_GATE_VISIBILITY_EVENT, onVisibilityChange as EventListener);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener(
        AGE_GATE_VISIBILITY_EVENT,
        onVisibilityChange as EventListener,
      );
    };
  }, []);

  if (hidden) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-amber/30 bg-wood/95 p-4 backdrop-blur md:hidden">
      <JoinButton source="mobile-bar" fullWidth />
    </div>
  );
}

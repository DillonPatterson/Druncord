import { AGE_GATE_DURATION_MS, AGE_GATE_STORAGE_KEY } from "@/lib/config";

export const AGE_GATE_VISIBILITY_EVENT = "druncord-age-gate-visibility";

export function readAgeConfirmation() {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(AGE_GATE_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  const timestamp = Number(raw);
  return Number.isFinite(timestamp) ? timestamp : null;
}

export function hasValidAgeConfirmation(referenceTime = Date.now()) {
  const timestamp = readAgeConfirmation();
  if (!timestamp) {
    return false;
  }

  return referenceTime - timestamp < AGE_GATE_DURATION_MS;
}

export function setAgeConfirmation(timestamp = Date.now()) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(AGE_GATE_STORAGE_KEY, String(timestamp));
}

export function clearAgeConfirmation() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(AGE_GATE_STORAGE_KEY);
}

const DEFAULT_DISCORD_INVITE_URL = "https://discord.gg/YOUR_INVITE_HERE";
const DEFAULT_SITE_URL = "https://druncord.com";

function normalizeUrl(value: string, fallback: string) {
  try {
    return new URL(value).toString().replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const DISCORD_INVITE_URL = normalizeUrl(
  process.env.NEXT_PUBLIC_DISCORD_INVITE_URL?.trim() || DEFAULT_DISCORD_INVITE_URL,
  DEFAULT_DISCORD_INVITE_URL,
);

export const SITE_URL = normalizeUrl(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL,
  DEFAULT_SITE_URL,
);

export const SITE_URL_OBJECT = new URL(SITE_URL);

export const AGE_GATE_STORAGE_KEY = "druncord_age_confirmed";
export const AGE_GATE_DURATION_MS = 30 * 24 * 60 * 60 * 1000;

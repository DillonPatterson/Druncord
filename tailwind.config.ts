import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0f0a",
        warm: "#1a1508",
        counter: "#1e1a08",
        amber: "#c8821a",
        "amber-hover": "#d4912a",
        nightgreen: "#0d1a0d",
        text: "#f0e8d0",
        sub: "rgba(240,232,208,0.4)",
        dim: "rgba(240,232,208,0.12)",
        border: "rgba(200,130,26,0.1)",
        "border-warm": "rgba(200,130,26,0.15)",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        serif: ["Lora", "serif"],
        mono: ["Syne Mono", "monospace"],
        body: ["Syne", "sans-serif"],
      },
      animation: {
        wave: "wave 1.9s ease-in-out infinite",
        "soft-fade": "softFade 240ms ease forwards",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "scaleY(0.12)", opacity: "0.22" },
          "50%": { transform: "scaleY(1)", opacity: "0.95" },
        },
        softFade: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      boxShadow: {
        amber: "0 0 40px rgba(200,130,26,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;

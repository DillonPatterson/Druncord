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
        wood: "#1A1109",
        "wood-light": "#2A1E10",
        amber: "#C17A2A",
        "amber-hover": "#D4882E",
        offwhite: "#EDE8DF",
        warmgray: "#6B6157",
        teal: "#3D7068",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      transformOrigin: {
        bottom: "bottom",
      },
      animation: {
        wave: "wave 1.8s ease-in-out infinite",
        "soft-fade": "softFade 240ms ease forwards",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "scaleY(0.45)", opacity: "0.45" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
        softFade: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      boxShadow: {
        amber: "0 12px 36px rgba(193, 122, 42, 0.22)",
      },
      backgroundImage: {
        "warm-glow":
          "radial-gradient(circle at 50% 35%, rgba(193, 122, 42, 0.12), transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;

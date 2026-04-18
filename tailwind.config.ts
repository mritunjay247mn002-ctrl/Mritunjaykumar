import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        charcoal: "#111111",
        graphite: "#1a1a1a",
        ash: "#2a2a2a",
        amber: {
          DEFAULT: "#f5c542",
          soft: "#f5c54233",
          glow: "#f5c54266",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "glow-amber": "0 0 24px -10px rgba(245,197,66,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;

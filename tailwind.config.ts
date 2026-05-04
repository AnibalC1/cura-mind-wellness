import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#F8F4ED",
          card: "#FFFFFF",
          elevated: "#EFE9DE",
        },
        ivory: {
          DEFAULT: "#1F3B5E",
          muted: "#2D4870",
          dim: "#5A6B7E",
        },
        gold: {
          DEFAULT: "#5DA9A7",
          light: "#7DC4C2",
          dark: "#3F8987",
        },
        sage: {
          DEFAULT: "#1F3B5E",
          light: "#345578",
          dark: "#142A47",
        },
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        dm: ["var(--font-dm-serif)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        cinzel: ["var(--font-cinzel)", "Georgia", "serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.5rem, 3vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(93,169,167,0.14) 0%, transparent 70%)",
        "gradient-gold": "linear-gradient(135deg, #5DA9A7 0%, #7DC4C2 50%, #5DA9A7 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};

export default config;

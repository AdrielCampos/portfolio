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
        background: {
          DEFAULT: "rgb(var(--color-background) / var(--tw-bg-opacity, 1))",
          accent:
            "rgb(var(--color-background-accent) / var(--tw-bg-opacity, 1))",
        },
        primary: "rgb(var(--color-primary) / var(--tw-bg-opacity, 1))",
        secondary: "rgb(var(--color-secondary) / var(--tw-bg-opacity, 1))",
        accent: {
          DEFAULT: "rgb(var(--color-accent) / var(--tw-bg-opacity, 1))",
          hover: "rgb(var(--color-accent-hover) / var(--tw-bg-opacity, 1))",
          foreground:
            "rgb(var(--color-accent-foreground) / var(--tw-bg-opacity, 1))",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
      opacity: ["active"],
      translate: ["active"],
      scale: ["active"],
      boxShadow: ["active"],
      borderWidth: ["active"],
      borderColor: ["active"],
    },
  },
  plugins: [],
};
export default config;

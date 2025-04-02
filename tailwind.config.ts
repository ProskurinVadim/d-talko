 import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#226A60",
        main_dark: "#1A4F48",
        main_light: "rgba(48, 134, 123, 0.56)",
        main_inverse: "#FFFFFF",
        main_inverse_light: "#F0F0F0",
        additional: "#303036",
        additional_light: "rgba(48, 48, 54, 0.64)",
        additional_inverse: "#F5F9F9",
        additional_inverse_light: "#303036A3",
        semi_light: "rgba(255, 255, 255, 0.64)",
        semi_dark: "rgba(140, 187, 187, 0.12)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        label: "#33343CB2",
        placeholder: "#8E8E93"
      },
      fontFamily: {
        inter: "Inter",
      },
      lineHeight: {
        title_small: "110%",
        title: "120%",
        description: "140%",
        description_small: "135%",
        placeholder: "150%",
        label: "160%",
      },
      backgroundImage: {
        'main-image-gradient': 'linear-gradient(to right, #fff 36%, #fff0 66%)',
      },
    },
  },
  plugins: [],
} satisfies Config;

import { tv } from "tailwind-variants";

export const h3 = tv({
    base: "",
    variants: {
      color: {
        main: "text-main",
        dark: "main_dark"
      },
      type: {
        normal: "",
        large: "leading-description font-semibold lg:text-xl md:text-lg"
      },
      leading: {
        normal: "leading-title",
        large: "leading-description"
      },
      weight: {
        normal: "500",
        semibold: "600",
        bold: "700"
      }
    },
  });
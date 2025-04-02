import { tv } from "tailwind-variants";

export const p = tv({
    variants: {
      color: {
        default: "text-additional",
        light_green: "text-[#2B8478]",
        main: "text-main",
        additional_light: "text-additional_light"
      },
      type: {
        text_sm: "text-sm",
        normal: "text-sm md:text-base",
        medium: "text-sm md:text-base lg:text-lg",
        medium_large: "md:t",
      },
      leading: {
        smallest: "leading-[120%]",
        small: "leading-[125%]",
        normal: "leading-description"
      }
    },
  });
import { tv } from "tailwind-variants";

export const button = tv({
    base: "block w-full  text-center text-sm md:text-base px-8 transition-colors py-4 border-main border-solid border rounded-[1000px] !leading-none md:w-fit",
    variants: {
      type: {
        primary: "text-main hover:bg-main hover:text-main_inverse",
        inverse: "text-main_inverse bg-main hover:bg-main_inverse hover:text-main",
      },
    },
  });
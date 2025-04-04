import { tv } from "tailwind-variants";

export const h2 = tv({
    base: "font-semibold ",
    variants: {
        color: {
            main: "text-main",
            danger: "text-[#FF0000]",
            main_dark: "text-main_dark",
            main_light: "text-[#2B8478]",
        },
        type: {
            smallest: "text-[18px] md:text-[24px] !leading-title",
            common: "text-2xl md:text-[32px] lg:text-5xl !leading-title",
            large: "text-[32px] md:text-[40px] lg:text-[64px] !leading-title",
            large_small_mobile: "text-[28px] md:text-[40px] lg:text-[64px] !leading-title_small",
            large_smallest_mobile: "text-[24px] md:text-[32px] lg:text-[64px] !leading-title_small",
            largest: "text-[32px] md:text-[40px] lg:text-[72px] !leading-title",
            normal_large: "text-[24px] md:text-[32px] lg:text-[48px]",
            semi_large: "text-[32px] md:text-[40px] lg:text-[48px] !leading-title",
            small: "text-[32px] !leading-[110%]",
            modal: "text-[16px] md:text-[24px] lg:text-[32px] !leading-[125%]"
        },
        position: {
            center: "text-center md:text-left"
        }
    },
});
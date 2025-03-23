import { tv } from "tailwind-variants";

const inputClassname = "block w-full text-xs font-light text-placeholder leading-placeholder p-4 bg-additional_inverse rounded-lg";

export const label = tv({
    base: "block text-sm leading-label md:text-base md:mb-[5px]",
    variants: {
        color: {
            main: "text-label mb-1",
            additional: "text-[#000000CC] md:mb-0"
       }
    }
})

export const input = tv({
    variants: {
        type: {
            small: `${inputClassname} mb-8`,
            large: `${inputClassname} h-[150px] mb-10`,
            checkbox: "h-4 w-4 bg-[#2B8478] border border-solid border-[#3BB7A6] outline outline-solid checked:bg-[#2B8478]"
        }
    }
})

export const field = tv({
    variants: {
        type: {
            normal: "w-full",
            half: "w-full lg:w-[48%]",
            reverse: "flex flex-row-reverse gap-4 justify-end items-center",
        }
    }
})

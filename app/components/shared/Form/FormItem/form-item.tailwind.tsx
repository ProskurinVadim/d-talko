import { tv } from "tailwind-variants";

const inputClassname = "block w-full text-xs font-light text-placeholder !leading-placeholder p-4 bg-additional_inverse rounded-lg h-[58px]";

export const label = tv({
    base: "block text-sm !leading-[130%] md:!leading-label md:text-base md:mb-[5px]",
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
            small: `${inputClassname} `,
            large: `${inputClassname} h-[150px] resize-none`,
            checkbox: "appearance-none h-4 w-4 border rounded-sm border border-[#3BB7A6] outline outline-solid checked:appearance-auto checked:accent-[#2B8478]"
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

import {FC, ReactNode} from "react";
import {h3} from "./heading.tailwind";
import { VariantProps } from "tailwind-variants";
interface Props {
    children: ReactNode,
    className?: string,
    tlwVar?: VariantProps<typeof h3>
}

const Heading:FC<Props> = ({children, className="", tlwVar = {}}) => {
    const {leading = "normal", weight = "semibold", type = undefined, color = "main"} = tlwVar;

    return (
        <h3 className={`${className} ${h3({leading, weight, type, color})}`}>{children}</h3>
    )
}

export default Heading
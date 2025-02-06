import { FC, ReactNode } from "react";
import { VariantProps } from "tailwind-variants";
import {p} from "./text.tailwind";

interface Props {
    children: ReactNode;
    className?: string;
    tlwVar?: VariantProps<typeof p>

}

const Text:FC<Props> = ({children, className="", tlwVar={}}) => {
    const {color="default", type=undefined, leading="small"} = tlwVar;
    return (
        <p className={`${className} ${p({color, type, leading})}`}>{children}</p>
    )
}

export default Text
"use client"
import { FC, ReactNode, MouseEvent } from "react";
import { VariantProps } from "tailwind-variants";
import { button } from "./button.tailwind";

interface Props {
    children: ReactNode;
    className?: string;
    tlwVar?: VariantProps<typeof button>;
    onClick: (e:MouseEvent<HTMLButtonElement>) => void;
}
const Button: FC<Props> = ({children, onClick, className = "", tlwVar={}}) => {
    const {type="primary"} = tlwVar;
    return (
        <button className={`${button({type})} ${className} `} onClick={onClick}>{children}</button>
    )
} 

export default Button
"use client"
import {FC} from "react";
import Link from "next/link";
import {button} from "@/app/components/common/Button/button.tailwind";

interface Props {
    className?: string;
    inverse?: boolean;
    href?: string;
    scroll?: boolean;
}
const ConsultButton:FC<Props> = ({className="", inverse, href="/modal/form", scroll=true}) => (
    <Link href={href} scroll={scroll} className={`${className} ${button({type: inverse ? "inverse" : "primary"})}`}>Записатись на консультацію</Link>
)

export default ConsultButton;
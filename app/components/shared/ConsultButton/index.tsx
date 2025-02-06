"use client"
import {FC} from "react";
import Button from "@/app/components/common/Button";

interface Props {
    className?: string;
    inverse?: boolean;
}
const NavbarButton:FC<Props> = ({className="", inverse}) => (
    <Button tlwVar={{type: inverse ? "inverse" : "primary"}} className={className} onClick={()=>null}>Записатись на консультацію</Button>
)

export default NavbarButton;
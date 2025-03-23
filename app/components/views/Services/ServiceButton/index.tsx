"use client"
import Link from "next/link";
import {FC} from "react";
import {button} from "@/app/components/common/Button/button.tailwind";

const ServiceButton:FC<{name:string}> = ({name}) => {
    return (<Link className={`block w-full mt-4 md:mt-6 ${button({type:"primary"})}`} href={`/modal/form?service=${name}`}>Записатись</Link>)
}

export default ServiceButton;
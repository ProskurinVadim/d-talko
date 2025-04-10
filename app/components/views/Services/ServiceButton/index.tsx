"use client"
import Link from "next/link";
import {FC} from "react";
import {button} from "@/app/components/common/Button/button.tailwind";

const ServiceButton:FC<{id:string}> = ({id}) => {
    return (<Link className={`${button({type:"primary"})} !py-3 !text-[12px] leading-none font-bold md:w-full mt-4 md:mt-6`} href={`/modal/form/${id}`}>Записатись</Link>)
}

export default ServiceButton;
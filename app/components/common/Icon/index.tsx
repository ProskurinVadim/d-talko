import {FC} from "react";
import Image from 'next/image';
import Link from "next/link";

interface Pros {
    src: "viber" | "telegram";
    className?: string;
}

const Icon:FC<Pros> = ({src, className=""}) => {
    return (
        <Image width={36} height={36} className={className} src={`icons/${src}-icon.svg`} alt={`Call ${src}`}/>
    )
}

export default Icon

export const Telegram: FC<object> = () => {
    return (
        <Link href="https://t.me/daxak4" target="_blank"><Icon src="telegram" /></Link>
    )
}

export const Viber: FC<object> = () => {
    return (
        <Link href="https://t.me/daxak4" target="_blank"><Icon className="mr-3" src="viber" /></Link>   
    )
}
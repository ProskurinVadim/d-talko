import {FC} from "react";
import Image from 'next/image';

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


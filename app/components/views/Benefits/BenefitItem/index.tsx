import { FC } from "react";
import Image from "next/image";

export interface Item {
    title: string;
    description: string;
}
const BenefitItem: FC<Item> = ({title, description}) => {
    return (
        <div className="flex flex-col items-center md:items-start">
            <Image className="p-3 bg-semi_dark rounded-full" height="48" width="48" alt="benefit icon" src="./pluse-icon.svg"/>
            <h3 className="text-main font-semibold mt-8 leading-title lg:text-lg">{title}</h3>
            <p className="text-additional leading-description mt-4 text-sm lg:text-base">{description}</p>
        </div>
    )
}

export default BenefitItem
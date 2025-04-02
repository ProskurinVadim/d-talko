import { FC } from "react";
import Image from "next/image";

export interface Item {
    title: string;
    description: string;
}
const BenefitItem: FC<Item> = ({title, description}) => {
    return (
        <div className="flex flex-col items-center md:items-start">
            <div className="bg-semi_dark rounded-full p-3 w-fit">
            <Image height="24" width="24" alt="benefit icon" src="./pluse-icon.svg"/>
            </div>
            <h3 className="text-main font-semibold mt-8 !leading-title lg:text-lg uppercase">{title}</h3>
            <p className="text-center text-additional leading-description mt-4 text-sm md:text-left lg:text-base">{description}</p>
        </div>
    )
}

export default BenefitItem
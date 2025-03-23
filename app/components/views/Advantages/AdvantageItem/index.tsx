import {FC} from "react";
import Image from "next/image";

export interface Item {
    icon: string;
    title: string;
    description: string;
    selected?: boolean;
}
const AdvantageItem: FC<Item> = ({icon, title, description, selected}) => {
    return(
        <li className={`rounded-2xl p-8 w-full lg:w-[33%]  ${selected ? "bg-main" : "bg-additional_inverse"}`}>
            <div className="bg-white rounded-full p-3 md:p-5 w-fit">
                <Image alt="advantage item icon" width="24" height="24" src={icon}/>
            </div>
            <h3 className={`mt-8 mb-3 uppercase font-bold text-xl leading-[120%] ${selected ? "text-main_inverse" : "text-main"}`}>{title}</h3>
            <p className={`text-sm leading-[140%] ${selected ? "text-semi_light" : "text-additional_inverse_light"}`}>{description}</p>
        </li>
    )
}

export default AdvantageItem
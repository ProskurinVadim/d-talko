import { FC } from "react";
import ServiceButton from "@/app/components/views/Services/ServiceButton";
import Image from "next/image";

export interface Item {
    title: string;
    description: string
    image: string;
    id: string;
}

const ServiceItem:FC<Item> = ({title, description, image}) => {
    return (
        <li className="max-w-[296px] md:max-w-[324px] lg:max-w-[389px] bg-main_inverse rounded-xl">
            <Image className="w-full rounded-t-xl h-[223px]" height="223" width='389' alt={`${title} image`} src={image}/>
            <div className="py-6 px-4 md:px-6 md:py-8 lg:px-8">
                <h3 className="text-main font-bold tracking-[-1.2px] md-text-lg lg:text-xl leading-[120%] uppercase">{title}</h3>
                <p className="text-additional border-b border-main_inverse_light pb-8 md:pb-12 text-sm mt-3 lg:mt-4 leading-[135%]">
                    {description}
                </p>
                <ServiceButton name={title}/>
            </div>
        </li>
    )
}

export default ServiceItem
import {FC} from "react";

export interface Item {
    title: string;
    description: string;
}

const ReviewItem:FC<Item> = ({title, description}) => {
    return (
        <div className="bg-additional_inverse leading-title rounded-xl py-8 px-4 md:py-10 md:px-8 lg:px-10 lg:py-14">
            <h3 className="font-semibold text-main text-lg lg:text-[22px]">{title}</h3>
            <p className="leading-description text-additional text-sm mt-6 h-[230px] md:h-[270px] lg:h-[288px] lg:text-base">{description}</p>
        </div>
    )
}

export default ReviewItem
import {FC} from "react";

export interface Item {
    title: string;
    description: string;
}

const ReviewItem:FC<Item> = ({title, description}) => {
    return (
        <div className="bg-additional_inverse leading-title h-full rounded-xl py-8 px-4 md:py-10 md:px-8 lg:px-10 lg:py-14">
            <h3 className="font-semibold text-main text-lg lg:text-[22px] !leading-title">{title}</h3>
            <p className="!leading-placeholder text-additional text-sm mt-6 lg:mt-8 lg:text-base">{description}</p>
        </div>
    )
}

export default ReviewItem
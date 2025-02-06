import { FC } from "react";
import { Text } from "@/app/components/common";

export interface Item {
    data: string;
    text: string;
}

const SummaryItem:FC<Item> = ({data, text}) => {
    return (
        <li className="flex flex-col text-left">
            <Text tlwVar={{color: "light_green", leading: "normal"}} className="text-xs md:mr-3">{data}</Text>
            <Text tlwVar={{type: "normal",leading: "smallest"}}className="mt-[18px] md:mt-0">{text}</Text>
        </li>
    )
}

export default SummaryItem
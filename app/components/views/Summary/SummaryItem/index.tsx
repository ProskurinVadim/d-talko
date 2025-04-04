import { FC } from "react";
import { Text } from "@/app/components/common";

export interface Item {
    data: string;
    text: string;
}

const SummaryItem:FC<Item> = ({data, text}) => {
    return (
        <li className="flex flex-col md:flex-row text-left" >
            <Text tlwVar={{color: "light_green", leading: "normal"}} className="text-xs font-semibold md:w-[68px]">{data}</Text>
            <Text tlwVar={{type: "normal_small",leading: "smallest"}} className="w-[264px] md:w-[432px] md:ml-3 mt-[8px] md:mt-0">{text}</Text>
        </li>
    )
}

export default SummaryItem
import {FC} from "react";
import Image from "next/image";

export interface Item {
    text: string;
}

const TreatmentItem:FC<Item> = ({text}) => {
    return (
        <li><Image src="./check-icon.svg" alt="Check icon"/>{text}</li>
    )
}

export default TreatmentItem;
import {FC} from 'react';
import Image from "next/image";

const CheckIcon: FC<object> = () => (
    <span className="p-1.5 rounded-full bg-semi_dark mr-3">
        <Image height={12} width={12} src="./check-icon.svg" alt="Check icon"/></span>
)

export default CheckIcon;
import {FC} from "react";
import Image from "next/image";

const Logo:FC<object> = () => {
    return (
        <h1><Image width={160} height={20} alt="logo" src="./logo.svg"/></h1>
    )
}

export default Logo
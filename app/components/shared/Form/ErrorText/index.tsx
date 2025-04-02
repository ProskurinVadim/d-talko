import { FC } from "react";
import Image from "next/image"

const ErrorText:FC<{errorText?: string}> = ({errorText}) => {
    return (
        <p className={'h-[15px] text-error text-xs leading-[125%] my-[8.5px] flex items-center'}>
            {
                errorText ? <><Image className="mr-1" src="./warning-icon.svg" alt='warning icon' width={16} height={16}/>{errorText}</> 
                : <></>
            }
        </p>
    )
}

export default ErrorText
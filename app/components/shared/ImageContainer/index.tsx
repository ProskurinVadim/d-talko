import {FC, ReactNode} from "react";
interface IProps {
    children: ReactNode,
    className?: string,
    backgroundImage?:string
}
const ImageContainer:FC<IProps> = ({children, className='', backgroundImage=""}) => {
    return (
        <div style={{...backgroundImage && {"backgroundImage": `url(${backgroundImage})`}}} className={`${className} w-full mx-auto max-w-full md:max-w-[744px] lg:max-w-[1376px]  bg-cover bg-no-repeat rounded-2xl `}>
            {children}
        </div>
    )
}

export default ImageContainer
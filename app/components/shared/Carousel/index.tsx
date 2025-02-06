"use client"
import {FC, ReactNode} from "react";


interface CarouselProps {
    index: number;
    children: ReactNode;
    className?: string;
    containerClassName?: string;
}

interface CarouselItem {
    children: ReactNode;
    className?: string;
}


const Carousel: FC<CarouselProps> = ({children, index, className="", containerClassName=""}) => {
    return (
        <div className={`overflow-hidden ${containerClassName}`}>
            <div className={`flex transition-transform duration-500 ${className}`} style={{transform: `translateX(-${index * 100}%)`}}>
                {children}
            </div>
        </div>
    )
}

const CarouselItem: FC<CarouselItem> = ({className="", children}) => {
    return (
        <li className={`flex-none list-none ${className}`}>
            {children}
        </li>
    )
}

export default Carousel;
export {CarouselItem};

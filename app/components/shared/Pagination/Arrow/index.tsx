import {FC} from 'react';
interface SVG {
    stroke: string;
    className?: string;
}

const Arrow:FC<SVG> = ({stroke, className=""}) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10 5L15 11L10 17" stroke={stroke} strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>

    )
}

export default Arrow
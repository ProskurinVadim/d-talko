import {FC} from 'react'
import Image from "next/image"

export interface Item {
    title: string;
    description: string;
    isOpen: boolean;
    id: string;
    setOpen: (id:string) => void
}

const AnswerItem: FC<Item> = ({title,description, isOpen, id, setOpen}) => {
    const status = isOpen ? "close" : "open";
    return (
        <li onClick={()=>setOpen(id)} className={`p-6 rounded-lg w-full ${isOpen ? "border-l-8 border-main lg:h-[205px]" : "bg-additional_inverse cursor-pointer "}`}>
            <div className="flex justify-between">
                <h3 className="text-main font-semibold leading-title text-lg">{title}</h3>
                <Image width={16} height={16} src={`./arrow-${status}-icon.svg`} alt={`${status} answer`}/>
            </div>
            <p className={`mt-6 leading-description ${isOpen ? 'block' : 'hidden'}`}>{description}</p>
        </li>
    )
}

export default AnswerItem

import {FC, useRef, useEffect, useState} from 'react'
import Image from "next/image"

export interface Item {
    title: string;
    description: string;
    isOpen: boolean;
    id: string;
    setOpen: (id: string) => void;
}

const AnswerItem: FC<Item> = ({title, description, isOpen, id, setOpen}) => {
    const status = isOpen ? "close" : "open";

    const contentRef = useRef<HTMLParagraphElement>(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight + "px");
        } else {
            setHeight("0px");
        }
    }, [isOpen]);

    return (
        <li
            onClick={() => setOpen(id)}
            className={`p-6 rounded-lg w-full transition-all duration-300 ${isOpen ? "border-l-8 border-main bg-white" : "bg-additional_inverse cursor-pointer"}`}
        >
            <div className="flex justify-between items-start">
                <h3 className="text-main font-semibold leading-title text-lg">{title}</h3>
                <Image
                    width={16}
                    height={16}
                    src={`./arrow-${status}-icon.svg`}
                    alt={`${status} answer`}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
            </div>
            <div
                style={{ maxHeight: height }}
                className="transition-all duration-500 ease-in-out overflow-hidden"
            >
                <p ref={contentRef} className="mt-6 leading-description">
                    {description}
                </p>
            </div>
        </li>
    );
};

export default AnswerItem;

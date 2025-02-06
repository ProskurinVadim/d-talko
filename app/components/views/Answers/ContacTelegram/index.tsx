"use client"
import {FC} from 'react'
import Button from "@/app/components/common/Button";

interface Props {
    className?: string;
}
const ContactTelegram:FC<Props> = ({className = ''}) => {
    return (
        <div className={className}>
            <p className="leading-title text-xs mt-10 mb-3 max-w-[328px]
                md:text-base md:mt-12 md:mb-4 md:max-w-[388px]
                lg:text-lg lg:mt-0 lg:mb-6
            ">
                Залишились питання? Напишіть нам в Телеграм і ми дамо вам відповіді!
            </p>
            <Button className="block mt-3 md:mt-4 md:mx-auto lg:mt-6 lg:mx-0" onClick={() => null}>Написати у Телеграм</Button>
        </div>
    )
}

export default ContactTelegram
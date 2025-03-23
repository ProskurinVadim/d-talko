"use client"
import {FC} from 'react'
import Link from 'next/link';
import { button } from '@/app/components/common/Button/button.tailwind';
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
            <Link href="https://t.me/daxak4" target='_blank' className={`${button({type: "primary"})} block mt-3 md:mt-4 md:mx-auto lg:mt-6 lg:mx-0`}>Написати у Телеграм</Link>
        </div>
    )
}

export default ContactTelegram
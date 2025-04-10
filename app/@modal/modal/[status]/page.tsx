"use client"
import {useRouter} from 'next/navigation';
import Modal from '@/app/components/shared/Modal';
import { SectionTitle, Text } from '@/app/components/common';
import Button from '@/app/components/common/Button/';
import {FC, use} from 'react';

interface Props {
    params:  Promise<{status:string}>;
}

const StatusModalPage:FC<Props> = ({ params }) => {
    const { status } = use(params);

    const router = useRouter();
    const goBack = () => {
        router.back();
    }
    const returnToMainPage = () => {
        window.location.href = window.location.href.split("modal")[0];
    }

    const DATA = {
        success: {
            title: "Дякуємо за вашу заявку!",
            text: "Будь ласка, очікуйте, ми зв'яжемося з вами найближчим часом для обговорення деталей."
        },
        error: {
            title: "Щось пішло не так...",
            text: "Ми не змогли отримати Вашу заявку.  Спробуйте, будь ласка, пізніше."
        }
    }

  
    const data = DATA[status as "error" | "success"];


    return (
        <Modal className="px-6 pt-6 pb-[62px] lg:max-w-[800px] text-center rounded-xl">
            <div className='p-6'>
                <span className="flex justify-end" onClick={goBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <path d="M2.3335 25.2495L25.249 2.33402" stroke="#D3D3D3" strokeWidth="3" strokeLinecap="round"/>
                        <path d="M2.3335 2.3335L25.249 25.249" stroke="#D3D3D3" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                </span>
                <div className="lg:max-w-[474px]">
                    <SectionTitle tlwVar={{color: status === "error" ? "danger" : "main_dark", type:"modal"}} className="mt-6">{data.title}</SectionTitle>
                    <Text tlwVar={{type: "normal", color: "additional_light", leading: "normal"}} className="mt-4">{data.text}</Text>
                    <Button className="inline-block mt-12" onClick={returnToMainPage}>На головну</Button>
                </div>
            </div>
        </Modal>
    );
}

export default StatusModalPage
"use client"
import { notFound } from 'next/navigation';
import Modal from '@/app/components/shared/Modal';
import { SectionTitle, Text } from '@/app/components/common';
import { button } from '@/app/components/common/Button/button.tailwind';
import { FC } from 'react';
import Link from 'next/link';

interface Props {
    params:  Promise<{ status: string | never }>;
}

const StatusModalPage:FC<Props> = async({ params }) => {
    const {status} = await params;
    if (status !== 'error' && status !== 'succes') {
        notFound();
    }
    
    if (typeof window !== 'undefined' && window.location.pathname === `/modal/${status}`) {
        notFound();
    }

    const DATA = {
            error: {
                title: "Дякуємо за вашу заявку!",
                text: "Будь ласка, очікуйте, ми зв'яжемося з вами найближчим часом для обговорення деталей."
            },
            succes: {
                title: "Щось пішло не так...",
                text: "Ми не змогли отримати Вашу заявку.  Спробуйте, будь ласка, пізніше."
            }
        }

  
    const data = DATA[status as "error" | "succes"];


    return (
        <Modal className="px-6 pt-6 pb-[62px] lg:max-w-[800px] text-center">
            <div className="lg:max-w-[474px]">
                <Link href="/" className='ml-auto flex justify-end'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <path d="M2.3335 25.2495L25.249 2.33402" stroke="#D3D3D3" stroke-width="3" stroke-linecap="round"/>
                            <path d="M2.3335 2.3335L25.249 25.249" stroke="#D3D3D3" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                    </span>
                </Link>
                <SectionTitle tlwVar={{color: status === "error" ? "danger" : "main_dark", type:"modal"}} className="mt-6">{data.title}</SectionTitle>
                <Text tlwVar={{type: "normal", color: "additional_light", leading: "normal"}} className="mt-4">{data.text}</Text>
                <Link className={`block mt-12 ${button({type:"primary"})}`} href="/">На головну</Link>
            </div>
        </Modal>
    );
}

export default StatusModalPage
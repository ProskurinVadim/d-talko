"use client"
import {FC, Suspense} from "react";
import Modal from "@/app/components/shared/Modal";
import Form, { FieldClassNames } from "@/app/components/shared/Form";
import Link from "next/link";

const FormModalPage:FC<{service: string}> = ({service=""}) => {
    console.log(encodeURIComponent(service),"Service")
    const CLASS_NAMES: FieldClassNames = {
        phone: {tlwVar: {field:{type:"half"}}},
        service: {tlwVar: {field:{type:"half"}}},
        comment: {tlwVar: {input:{type: "large"}}},
        checkbox: {tlwVar: {field: {type: "reverse"}, input: {type: "checkbox"}, label: {color: "additional"}}}
    };
    return (
        <Suspense fallback={<div>Завантаження...</div>}>
            <Modal className="w-full rounded-[32px] max-w-[328px] md:max-w-[660px] lg:max-w-[1076px]">
                <div className="p-4 md:p-6 md:pb-12 lg:p-[32px] lg:pb-14 ">
                    <Link href="/" className='ml-auto flex justify-end'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                    <path d="M2.3335 25.2495L25.249 2.33402" stroke="#D3D3D3" strokeWidth="3" strokeLinecap="round"/>
                                    <path d="M2.3335 2.3335L25.249 25.249" stroke="#D3D3D3" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </span>
                    </Link>
                    <div className="">
                        <Form fieldClassNames={CLASS_NAMES} className="" service={service || ""} />
                    </div>
                </div>
            </Modal>
        </Suspense>
    )
}

export default FormModalPage
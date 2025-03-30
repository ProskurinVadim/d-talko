"use client"
import {FC, Suspense} from "react";
import FormModal from "@/app/components/shared/FormModal";

const FormModalPage:FC<object> = () => {

    return (
        <Suspense fallback={<div>Завантаження...</div>}>
            <FormModal />
        </Suspense>
    )
}

export default FormModalPage
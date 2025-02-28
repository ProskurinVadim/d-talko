"use client"
import {FC, useState} from "react";
import { useRouter } from 'next/navigation'
import Button from "../../common/Button";
import FormItem from "@/app/components/shared/Form/FormItem";
import { VariantProps } from "tailwind-variants";
import { input, field, label } from "./FormItem/form-item.tailwind";

export interface FormField {
    id: string;
    title: string;
    type?: string;
}
interface Values {
    [key: string]: {
        value: string;
        checked?: boolean;
    }
}

export interface FieldClassNames { 
    [key: string]:  {
        className?: string;
        tlwVar?: {
            input?: VariantProps<typeof input>,
            field?: VariantProps<typeof field> 
            label?: VariantProps<typeof label>
        }
    }
}

interface Props {
    className?: string
    fieldClassNames: FieldClassNames
}
const Form:FC<Props> = ({fieldClassNames = {}, className = ""}) => {

    const router = useRouter();

    const DATA: FormField[] = [
              {id: 'name', title:"Ваше ім’я *"},
              {id: 'phone', title:"Ваш номер телефону *", type: "tel"},
              {id: 'serrvice', title:"Оберіть послугу *"},
              {id: 'comment', title:"Коментар", type: "select"},
              {id: 'checkbox', title:"Даю згоду на обробку персональних даних", type: "checkbox"},
    ]

    const [values, setValues] = useState<Values>({
        name: {value : ""}, phone: {value : "+380"}, comment: {value : ""},
        service: {value : ""}, checkbox: {value : "Agreement", checked: false}
    })

    const [error, setError] = useState<string>("");

    const onChange = (value: string, name: string) => {
        const handelSetValue = () => setValues(elem => ({...elem, [name]: {value}}));
        console.log(name, value.length)
        if(name === "phone") {
            if(value.length >= 4) handelSetValue();
        } else if (name=== "checkbox") {
            setValues(elem => ({...elem, checkbox: {...elem.checkbox,checked: !elem.checkbox.checked}}));
        } else {
            handelSetValue();
        }
    }

    const onSubmit = () => {
        console.log(values)
        if(values.name.value) setError("Имя")
        if(values.phone.value.length !== 11) setError("Телефон")
        if(values.checkbox.checked) setError("Чекбокс")
        if(error) {
            router.push('/modal/succes')
        } else {
            router.push('/modal/error')
        }
        console.log(error)
    };

    return(
        <div className={`d-flex flex-col ${className}`}>
            {DATA.map((elem,i) => <FormItem key={`form-item-${i}`} onChange={onChange} {...elem} {...values[elem.id]} {...fieldClassNames[elem.id]}/>)}
            <Button onClick={onSubmit} className="mt-8 w-full" tlwVar={{type: "inverse"}}>Надіслати</Button>
        </div>
    )
}

export default Form
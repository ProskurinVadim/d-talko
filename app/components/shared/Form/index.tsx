"use client"
import {FC, useState} from "react";
import { useRouter } from 'next/navigation'
import Button from "../../common/Button";
import FormItem from "@/app/components/shared/Form/FormItem";
import { VariantProps } from "tailwind-variants";
import { input, field, label } from "./FormItem/form-item.tailwind";
import SelectItem, { OPTIONS } from "./SelectItem";
import TextareaItem from "@/app/components/shared/Form/TextareaItem";
import CheckboxItem from "@/app/components/shared/Form/CheckboxItem";

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
    className?: string;
    fieldClassNames: FieldClassNames;
    service?: string;
}
const Form:FC<Props> = ({fieldClassNames = {}, className = "", service = ""}) => {

    const router = useRouter();

    const DATA: FormField[] = [
              {id: 'name', title:"Ваше ім’я *"},
              {id: 'phone', title:"Ваш номер телефону *", type: "tel"},
              {id: 'service', title:"Оберіть послугу *"},
              {id: 'comment', title:"Коментар"},
              {id: 'checkbox', title:"Даю згоду на обробку персональних даних", type: "checkbox"},
    ]

    const [values, setValues] = useState<Values>({
        name: {value : ""}, phone: {value : "+380"}, comment: {value : ""},
        service: {value : OPTIONS.find(elem => elem === service) || ""}, checkbox: {value : "Agreement", checked: false}
    })

    const [error, setError] = useState<string>("");

    const onChange = (value: string, name: string) => {
        const handelSetValue = () => setValues(elem => ({...elem, [name]: {value}}));
        console.log(name, value.length)
        if(name === "phone") {
            if(isNaN(Number(value))) return;
            if(value.length > 13) return;
            if(value.slice(0,4) !== "+380") return;
            handelSetValue();
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
            router.push('/modal/error')
        } else {
            router.push('/modal/succes')
        }
        console.log(error)
    };

    const generateField = (elem:FormField, i:number) => {
        switch (elem.id) {
            case 'service':
                return  <SelectItem key={`form-item-${i}`} onChange={onChange} {...elem} {...values[elem.id]} {...fieldClassNames[elem.id]}/>
            case 'comment':
                return <TextareaItem key={`form-item-${i}`} onChange={onChange} {...elem} {...values[elem.id]} {...fieldClassNames[elem.id]}/>
            case 'checkbox':
                return <CheckboxItem key={`form-item-${i}`} onChange={onChange} {...elem} {...values[elem.id]} {...fieldClassNames[elem.id]}/>
            default:
                return <FormItem key={`form-item-${i}`} onChange={onChange} {...elem} {...values[elem.id]} {...fieldClassNames[elem.id]}/>
        }
    }

    console.log(service,"++++")

    return(
        <div className={`flex flex-wrap justify-between ${className}`}>
            {DATA.map((elem,i) => generateField(elem, i))}
            <Button onClick={onSubmit} className="mt-8 w-full" tlwVar={{type: "inverse"}}>Надіслати</Button>
        </div>
    )
}

export default Form
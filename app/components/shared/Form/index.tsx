"use client"
import {FC, useState} from "react";
import { useRouter } from 'next/navigation'
import Button from "../../common/Button";
import FormItem from "@/app/components/shared/Form/FormItem";
import { VariantProps } from "tailwind-variants";
import { input, field, label } from "./FormItem/form-item.tailwind";
import SelectItem from "./SelectItem";
import TextareaItem from "@/app/components/shared/Form/TextareaItem";
import CheckboxItem from "@/app/components/shared/Form/CheckboxItem";

export interface FormField {
    id: string;
    title: string;
    type?: string;
    errorText?: string;
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
    const [error, setError] = useState<string[]>([]);
    const router = useRouter();

    const DATA: FormField[] = [
              {id: 'name', title:"Ваше ім’я *"},
              {id: 'phone', title:"Ваш номер телефону *", type: "tel"},
              {id: 'service', title:"Оберіть послугу *"},
              {id: 'comment', title:"Коментар"},
              {id: 'checkbox', title:"Даю згоду на обробку персональних даних", type: "checkbox"},
    ]

    const ERROR_TEXT: {[x:string]: string} = {
        name: "Лише кириличні символи.",
        phone: "Введіть правильний номер телефону.",
        service: "Треба обрати послугу",
        checkbox: " ",
        comment: "У тексті має бути не більше 500 символів.",

    }

    const [values, setValues] = useState<Values>({
        name: {value : ""}, phone: {value : "+380"}, comment: {value : ""},
        service: {value : service}, checkbox: {value : "Agreement", checked: false}
    })

    const handelSetError = (error:string[],value: string) => error.push(value);

    const getError = (name:string) => {
        const errorName = error.find(elem => elem === name);
        return errorName && ERROR_TEXT[errorName];
    }

    const onChange = (value: string, name: string) => {
        const handelSetValue = () => setValues(elem => ({...elem, [name]: {value}}));
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
        const err: string[] = [];
        if(!values.name.value.length) handelSetError(err,"name");
        if(values.phone.value.length !== 13) handelSetError(err,"phone");
        if(!values.checkbox.checked) handelSetError(err,"checkbox");
        if(!values.service.value) handelSetError(err,"service");
        if(values.comment.value.length > 500) handelSetError(err,"comment");
        if(err.length) {
            setError(err);
        } else {
            console.log("success")
            // Add logick for backend 
            //router.push('/modal/error')
            const subHref = window.location.href.includes("about") ? "/about/" : "/";
            router.push(`${subHref}modal/success`)
        }
        console.log(error)
    };

    const generateField = (elem:FormField, i:number) => {
        switch (elem.id) {
            case 'service':
                return <SelectItem errorText={getError(elem.id)} key={`form-item-${i}`} onChange={onChange} {...elem} {...values[elem.id]} {...fieldClassNames[elem.id]}/>
            case 'comment':
                return <TextareaItem errorText={getError(elem.id)} key={`form-item-${i}`} onChange={onChange} {...elem} {...values[elem.id]} {...fieldClassNames[elem.id]}/>
            case 'checkbox':
                return <CheckboxItem errorText={getError(elem.id)} key={`form-item-${i}`} onChange={onChange} {...elem} {...values[elem.id]} {...fieldClassNames[elem.id]}/>
            default:
                return <FormItem errorText={getError(elem.id)} key={`form-item-${i}`} onChange={onChange} {...elem} {...values[elem.id]} {...fieldClassNames[elem.id]}/>
        }
    }

    return(
        <div className={`flex flex-wrap justify-between ${className}`}>
            {DATA.map((elem,i) => generateField(elem, i))}
            <Button onClick={onSubmit} className="mt-8 !w-full" tlwVar={{type: "inverse"}}>Надіслати</Button>
        </div>
    )
}

export default Form
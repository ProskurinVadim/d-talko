import {FC} from 'react'
import {FormField} from "@/app/components/shared/Form";
import {field, input, label} from "./form-item.tailwind";
import { VariantProps } from 'tailwind-variants';

export interface Props extends  FormField{
    onChange: (value: string, name: string) => void;
    value: string;
    checked?: boolean;
    className?: string;
    tlwVar?: {
        input?: VariantProps<typeof input>,
        field?: VariantProps<typeof field> 
        label?: VariantProps<typeof label>
    }
}

const FormItem:FC<Props> = ({title, value, onChange, id, checked, type="text", className="", tlwVar={}}) => {
    const {
        field: tlwField = {type:"normal"}, 
        input: tlwInput = {type:"small"},
        label: tlwLabel = {color: "main"}
    } = tlwVar
    return (
        <div className={`${field(tlwField)} ${className}`}>
            <label className={label(tlwLabel)} htmlFor={id}>{title}</label>
            <input className={input(tlwInput)} onChange={(e) => onChange(e.target.value, id)} value={value} name={id} id={id} type={type} checked={checked}/>
        </div>
    )
}

export default FormItem;
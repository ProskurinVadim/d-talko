import {FC} from 'react'
import {FormField} from "@/app/components/shared/Form";
import {field, input, label} from "./form-item.tailwind";
import { VariantProps } from 'tailwind-variants';
import ErrorText from '../ErrorText';

export interface Props extends FormField{
    onChange: (value: string, name: string) => void;
    value: string;
    className?: string;
    tlwVar?: {
        input?: VariantProps<typeof input>;
        field?: VariantProps<typeof field>; 
        label?: VariantProps<typeof label>;
    }
}

const FormItem:FC<Props> = ({title, value, onChange, id, className="", type = 'text', tlwVar={}, errorText}) => {
    const {
        field: tlwField = {type:"normal"}, 
        input: tlwInput = {type:"small"},
        label: tlwLabel = {color: "main"}
    } = tlwVar
    return (
        <div className={`${field(tlwField)} ${className}`}>
            <label className={label(tlwLabel)} htmlFor={id}>{title}</label>
            <input className={`${input(tlwInput)} ${errorText ? "border-error": ""}`} onChange={(e) => onChange(e.target.value, id)} value={value} name={id} id={id} type={type}/>
            <ErrorText errorText={errorText} />
        </div>
    )
}

export default FormItem;
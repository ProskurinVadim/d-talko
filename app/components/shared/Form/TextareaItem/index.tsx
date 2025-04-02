import {FC} from 'react'
import {FormField} from "@/app/components/shared/Form";
import {field, input, label} from "../FormItem/form-item.tailwind";
import { VariantProps } from 'tailwind-variants';
import ErrorText from '../ErrorText';

export interface Props extends  FormField{
    onChange: (value: string, name: string) => void;
    value: string;
    className?: string;
    tlwVar?: {
        input?: VariantProps<typeof input>,
        field?: VariantProps<typeof field>
        label?: VariantProps<typeof label>
    }
}

const TextareaItem:FC<Props> = ({title, value, onChange, id, className="", tlwVar={}, errorText}) => {
    const {
        field: tlwField = {type:"normal"},
        input: tlwInput = {type:"small"},
        label: tlwLabel = {color: "main"}
    } = tlwVar
    return (
        <div className={`${field(tlwField)} ${className}`}>
            <label className={label(tlwLabel)} htmlFor={id}>{title}</label>
            <textarea className={input(tlwInput)} onChange={(e) => onChange(e.target.value, id)} value={value} name={id} id={id} />
            <ErrorText errorText={errorText} />
        </div>
    )
}

export default TextareaItem;
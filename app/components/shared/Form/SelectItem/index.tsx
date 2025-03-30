import {FC} from 'react'
import {FormField} from "@/app/components/shared/Form";
import {field, input, label} from "../FormItem/form-item.tailwind";
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
export const OPTIONS = ["консультація та діагностика","Дитяча хірургія та урологія", "лікування новоутворень", "видалення пухлин", "Профілактика", "Реабілітація"];

const SelectItem:FC<Props> = ({title, value, onChange, id, className="", tlwVar={}}) => {
    const {
        field: tlwField = {type:"normal"}, 
        input: tlwInput = {type:"small"},
        label: tlwLabel = {color: "main"}
    } = tlwVar

    return (
        <div className={`${field(tlwField)} ${className}`}>
            <label className={label(tlwLabel)} htmlFor={id}>{title}</label>
            <select className={input(tlwInput)} onChange={(e) => onChange(e.target.value, id)} value={value} name={id} id={id}>
                {OPTIONS.map((elem,i) => <option value={elem} key={`select-option-item-${i}`}>{elem}</option>)}
            </select>
        </div>
    )
}

export default SelectItem;
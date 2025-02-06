'use client';

import {FC} from 'react';
import Container from "@/app/components/shared/Container";
import Form, {FormField} from "../../shared/Form";
import useResponsiveValue from "@/app/lib/getWidth";
import SectionTitle from "../../common/SectionTitle";

const BookForm:FC<object> = () => {

    const DATA: FormField[] = [
        {id: 'name', title:"Ваше ім’я *", className: "",},
        {id: 'phone', title:"Ваш номер телефону *", type: "tel"},
        {id: 'comment', title:"Коментар", type: "select", tlwVar: {input:{type: "large"}}},
        {id: 'serrvice', title:"Оберіть послугу *",},
        {id: 'checkbox', title:"Даю згоду на обробку персональних даних", type: "checkbox", tlwVar: {field: {type: "reverse"}, input: {type: "checkbox"}, label: {color: "additional"}}},
    ]

    const image = useResponsiveValue('desktop', 'tablet', 'mobile');
    const style = image  !== "mobile" && {style:{"backgroundImage": `url(/book-form/bg-${image}.jpg`}}

    return(
        <section className='py-10 md:py-[65px] lg:pt-16 lg:pb-12'>
            <Container>
                <div {...style} className='bg-no-repeat bg-cover justify-center flex md:py-[60px] lg:justify-end lg:py-0'>
                    <div className="max-w-[660px] md:pt-16 md:pb-12 md:px-20 bg-white">
                        <SectionTitle className="text-center mb-10 mt:mb-12" tlwVar={{type:"small"}}>Записатись на консультацію</SectionTitle>
                        <Form data={DATA} className="w-full"/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default BookForm;
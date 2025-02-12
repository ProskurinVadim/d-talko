'use client';

import {FC} from 'react';
import Container from "@/app/components/shared/Container";
import Form, {FieldClassNames} from "../../shared/Form";
import useResponsiveValue from "@/app/lib/getWidth";
import SectionTitle from "../../common/SectionTitle";

const BookForm:FC<object> = () => {

    const CLASS_NAMES: FieldClassNames = {
        comment: {tlwVar: {input:{type: "large"}}},
        checkbox: {tlwVar: {field: {type: "reverse"}, input: {type: "checkbox"}, label: {color: "additional"}}}
    };

    const image = useResponsiveValue('desktop', 'tablet', 'mobile');
    const style = image  !== "mobile" && {style:{"backgroundImage": `url(/book-form/bg-${image}.jpg`}}

    return(
        <section className='py-10 md:py-[65px] lg:pt-16 lg:pb-12'>
            <div {...style} className='bg-no-repeat bg-cover rounded-2xl md:py-[60px] lg:py-0'>
                <Container className="flex justify-center lg:justify-end">
                    <div className="max-w-[660px] md:pt-16 md:pb-12 md:px-20 bg-white">
                        <SectionTitle className="text-center mb-10 mt:mb-12" tlwVar={{type:"small"}}>Записатись на консультацію</SectionTitle>
                        <Form fieldClassNames={CLASS_NAMES} className="w-full"/>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default BookForm;
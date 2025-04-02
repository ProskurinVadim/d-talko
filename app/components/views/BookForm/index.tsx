'use client';

import {FC} from 'react';
import Container from "@/app/components/shared/Container";
import Form, {FieldClassNames} from "../../shared/Form";
import useResponsiveValue from "@/app/lib/getWidth";
import SectionTitle from "../../common/SectionTitle";
import ImageContainer from "@/app/components/shared/ImageContainer";

const BookForm:FC<object> = () => {

    const CLASS_NAMES: FieldClassNames = {
        comment: {tlwVar: {input:{type: "large"}}},
        checkbox: {tlwVar: {field: {type: "reverse"}, input: {type: "checkbox"}, label: {color: "additional"}}}
    };

    const image = useResponsiveValue('desktop', 'tablet', 'mobile');
    const backgroundImage = image  !== "mobile" ? `/book-form/bg-${image}.jpg` : undefined;

    return(
        <section id="form" className="py-10 md:py-4">
            <ImageContainer backgroundImage={backgroundImage}>
                <Container className="md:py-[60px] lg:py-0">
                    <div className='flex justify-center lg:justify-end'>
                        <div className="max-w-[660px] md:pt-16 md:pb-12 md:px-20 bg-white rounded-xl bg-[-56px]">
                            <SectionTitle className="text-center mb-10 mt:mb-12" tlwVar={{type:"small"}}>Записатись на консультацію</SectionTitle>
                            <Form fieldClassNames={CLASS_NAMES} className="w-full"/>
                        </div>
                    </div>
                </Container>
            </ImageContainer>
        </section>
    )
}

export default BookForm;
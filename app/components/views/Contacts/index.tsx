"use client"
import {FC} from 'react';
import Container from "../../shared/Container/index"
import { Text, SectionTitle, Heading } from '../../common';
import { VariantProps } from 'tailwind-variants';
import { h3 } from '../../common/Heading/heading.tailwind';
import useResponsiveValue from '@/app/lib/getWidth';
import { Telegram, Viber } from '../../common/Icon';
import Link from 'next/link';
import ImageContainer from "@/app/components/shared/ImageContainer";

const Contacts:FC<object> = () => {

    const h3Tlw: VariantProps<typeof h3> = {type: "large", leading: "large", weight: "normal"};
    const image = useResponsiveValue('desktop', 'tablet', 'mobile');

    return (
        <section id="contacts">
            <ImageContainer className="h-[798px] md:h-[603px] lg:h-[726px] relative">
                <Link href="https://g.co/kgs/AziZHZR" className='bg-cover bg-no-repeat bg-top rounded-2xl cursor-pointer absolute top-0 left-0 right-0 bottom-0 h-[294px] md:h-full' style={{"backgroundImage": `url(./map/bg-${image}.jpg)`}}>
                </Link>
                <Container className='top-[308px] md:top-0 absolute right-0 left-0 md:right-auto z-[5]'>
                    <div className="cursor-auto bg-white md:bg-transparent text-center pt-[11px] pb-10 md:text-left md:py-[60px] md:px-[44px] md:w-[343px] lg:w-[550px] lg:p-20 ">
                        <SectionTitle tlwVar={{type:"large_smallest_mobile"}}>Контакти</SectionTitle>
                        <Heading tlwVar={h3Tlw} className='mb-2 mt-8 md:mt-14'>Телефон:</Heading>
                        <Text className="lg:text-xl">+380981333098</Text>
                        <Heading tlwVar={h3Tlw} className='mb-2 mt-7 lg:mt-8'>Адреса</Heading>
                        <Text className="lg:text-xl">Клініка “Mediland” - м. Київ, вул. Ростиславська 11б</Text>                            <Text className="mt-3 lg:text-xl">Київська міська дитяча лікарня - м. Київ, вул. Богатирська 30</Text>
                        <Heading tlwVar={h3Tlw} className='mb-2 mt-7 lg:mt-8'>Час роботи:</Heading>
                        <Text className='mt-3 lg:text-xl'>Пн - Пт: з 10:00 до 19:00 </Text>
                        <Heading tlwVar={h3Tlw} className='mb-4 mt-7 lg:mt-8'>Напишіть нам:</Heading>
                        <span className="flex justify-center md:justify-start">
                            <Viber />
                            <Telegram />
                        </span>
                    </div>
                </Container>
            </ImageContainer>
        </section>
    )
}

export default Contacts;
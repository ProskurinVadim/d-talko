import {FC} from 'react';
import Container from "../../shared/Container/index"
import { Text, SectionTitle, Heading, Icon } from '../../common';
import { VariantProps } from 'tailwind-variants';
import { h3 } from '../../common/Heading/heading.tailwind';
import Map from "./Map";

const Contacs:FC<object> = () => {

    const h3Tlw: VariantProps<typeof h3> = {type: "large", leading: "large", weight: "normal"};

    return (
        <section>
            <Container>
                <div className="flex flex-col-reverse md:flex-col relative">
                    <div className="bg-white z-10 left-[-1px] top-[-1px] text-center pt-[11px] pb-10 md:text-left md:py-[60px] md:px-[44px] md:absolute md:w-[343px] lg:w-[550px] lg:p-20 ">
                        <SectionTitle tlwVar={{type:"large"}}>Контакти</SectionTitle>
                        <Heading tlwVar={h3Tlw} className='mb-2 mt-8 md:mt-14'>Телефон:</Heading>
                        <Text className="lg:text-xl">+380981333098</Text>
                        <Heading tlwVar={h3Tlw} className='mb-2 mt--7 lg:mt-8'>Адреса</Heading>
                        <Text className="lg:text-xl">Клініка “Mediland” - м. Київ, вул. Ростиславська 11б</Text>
                        <Text className="mt-3 lg:text-xl">Київська міська дитяча лікарня - м. Київ, вул. Богатирська 30</Text>
                        <Heading tlwVar={h3Tlw} className='mb-2 mt-7 lg:mt-8'>Час роботи:</Heading>
                        <Text className='mt-3 lg:text-xl'>Пн - Пт: з 10:00 до 19:00 </Text>
                        <Heading tlwVar={h3Tlw} className='mb-4 mt-7 lg:mt-8'>Напишіть нам:</Heading>
                        <span className="flex justify-center md:justify-start">
                            <Icon className="mr-3" src="viber" />
                            <Icon src="telegram" />
                        </span>
                    </div>
                    <Map />
                </div>
            </Container>
        </section>
    )
}

export default Contacs;
'use client';

import { FC } from "react";
import ConsultButton from "@/app/components/shared/ConsultButton";
import Container from "@/app/components/shared/Container";
import useResponsiveValue from "@/app/lib/getWidth";
import SectionTitle from "../../common/SectionTitle";
import ImageContainer from "@/app/components/shared/ImageContainer";

const Header:FC<object> = () => {

    const image = useResponsiveValue('desktop', 'tablet', 'mobile');

    return (
        <header className='pt-[72px] md:pt-[88px] lg:pt-[99px]'>
            <ImageContainer backgroundImage={`./header/bg-${image}.jpg`}>
                <Container>
                    <div className="pt-[342px] pb-4 text-center
                         md:pt-[111px] md:pb-[110px] md:max-w-[301px] md:text-left
                         lg:pt-[141px] lg:pb-[140px] lg:max-w-[550px]
                         "
                    >
                        <SectionTitle tlwVar={{type: "large", color: "main_dark"}}>
                            Подбайте про здоров&#39;я шкіри зараз!
                        </SectionTitle>
                        <p className="text-additional leading-[140%]
                            text-[12px] mt-2 mb-[40px]
                            md:text-sm md:mt-4
                            lg:text-lg lg:mt-6 lg:mb-16"
                        >
                            Запишіться на консультацію та отримайте персоналізований план лікування від досвідченого
                            онкодерматолога.
                        </p>
                        <ConsultButton href="#form" inverse={true} />
                    </div>
                </Container>
            </ImageContainer>
        </header>
    )
}

export default Header
'use client';

import { FC } from "react";
import ConsultButton from "@/app/components/shared/ConsultButton";
import Container from "@/app/components/shared/Container";
import useResponsiveValue from "@/app/lib/getWidth";
import SectionTitle from "../../common/SectionTitle";

const Header:FC<object> = () => {

    const image = useResponsiveValue('desktop', 'tablet', 'mobile');

    return (
        <header>
            <Container>
                <div className="relative bg-cover bg-no-repeat bg-top" style={{"backgroundImage": `url(./header/bg-${image}.jpg)`}}>
                    <div className="pt-[342px] pb-4 ml-[6px] text-center relative
                         md:pt-[111px] md:pb-[110px] md:max-w-[301px] md:text-left
                         lg:pt-[141px] lg:pb-[140px] lg:ml-20 lg:max-w-[550px]"
                    >
                        <SectionTitle tlwVar={{type: "large"}}>
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
                        <ConsultButton inverse={true}/>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
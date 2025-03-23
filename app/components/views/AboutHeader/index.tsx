"use client"

import {FC} from "react";
import Link from "next/link";
import Container from "@/app/components/shared/Container";
import {CheckIcon, SectionTitle, Text} from "../../common/";
import ConsultButton from "@/app/components/shared/ConsultButton";
import useResponsiveValue from "@/app/lib/getWidth";
import ImageContainer from "@/app/components/shared/ImageContainer";

const AboutHeader:FC<object> = () => {

    const image = useResponsiveValue('desktop', 'tablet', 'mobile');


    const textClassName = "flex items-center";
    return (
        <header className='pt-[72px] md:pt-[88px] lg:pt-[99px]'>
            <Container>
                <Text className="hidden lg:inline-block"
                      tlwVar={{type: "normal", color: "main", leading: "smallest"}}>
                    <Link href="/">Головна / </Link>
                    <span className='font-semibold'>Про лікаря</span>
                </Text>
            </Container>
            <ImageContainer className="relative bg-contain bg-no-repeat bg-top rounded-2xl" backgroundImage={`./header/bg-${image}.jpg`}>
                <Container>
                    <div className="pt-[353px] pb-10 md:py-[86px] lg:py-[75px]">
                        <Text tlwVar={{type: "medium", color: "light_green", leading: "smallest"}}>
                            Дерматохірург
                        </Text>
                        <SectionTitle className="mt-2" tlwVar={{type: "large"}}>
                            Максим Талько
                        </SectionTitle>
                        <Text tlwVar={{type: "normal", leading: "normal"}} className={`mt-[22px] md:mt-14 ${textClassName}`}>
                            <CheckIcon /> Член Європейської асоціації дитячих хірургів
                        </Text>
                        <Text tlwVar={{type: "normal", leading: "normal"}} className={`mt-4 ${textClassName}`}>
                            <CheckIcon /> Віддає перевагу радіохвильовій та лазерній корекції патологій
                        </Text>
                        <Text tlwVar={{type: "normal", leading: "normal"}} className={`mt-4 ${textClassName}`}>
                            <CheckIcon /> Керується національними та міжнародними протоколами лікування
                        </Text>
                        <Text tlwVar={{type: "normal", leading: "normal"}} className={`mt-4 ${textClassName}`}>
                            <CheckIcon /> Спеціалізується на лікуванні судинних аномалій, рубців і пухлин шкіри
                        </Text>
                        <ConsultButton className="mt-8 md:mt-14 " inverse={true}/>
                    </div>
                </Container>
            </ImageContainer>
        </header>
    )
}

export default AboutHeader;
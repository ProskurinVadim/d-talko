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
                <Text className="hidden lg:inline-block py-6"
                      tlwVar={{type: "normal", color: "main", leading: "smallest"}}>
                    <Link href="/" className="text-link_unactive">Головна / </Link>
                    <span className='font-semibold'>Про лікаря</span>
                </Text>
            </Container>
            <ImageContainer backgroundImage={`./header-about/bg-${image}.jpg`}>
                <Container>
                    <div className="pt-[353px] pb-10 md:max-w-[334px] md:py-[86px] lg:py-[75px] lg:max-w-[596px]">
                        <Text tlwVar={{type: "medium", color: "light_green", leading: "smallest"}} className="font-bold">
                            Дерматохірург
                        </Text>
                        <SectionTitle className="mt-2" tlwVar={{type: "largest"}}>
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
                        <Text tlwVar={{type: "normal", leading: "normal"}} className={`mt-4 ${textClassName} lg:max-w-[560px]`}>
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
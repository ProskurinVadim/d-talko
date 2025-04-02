"use client"
import { FC } from "react";
import ConsultButton from "@/app/components/shared/ConsultButton";
import Container from "@/app/components/shared/Container";
import useResponsiveValue from "@/app/lib/getWidth";
import SectionTitle from "../../common/SectionTitle";
import ImageContainer from "@/app/components/shared/ImageContainer";
const Banner:FC<object> = () => {
    const image = useResponsiveValue('desktop', 'tablet', 'mobile');
    return(
        <section>
            <ImageContainer className="md:py-[125px] lg:py-[179px]" backgroundImage={`./banner/bg-${image}.jpg`}>
                <Container>
                    <div className="pt-[300px] md:pt-0 ">
                        <SectionTitle className="mt-8 md:mt-0  md:w-[430px] lg:w-[596px] md:!leading-title_small lg:!leading-title" tlwVar={{position: "center", type: "large"}}>
                            Почни лікування сьогодні!
                        </SectionTitle>
                    </div>
                    <p className="text-additional !leading-description mt-4 text-center mb-8 text-sm
                       md:w-[330px] md:mb-[56px] md:tracking-[-0.42px] md:text-left
                       lg:w-[525px] lg:text-lg lg:mt-6 lg:mb-[64px] lg:tracking-[-0.54px]
                    ">
                        Запишіться на консультацію та отримайте персоналізований план лікування від досвідченого онкодерматолога.
                    </p>
                    <ConsultButton href="#form" inverse={true}/>
                </Container>
            </ImageContainer>
        </section>
    )
}

export default Banner
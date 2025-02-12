"use client"
import { FC } from "react";
import ConsultButton from "@/app/components/shared/ConsultButton";
import Container from "@/app/components/shared/Container";
import useResponsiveValue from "@/app/lib/getWidth";
import SectionTitle from "../../common/SectionTitle";
const Banner:FC<object> = () => {
    const image = useResponsiveValue('desktop', 'tablet', 'mobile');
    return(
        <section>
            <div className="relative bg-cover bg-no-repeat rounded-2xl md:py-[125px] lg:py-[179px]" style={{"backgroundImage": `url(./banner/bg-${image}.jpg)`}}>
                <Container>
                    <SectionTitle className="pt-[316px] md:pt-0 md:w-[430px] lg:w-[596px]" tlwVar={{position: "center", type: "large"}}>
                        Почни лікування сьогодні!
                    </SectionTitle>
                    <p className="text-additional leading-description

                       md:w-[330px] md:text-base md:mt-4 md:mb-[56px]
                       lg:w-[525px] lg:text-lg lg:mt-6 lg:mb-[64px]
                    ">
                        Запишіться на консультацію та отримайте персоналізований план лікування від досвідченого онкодерматолога.
                    </p>
                    <ConsultButton />
                </Container>
            </div>
        </section>
    )
}

export default Banner
"use client"
import {FC} from "react";
import Container from "@/app/components/shared/Container";
import {SectionTitle, Text, CheckIcon} from "@/app/components/common";
import ConsultButton from "@/app/components/shared/ConsultButton";
import useResponsiveValue from "@/app/lib/getWidth";

const Specialization:FC<object> = () => {

    const image = useResponsiveValue('desktop', 'tablet', 'mobile');

    const text = [
        "Всі види рубців","Судинні новоутворення",
        "Хронічні рани та трофічні виразки",
        "Мальформації шкіри та мʼяких тканин",
        "Дитячі хірургічні та урологічні захворювання",
        "Доброякісні та злоякісні новоутворення шкіри та мʼяких тканин"
     ]
    return (
        <section>
            <div className="bg-contain bg-no-repeat bg-top pt-[319px] pb-10 md:py-[60px] rounded-2xl" style={{"backgroundImage": `url(./specialization/bg-${image}.jpg)`}}>
                <Container className="flex justify-center md:justify-end">
                    <div className="md:max-w-[493px]">
                        <Text tlwVar={{leading: "smallest", color: "light_green"}} className="text-sm mt-[19px] font-semibold">Ваше здоров&#39;я — моя спеціалізація!</Text>
                        <SectionTitle tlwVar={{type:"semi_large", color: "main_dark"}} className="mt:mt-2 md:mt-3">Що я лікую?</SectionTitle>
                        <ul className="my-8 md:mb-10 lg:mt-12 lg:mb-14">
                            {text.map((elem,i) =>
                                <li key={`specialization-list-item-${i}`} className="flex items-center">
                                    <CheckIcon /><Text tlwVar={{type: "normal", leading: "smallest"}} className="mt-4 lg:mt-5">{elem}</Text>
                                </li>
                            )}
                        </ul>
                        <ConsultButton inverse={true}/>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Specialization;
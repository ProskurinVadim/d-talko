"use client"
import { FC, useState, useEffect } from "react";
import Container from "../../shared/Container";
import Carousel, {CarouselItem} from "../../shared/Carousel";
import {Button, SectionTitle, Text} from "../../common";
import { EDUCATION, EXPERIENCE } from "./data.constants";
import SummaryItem from "./SummaryItem";
import Pagination from "../../shared/Pagination";
import {getWidth} from "@/app/lib/getWidth";

const Summary:FC<object> = () => {
    const [page, setPage] = useState<number>(0);
    const [maxPage, setMaxPage] = useState<number>(0);
    const [maxEducationItems, setEducationMaxItems] = useState<number>(0);
    const [maxExperienceItems, setExperienceMaxItems] = useState<number>(0);

    useEffect(() => {
        const response = getWidth("d","t","m") as string;
        if(response === 'd') {
            setMaxPage(0)
        } else {
            setMaxPage(1)
        }
        if(response === 'm') {
            setExperienceMaxItems(3);
            setEducationMaxItems(3)
        } else  {
            setEducationMaxItems(EDUCATION.length);
            setExperienceMaxItems(EXPERIENCE.length);
        }
    },[])

    const expand = () => {
        if(page === 0) {
            setEducationMaxItems(maxEducationItems === EDUCATION.length ? 3 : EDUCATION.length);
        } else {
            setExperienceMaxItems(maxExperienceItems === EXPERIENCE.length ? 3 : EXPERIENCE.length);
        }
    }
    return (
        <section className="py-10 md:py-[60px] lg:pt-[100px] lg:pb-20 bg-additional_inverse text-center">
            <Container>
                <SectionTitle tlwVar={{type: "normal_large", color: "main_dark"}} className="leading-[120%]">Освіта та карʼєра</SectionTitle>
                <Text tlwVar={{color: "additional_light", type: "medium", leading: "smallest"}} className="mt-4 mx-auto md:max-w-[452px] lg:max-w-full">Професійна допомога в діагностиці та лікуванні шкірних новоутворень</Text>
                <Carousel index={page} className="gap-8 mt-8 md:mt-14 lg:mt-16">
                    <CarouselItem className="w-full lg:w-1/2 flex justify-center">
                        <div className="py-6 px-4 md:py-12 md:px-10 bg-white max-w-[592px] rounded-[12px]">
                            <SectionTitle className="font-bold mb-6 md:mb-8" tlwVar={{color: "main_light", type: "smallest"}}>Освіта</SectionTitle>
                            <ul className="border-t border-solid border-main_inverse_light pt-6 md:pt-8 flex flex-col gap-[18px] md:gap-6">
                                {EDUCATION.slice(0,maxEducationItems).map((elem, i) =>
                                    <SummaryItem key={`summary-education-item-${i}`} {...elem}/>
                                )}
                            </ul>
                            <Button onClick={expand} className="mt-6 md:hidden">
                                {maxEducationItems === EDUCATION.length ? 'Згорнути' : 'Розгорнути'}
                            </Button>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="w-full lg:w-1/2 flex justify-center">
                        <div className="py-6 px-4 md:py-12 md:px-10 bg-white max-w-[592px] rounded-[12px]">
                            <SectionTitle className="font-bold mb-6 md:mb-8" tlwVar={{color: "main_light", type: "smallest"}}>Карʼєра</SectionTitle>
                            <ul className="border-t border-solid border-main_inverse_light pt-6 md:pt-8 flex flex-col gap-[18px] md:gap-6">
                                {EXPERIENCE.slice(0,maxExperienceItems).map((elem, i) =>
                                    <SummaryItem key={`summary-education-item-${i}`} {...elem}/>
                                )}
                            </ul>
                            <Button onClick={expand} className="mt-6 md:hidden">
                                {maxExperienceItems === EXPERIENCE.length ? 'Згорнути' : 'Розгорнути'}
                            </Button>
                        </div>
                    </CarouselItem>
                </Carousel>
                <Pagination className="flex justify-center mt-8 md:mt12 lg:hidden" setPage={setPage} page={page} maxPages={maxPage}/>
            </Container>
        </section>
    )
}

export default Summary
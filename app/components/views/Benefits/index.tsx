"use client"
import { FC, useState, useEffect } from "react";
import {DATA} from "./data";
import BenefitItem from "./BenefitItem";
import Pagination from "../../shared/Pagination";
import Container from "@/app/components/shared/Container";
import Carousel,{CarouselItem} from "@/app/components/shared/Carousel";
import SectionTitle from "../../common/SectionTitle";
import {getWidth} from "@/app/lib/getWidth";

const Benefits: FC<object> = () => {
    const [page,setPage] = useState<number>(0);
    const [maxPage, setMaxPage] = useState<number>(0);
    useEffect(() => {
        const num = getWidth(4,3,1) as number;
        setMaxPage((DATA.length/num) - 1);
    },[])
    return (
        <section className="py-10 md:py-[60px] lg:py-[100px]">
            <Container>
                <div className="flex items-center justify-center md:justify-between">
                    <SectionTitle className="max-w-[328px] md:max-w-[397px] lg:max-w-[600px]" tlwVar={{position: "center"}}>
                        Чому варто звернутись саме до мене?
                    </SectionTitle>
                    <Pagination page={page} setPage={setPage} maxPages={maxPage} className="hidden md:flex" />
                </div>
                <Carousel index={page} containerClassName="mt-8 md:mt-[55.5px] lg:mt-[67px]">
                    {DATA.map((elem, i) =>
                        <CarouselItem className="pr-4 w-[100%] md:w-[33.3%] lg:w-[25%]" key={`carousel-benefit-item-${i}`} >
                            <BenefitItem {...elem} />
                        </CarouselItem>
                    )}
                </Carousel>
                <div className="w-fit mx-auto mt-8">
                    <Pagination page={page} setPage={setPage} maxPages={maxPage} className="flex md:hidden" />
                </div>
            </Container>
        </section>
    )
}

export default Benefits;
"use client"
import {FC, useState, useEffect} from "react";
import Pagination from "../../shared/Pagination";
import {DATA} from "./data";
import ReviewItem from "./ReviewItem";
import {getWidth} from "@/app/lib/getWidth";
import Carousel,{CarouselItem} from "@/app/components/shared/Carousel";
import Container from "@/app/components/shared/Container";
import SectionTitle from "../../common/SectionTitle";

const Reviews:FC<object> = () =>  {
    const [page, setPage] = useState<number>(0);
    const [maxPage, setMaxPage] = useState<number>(0);
    useEffect(() => {
        const num = getWidth(3,2,1) as number;
        setMaxPage ((DATA.length/num) - 1);
    },[])
    return (
        <section className="py-10 md:pt-[69px] md:pb-[60px] lg:pt-[100px] lg:pb-[80px]" id="reviews">
            <Container>
                <div className="flex justify-center items-center md:justify-between">
                    <SectionTitle>
                        Відгуки
                    </SectionTitle>
                    <Pagination className="hidden md:flex" page={page} setPage={setPage} maxPages={maxPage}/>
                </div>
                <Carousel index={page} className="mt-8 md:mt-14 lg:my-16">
                    {DATA.map((elem,i) =>
                        <CarouselItem key={`carousel-review-item-${i}`} className="pr-6 w-[100%] md:w-[50%] lg:w-[33.3%]">
                            <ReviewItem {...elem} />
                        </CarouselItem>
                    )}
                </Carousel>
                <Pagination className="flex justify-center mt-6 md:hidden" page={page} setPage={setPage} maxPages={maxPage}/>
            </Container>
        </section>
    )
}

export default Reviews;
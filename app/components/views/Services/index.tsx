import {FC} from "react";
import {DATA} from "./data";
import ServiceItem from "./ServiceItem";
import Container from "@/app/components/shared/Container";
import SectionTitle from "../../common/SectionTitle";

const Services: FC<object> = () => {
    return (
        <section className="bg-additional_inverse py-10 md:py-[60px] lg:py-[100px]">
            <Container>
                <SectionTitle>Наші послуги</SectionTitle>
                <p className="text-additional_light leading-[120%] mt-3 mb-10 text-sm
                md:max-w-[452px] mt:mt-4 md:mb-12 md:text-base
                lg:text-lg lg:mb-16 lg:max-w-full"
                >
                    Професійна допомога в діагностиці та лікуванні шкірних новоутворень
                </p>
                <ul className="flex flex-wrap justify-center gap-6 ">
                    {DATA.map((elem, i) => <ServiceItem key={`service-item-${i}`} {...elem} />)}
                </ul>
            </Container>
        </section>
    )
}

export default Services
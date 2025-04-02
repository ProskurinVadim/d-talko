"use client"
import {FC, useState} from "react";
import ContactTelegram from "@/app/components/views/Answers/ContacTelegram";
import {DATA} from "./data";
import AnswerItem from "./AnswerItem";
import Container from "@/app/components/shared/Container";
import SectionTitle from "../../common/SectionTitle";

const Answer:FC<object> = () => {

    const [open,setOpen] = useState<string>(DATA[0].id)

    return (
        <section className="py-10 md:py-[60px] lg:pt-[80px] lg:pb-[100px]" id="faq">
            <Container>
                <div className="flex flex-col items-center gap-6 lg:justify-between lg:flex-row ">
                    <div className="flex flex-col md:self-baseline lg:self-center">
                        <SectionTitle className="text-center md:text-left md:max-w-[397px] lg:max-w-[493px]">
                            Відповіді на поширені запитання
                        </SectionTitle>
                        <ContactTelegram className="text-left hidden lg:block mt-[216px]"/>
                    </div>
                    <ul className="flex flex-col gap-3 max-w-[596px]">
                        {DATA.map((elem,i) =>
                            <AnswerItem setOpen={setOpen} key={`answer-item-${i}`} {...elem} isOpen={elem.id === open}/>
                        )}
                    </ul>
                    <ContactTelegram className="text-center lg:hidden"/>
                </div>
            </Container>
        </section>
    )
}

export default Answer;
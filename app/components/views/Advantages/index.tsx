import {FC} from "react";
import AdvantageItem, {Item} from "./AdvantageItem";
import Container from "@/app/components/shared/Container";
import AdvantagesButton from "@/app/components/views/Advantages/AdvantageButton";

const Advantages: FC<object> = () => {
    const DATA: Item[] = [
        {
            icon: "./pluse-icon.svg",
            title: "Досвід роботи 10+ років",
            description: "з яких 4 роки присвячено онкодерматології та дерматохірургії."
        },
        {
            icon: "./pluse-icon.svg",
            title: "виліковано 4000+ пацієнтів",
            description: "успішно вилікували понад 400 пацієнтів завдяки реабілітації."
        },
        {
            icon: "./square-icon.svg",
            title: "Кандидат медичних наук",
            description: "автор понад 20 наукових праць та методичних рекомендацій.",
            selected: true
        }
    ]
    return (
        <section className="my-10 md:my-[60px] lg:my-20" id="advantages">
            <Container>
                <ul className="flex flex-wrap gap-4 lg:gap-5 lg:flex-nowrap">
                    {DATA.map((elem, i) => <AdvantageItem key={`advantage-item-${i}`} {...elem} />)}
                </ul>
                <AdvantagesButton />
            </Container>
        </section>
    )
}

export default Advantages
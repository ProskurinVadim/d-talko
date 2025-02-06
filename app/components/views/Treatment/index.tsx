import {FC} from "react";
import Image from "next/image";
import {DATA} from "./data";
import TreatmentItem from "./TreatmentItem";
import Button from "../../common/Button";
const Treatment:FC<never> = () => {
    return (
        <section>
            <Image src={"./header-bg"} alt="Tretment Image"/>
            <div>
                <p>Ваше здоров&#39;я — моя спеціалізація!</p>
                <h2>Що я лікую?</h2>
                <ul>
                    {DATA.map((elem,i) => <TreatmentItem text={elem.text} key={`treatment-item-${i}`}/>)}
                </ul>
                <Button onClick={() => null}>Записатись на консультацію</Button>
            </div>
        </section>
    )
}
export default Treatment;
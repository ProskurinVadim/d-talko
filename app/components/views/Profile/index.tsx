import {FC} from 'react';
import ProfileItem from './ProfileItem';
import {EDUCATION, EXPERIENCE} from "./data";

const Profile: FC<never> = () => {
    return (
        <section>
            <h2>Освіта та карʼєра</h2>
            <p>Професійна допомога в діагностиці та лікуванні шкірних новоутворень</p>
            <div>
                {EDUCATION.map((elem,i) => <ProfileItem {...elem} key={`education-item-${i}`}/>)}
            </div>
            <div>
                {EXPERIENCE.map((elem,i) => <ProfileItem {...elem} key={`experience-item-${i}`}/>)}
            </div>
        </section>
    )
}

export default Profile
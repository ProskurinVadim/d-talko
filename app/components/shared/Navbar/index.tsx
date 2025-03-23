import { FC } from "react";
import Logo from "../../common/Logo";
import ConsultButton from "@/app/components/shared/ConsultButton";
import Container from "@/app/components/shared/Container";
import NavbarMobile from "@/app/components/shared/Navbar/NavbarMobile";

export interface Link {
    text: string;
    href: string
}

export const NAVBAR_LINKS_DATA: Link[] = [
    {text: "Про Лікаря", href:"#about"},
    {text: "Послуги", href:"#services"},
    {text: "Переваги", href:"#advantages"},
    {text: "Відгуки", href:"#reviews"},
    {text: "FAQ", href:"#faq"},
    {text: "Контакти", href:"#contacts"},
];

const Navbar: FC<object> = () => {
    return(
        <nav className="fixed w-full bg-white z-[10000]">
            <Container className="">
                <div className='flex justify-between py-6 items-center flex-wrap lg:flex-nowrap '>
                <Logo />
                <ul className="hidden lg:flex">
                    {NAVBAR_LINKS_DATA.map((elem,i) =>
                        <li className="mx-8 text-sm text-main" key={`navbar-item-${i}`}>{elem.text}</li>
                    )}
                </ul>
                <ConsultButton className="hidden lg:block"/>
                <NavbarMobile />
                </div>
            </Container>
        </nav>
    )
}

export default Navbar
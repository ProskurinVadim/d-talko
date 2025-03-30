import { FC } from "react";
import Logo from "../../common/Logo";
import ConsultButton from "@/app/components/shared/ConsultButton";
import Container from "@/app/components/shared/Container";
import NavbarMobile from "@/app/components/shared/Navbar/NavbarMobile";
import Link from "next/link";

export interface Link {
    text: string;
    href: string
}

export const NAVBAR_LINKS_DATA: Link[] = [
    {text: "Про Лікаря", href:"/about"},
    {text: "Послуги", href:"/#services"},
    {text: "Переваги", href:"/#advantages"},
    {text: "Відгуки", href:"/#reviews"},
    {text: "FAQ", href:"/#faq"},
    {text: "Контакти", href:"/#contacts"},
];

const Navbar: FC<object> = () => {
    return(
        <nav className="fixed w-full bg-white z-10">
            <Container className="">
                <div className='flex justify-between py-6 items-center flex-wrap lg:flex-nowrap '>
                    <Link href="/"><Logo /></Link>
                    <ul className="hidden lg:flex">
                        {NAVBAR_LINKS_DATA.map((elem,i) =>
                            <Link href={elem.href}
                                  className="mx-8 text-sm text-main relative group"
                                  key={`navbar-item-${i}`}>
                                {elem.text}
                                <span
                                    className="absolute left-0 bottom-0 h-0.5 w-full bg-main scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>

                            </Link>
                        )}
                    </ul>
                    <ConsultButton className="hidden lg:block"/>
                    <NavbarMobile/>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar
"use client"
import {FC, useState} from "react";
import Image from "next/image";
import {NAVBAR_LINKS_DATA} from "@/app/components/shared/Navbar";
import ConsultButton from "@/app/components/shared/ConsultButton";
const NavbarMobile:FC<object> = () => {
    const [open,setOpen] = useState<boolean>(false);

    return (
        <>
            <span className="lg:hidden" onClick={() => setOpen(prev => !prev)}>
                {!open
                    ? <Image width="24" height="24" alt="Burger menu" src="./burger-menu.svg"/>
                    : <Image width="24" height="24" alt="Burger menu" src="./close-icon.svg"/>
                }
            </span>
            <input checked={open} type="checkbox" className="hidden peer" onChange={()=>null}/>
            <div className={`h-0 scale-0 opacity-0 mx-auto w-full transition duration-300 peer-checked:scale-100 peer-checked:opacity-100 peer-checked:h-full peer-checked:pointer-events-auto lg:hidden`}>
                <ul className="flex flex-col items-center mt-[105px] mb-[100px] md:mt-24 md:mb-[120px]">
                    {NAVBAR_LINKS_DATA.map((elem, i) =>
                        <li className="mt-4 md:mt-8 md:text-2xl font-semibold text-main"
                            key={`navbar-item-${i}`}>{elem.text}</li>
                    )}
                </ul>
                <div className="flex flex-wrap items-center justify-center gap-8">
                    <ConsultButton className="md:max-w-[328px]"/>
                    <div className="flex items-center md:mt-0">
                        <p className="text-sm ml-4">Напишіть нам:</p>
                        <Image className="ml-3" src="./telegram-icon.svg" alt="Message Telegram" width="36"
                               height="36"/>
                        <Image src="./viber-icon.svg" alt="Message Viber" width="36" height="36"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarMobile;
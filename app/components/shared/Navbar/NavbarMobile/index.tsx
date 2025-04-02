"use client"
import {FC, useState} from "react";
import Image from "next/image";
import {NAVBAR_LINKS_DATA} from "@/app/components/shared/Navbar";
import ConsultButton from "@/app/components/shared/ConsultButton";
import { Telegram, Viber } from "../../../common/Icon";
const NavbarMobile:FC<object> = () => {
    const [open,setOpen] = useState<boolean>(false);

    return (
        <>
            <span className="lg:hidden" onClick={() => setOpen(prev => !prev)}>
                {!open
                    ? <Image className="md:w-8 md:h-6" width="19" height="14" alt="Open burger menu" src="./burger-menu.svg"/>
                    : <Image className="md:w-8 md:h-6" width="19" height="14" alt="Close burger menu" src="./close-icon.svg"/>
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
                        <p className="text-sm mr-4">Напишіть нам:</p>
                        <Telegram className="ml-3" />
                        <Viber />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarMobile;
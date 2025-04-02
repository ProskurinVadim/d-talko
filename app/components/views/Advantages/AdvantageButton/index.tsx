'use client';
import {FC} from 'react'
import Button from "@/app/components/common/Button";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'

const AdvantageButton:FC<object> = () => {
    const router = useRouter();
    const pathname = usePathname()
    console.log(pathname)

    return(
        pathname === "/about" ? <></> 
        : <Button className="mx-auto mt-8 w-full md-w-[246px] md:mt-10  lg:mt-[52px]" onClick={()=>  router.push('/about')}>Детальніше про лікаря</Button>
    )
}

export default AdvantageButton;
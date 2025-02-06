'use client';
import {FC} from 'react'
import Button from "@/app/components/common/Button";
import { useRouter } from 'next/navigation';

const AdvantageButton:FC<object> = () => {
    const router = useRouter();
    return(
        <Button className="block  mx-auto mt-8 md:mt-10 lg:mt-[52px]" onClick={()=>  router.push('/about')} tlwVar={{type: "inverse"}}>Детальніше про лікаря</Button>
    )
}

export default AdvantageButton;
"use state"
import {FC,useState} from "react";
import Arrow from "./Arrow";
interface Props {
    className?: string,
    page: number;
    maxPages: number;
    setPage: (page: number) => void;
}

const Pagination:FC<Props> = ({setPage, page, maxPages, className="flex"}) => {
    const [anim, setAnim] = useState(false);


    const onNext = () => {
        if(anim) return
        if(page < maxPages) setPage(page+1);
        // else setPage(0);
        setAnim(() => true)
        setTimeout(() => setAnim(() => false), 500)
    }
    const onPrev = () => {
        if(anim) return
        if(page !== 0) setPage(page-1);
        // else setPage(maxPages);
        setAnim(() => true)
        setTimeout(() => setAnim(() => false), 500)
    }

    return (
        <div className={`${className}`}>
            <span onClick={onPrev} className={`h-12 w-12 border-[1.5px] flex items-center justify-center rounded-lg mr-3
                md:w-14 md:h-14  md:mr-4 ${page !== 0 ? 'border-main cursor-pointer' : 'border-main_light'} `
            }>
                <Arrow stroke={page !== 0 ? '#226A60' : 'rgba(48, 134, 123, 0.56)'} className={`rotate-180 $`} />
            </span>
            <span onClick={onNext} className={`h-12 w-12  border-[1.5px] flex items-center justify-center rounded-lg
                md:w-14 md:h-14 border-main ${page !== maxPages ? 'border-main cursor-pointer' : 'border-main_light'}`
            }>
                <Arrow stroke={page !== maxPages ? '#226A60' : 'rgba(48, 134, 123, 0.56)'}  />
            </span>
        </div>
    )
}

export default Pagination;
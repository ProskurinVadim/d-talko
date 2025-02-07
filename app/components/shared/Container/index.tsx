import {FC,ReactNode} from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const Component: FC<Props> = ({children, className=""}) => (
    <div className={`box-content max-w-[1216px] m-auto px-4 md:px-8 lg:px-10 w-full ${className}`}>
        {children}
    </div>
)

export default Component;
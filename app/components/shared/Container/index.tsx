import {FC,ReactNode} from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const Component: FC<Props> = ({children, className=""}) => (
    <div className={`max-w-[1216px] m-auto w-full ${className}`}>
        {children}
    </div>
)

export default Component;
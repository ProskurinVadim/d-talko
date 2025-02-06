import {FC} from "react";

export interface Props {
    data: string;
    title: string;
}
const ProfileItem:FC<Props> = ({data, title}) => {
    return (
        <li><span>{data}</span>{title}</li>
    )
}

export default ProfileItem;
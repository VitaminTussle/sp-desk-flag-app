import { Dispatch, SetStateAction } from "react";

export interface SidebarProps {
    onSelect: Dispatch<SetStateAction<string>>,
    selected: string
}
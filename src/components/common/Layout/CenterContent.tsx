import React from "react";
import Sidebar from "./Sidebar";
import { BetSlip } from "../BetSlip";
import { usePathname } from "next/navigation";
import { isPathNameActive } from "@/utils/globalNav";

interface CenterContentProp {
    children: React.ReactNode;
}
export const CenterContent = ({ children }: CenterContentProp) => {
    const pathName = usePathname();
    const isActive = isPathNameActive(pathName);
    return (
        <div className="flex mt-[150px]">
            <div className="w-full lg:flex-[.8]"> {children}</div>
            {!isActive && (
                <div className="hidden lg:block fixed right-0">
                    <BetSlip />
                </div>
            )}
        </div>
    );
};

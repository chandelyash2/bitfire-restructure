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
        <div className="flex gap-2">
            {!isActive && (
                <div className="hidden lg:block">
                    <Sidebar />
                </div>
            )}
            {children}
            {!isActive && (
                <div className="hidden lg:block">
                    <BetSlip />
                </div>
            )}
        </div>
    );
};

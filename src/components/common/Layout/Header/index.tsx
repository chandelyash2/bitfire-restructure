import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { User } from "@/graphql/generated/schema";
import { isPathNameActive } from "@/utils/globalNav";
import { usePathname } from "next/navigation";
interface HeaderProp {
    authUser?: User;
}
export const MainHeader = ({ authUser }: HeaderProp) => {
    const pathName = usePathname();
    const isActive = isPathNameActive(pathName);
    return (
        <div className="flex flex-col gap-2">
            <Header authUser={authUser} />
            {!isActive && <Navbar />}
        </div>
    );
};

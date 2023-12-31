import React, { useContext, useState } from "react";
import Container from "../Container";
import {
    MdAccountBalance,
    MdAccountCircle,
    MdEvent,
    MdSupervisorAccount,
} from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { MenuListEnum } from "../types";
import { MenuPopup } from "../MenuPopup";
import Sidebar from "./Sidebar";
import { CMSModal } from "@/context";
import { BetSlip } from "../BetSlip";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuList = [
    {
        name: "Events",
        icon: <MdEvent />,
    },
    {
        name: "My Bet",
        icon: <MdAccountBalance />,
    },
];
export const MobileMenu = () => {
    const { setMobileMenu, selectedMenu, setSelectedMenu } =
        useContext(CMSModal);
    const pathname = usePathname();
    return (
        <div>
            <div className="fixed bottom-0 bg-[#141c33] w-full lg:hidden z-10">
                <Container>
                    <div className="flex items-center justify-between font-semibold">
                        {menuList.map(item => (
                            <h3
                                key={item.name}
                                className={twMerge(
                                    "flex items-center gap-2",
                                    selectedMenu === item.name && "text-primary"
                                )}
                                onClick={() => {
                                    setSelectedMenu(item.name);
                                    setMobileMenu(true);
                                }}
                            >
                                <span className="text-primary">
                                    {item.icon}
                                </span>
                                {item.name}
                            </h3>
                        ))}
                        <Link
                            href="/profile"
                            className={twMerge(
                                "flex items-center gap-2",
                                pathname === "/profile" && "text-primary"
                            )}
                        >
                            <span className="text-primary">
                                <MdAccountCircle />
                            </span>
                            Account
                        </Link>
                    </div>
                </Container>
            </div>
            {selectedMenu == MenuListEnum.EVENTS && (
                <MenuPopup close={() => setSelectedMenu("")}>
                    <Sidebar />
                </MenuPopup>
            )}
            {selectedMenu == MenuListEnum.MYBET && (
                <MenuPopup close={() => setSelectedMenu("")}>
                    <BetSlip />
                </MenuPopup>
            )}
        </div>
    );
};

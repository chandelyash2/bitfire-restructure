"use client";
import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header/Header";
import Navbar from "./Header/Navbar";
import Sidebar from "./Sidebar";
import { BetSlip } from "../BetSlip";
import { MobileMenu } from "./MobileMenu";
import { twMerge } from "tailwind-merge";
import { CMSModal } from "@/context";
import { User, useMeQuery } from "@/graphql/generated/schema";
import { Loader } from "../Loader";
import { usePathname, useRouter } from "next/navigation";
import Auth from "../Auth";
import { MainHeader } from "./Header";
import { CenterContent } from "./CenterContent";
interface LayoutProps {
    children: React.ReactNode;
    isPublic?: boolean;
    authUser?: User;
}

export const Layout = ({ children, isPublic }: LayoutProps) => {
    const { menuActive } = useContext(CMSModal);

    return (
        <Auth isPublic={isPublic}>
            <div
                className={twMerge(
                    "absolute top-0 w-full z-1 flex flex-col h-full justify-between",
                    menuActive ? "overflow-hidden" : "overflow-scroll"
                )}
            >
                <MainHeader />
                <CenterContent>{children}</CenterContent>
                {!menuActive && <MobileMenu />}
                <Footer />
            </div>
        </Auth>
    );
};

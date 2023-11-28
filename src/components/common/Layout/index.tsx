"use client";
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BetSlip } from "../BetSlip";
import { MobileMenu } from "./MobileMenu";
import { twMerge } from "tailwind-merge";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div
      className={twMerge(
        "absolute top-0 w-full z-1 flex flex-col h-full justify-between",
        menuActive ? "overflow-hidden" : "overflow-scroll"
      )}
    >
      <div className="flex flex-col gap-2 ">
        <Header menuActive={menuActive} setMenuActive={setMenuActive} />
        <Navbar />
      </div>
      <div className="flex gap-2">
        <Sidebar />
        {children}
        <BetSlip />
      </div>
      <MobileMenu />
      <Footer />
    </div>
  );
};

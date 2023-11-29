"use client";
import React, { useContext, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BetSlip } from "../BetSlip";
import { MobileMenu } from "./MobileMenu";
import { twMerge } from "tailwind-merge";
import { CMSModal } from "@/context";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const { menuActive, mobileMenu } = useContext(CMSModal);
  console.log(mobileMenu, "mosss");

  return (
    <div
      className={twMerge(
        "absolute top-0 w-full z-1 flex flex-col h-full justify-between",
        menuActive || mobileMenu ? "overflow-hidden" : "overflow-scroll"
      )}
    >
      <div className="fixedflex flex-col gap-2 ">
        <Header />
        <Navbar />
      </div>
      <div className="flex gap-2">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        {children}
        <div className="hidden lg:block">
          <BetSlip />
        </div>
      </div>
      {!menuActive && <MobileMenu />}
      <Footer />
    </div>
  );
};

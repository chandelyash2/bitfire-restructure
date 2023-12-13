"use client";
import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BetSlip } from "../BetSlip";
import { MobileMenu } from "./MobileMenu";
import { twMerge } from "tailwind-merge";
import { CMSModal } from "@/context";
import { LoginPopup } from "../LoginPopup";
import { useMeQuery } from "@/graphql/generated/schema";
import { Loader } from "../Loader";
import { useRouter } from "next/navigation";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { menuActive, loginActive, setUserInfo } = useContext(CMSModal);
  const router = useRouter();
  const { data, loading } = useMeQuery();

  useEffect(() => {
    setUserInfo(data?.me?.user);
  }, [data, loading, setUserInfo, router]);

  return (
    <div
      className={twMerge(
        "absolute top-0 w-full z-1 flex flex-col h-full justify-between",
        menuActive ? "overflow-hidden" : "overflow-scroll"
      )}
    >
      <div className="flex flex-col gap-2 ">
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
      {loginActive && <LoginPopup />}
      {loading && <Loader />}
      <Footer />
    </div>
  );
};

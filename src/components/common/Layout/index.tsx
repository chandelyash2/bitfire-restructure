import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BetSlip } from "../BetSlip";
import { MobileMenu } from "./MobileMenu";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="absolute top-0 w-full z-1 flex flex-col h-full justify-between">
      <div className="flex flex-col gap-2">
        <Header />
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

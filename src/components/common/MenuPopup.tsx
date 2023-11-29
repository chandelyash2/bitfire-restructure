import React, { useContext } from "react";
import Header from "./Layout/Header";
import { MobileMenu } from "./Layout/MobileMenu";
import { CMSModal } from "@/context";
interface MenuPopupProps {
  children: React.ReactNode;
  //   close: (value: boolean) => void;
}
export const MenuPopup = ({ children }: MenuPopupProps) => {
  return (
    <div className="absolute top-20 bottom-20 left-0 bg-heading w-full h-screen">
      {children}
    </div>
  );
};

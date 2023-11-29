import React, { useContext } from "react";
import { CMSModal } from "@/context";
import { MdClose } from "react-icons/md";
interface MenuPopupProps {
  children: React.ReactNode;
  close: () => void;
}
export const MenuPopup = ({ children, close }: MenuPopupProps) => {
  const { setMobileMenu } = useContext(CMSModal);

  return (
    <div className="absolute top-20 bottom-20 left-0 bg-heading w-full h-screen">
      <span
        className="absolute right-4 top-4 text-xl font-bold"
        onClick={() => {
          setMobileMenu(false);
          close()
        }}
      >
        <MdClose />
      </span>
      {children}
    </div>
  );
};

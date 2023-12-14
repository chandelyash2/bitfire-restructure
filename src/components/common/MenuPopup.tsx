import React, { useContext } from "react";
import { CMSModal } from "@/context";
import { MdClose } from "react-icons/md";
import Header from "./Layout/Header/Header";
interface MenuPopupProps {
    children: React.ReactNode;
    close: () => void;
}
export const MenuPopup = ({ children, close }: MenuPopupProps) => {
    const { setMobileMenu } = useContext(CMSModal);

    return (
        <div className="none fixed top-0 left-0 w-full h-full bg-[#141c33] lg:hidden">
            <div className="block">
                <Header />
                <span
                    className="absolute right-4 top-20 text-xl font-bold"
                    onClick={() => {
                        setMobileMenu(false);
                        close();
                    }}
                >
                    <MdClose />
                </span>
                <div className="mt-10 w-full">{children}</div>
            </div>
        </div>
    );
};

import React from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
interface ModalProps {
    children: React.ReactNode;
    close: () => void;
}
export const Modal = ({ children, close }: ModalProps) => {
    return (
        <div className="fixed z-[999] left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.4)] p-4">
            <div
                className="relative top-[25%] lg:left-[30%] lg:top-[25%] lg:w-[50%] p-6 rounded-md"
                style={{
                    backgroundImage:
                        "linear-gradient(to right top, #b72576, #a6247b, #94257f, #802782, #6a2983, #552b7d, #3f2a76, #2a296d, #16255b, #061f49, #011936, #011024)",
                }}
            >
                <span
                    className="absolute right-10 text-2xl font-bold cursor-pointer"
                    onClick={() => close()}
                >
                    <MdClose />
                </span>
                {children}
            </div>
        </div>
    );
};

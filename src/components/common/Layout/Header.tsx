"use client";
import Image from "next/image";
import React, { useState } from "react";
import Container from "../Container";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";

interface HeaderProp {
  menuActive: boolean;
  setMenuActive: (value: boolean) => void;
}
const Header = ({ menuActive, setMenuActive }: HeaderProp) => {
  return (
    <header className="bg-header shadow-xl ">
      <Container>
        <div className="hidden lg:flex justify-between items-center">
          <Image src="/bitlogo.png" width={50} height={50} alt="logo" />
          <div className="flex gap-4">
            <PrimaryButton label="Login" link="/" />
            <SecondaryButton label="Signup" link="/" />
          </div>
        </div>
        <div className="flex justify-between items-center lg:hidden ">
          <Image src="/bitlogo.png" width={50} height={50} alt="logo" />
          <Image
            src="/img/hamburger.png"
            width={20}
            height={20}
            alt="logo"
            onClick={() => setMenuActive(true)}
          />
          {menuActive && (
            <div className="flex flex-col absolute top-0 left-0 z-[999] h-full bg-[#141c33] w-full p-4 gap-4">
              <div className="flex justify-between items-center">
                <Image src="/bitlogo.png" width={50} height={50} alt="logo" />
                <Image
                  src="/img/close.png"
                  width={15}
                  height={15}
                  alt="logo"
                  className="w-[20px] h-[20px]"
                  onClick={() => setMenuActive(false)}
                />
              </div>
              <div className="absolute bottom-20 left-0 w-full flex flex-col mt-32 gap-6 p-4">
                <PrimaryButton label="Login" link="/" />
                <SecondaryButton label="Signup" link="/" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;

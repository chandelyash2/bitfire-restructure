"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Container from "../Container";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { CMSModal } from "@/context";
import { MdAccountCircle, MdLogout } from "react-icons/md";
import Link from "next/link";
const Header = () => {
  const { menuActive, setMenuActive } = useContext(CMSModal);
  const [login, setLogin] = useState(true);

  return (
    <header className="bg-header shadow-xl">
      <Container>
        <div className="hidden lg:flex justify-between items-center">
          <Image src="/bitlogo.png" width={50} height={50} alt="logo" />
          {login ? (
            <div className="flex gap-4 items-center font-semibold">
              <h3>
                Available Credit :
                <span className="text-primary"> 2,223.06</span>
              </h3>
              <Link className="flex gap-2 items-center" href=''>
                <span className="text-xl">
                  <MdAccountCircle />
                </span>
                Account
              </Link>
              <Link className="flex gap-2 items-center" href=''>
                <span className="text-xl">
                  <MdLogout />
                </span>
                Logout
              </Link>
            </div>
          ) : (
            <div className="flex gap-4">
              <PrimaryButton label="Login" link="/" />
              <SecondaryButton label="Signup" link="/" />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center lg:hidden">
          <Image src="/bitlogo.png" width={50} height={50} alt="logo" />
          <Image
            src="/img/hamburger.png"
            width={20}
            height={20}
            alt="logo"
            onClick={() => setMenuActive(true)}
          />
          {menuActive && (
            <div className="flex flex-col absolute top-0 left-0 z-[999] h-[100vh] bg-[#141c33] w-full p-4 gap-4">
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
              {login ? (
                <div className="flex flex-col gap-4 mt-10 font-semibold ">
                  <h3 className="border-b p-2 font-s">
                    Available Credit :
                    <span className="text-primary"> 2,223.06</span>
                  </h3>
                  <Link href='' className="flex gap-2 items-center border-b p-2">
                    <span className="text-xl">
                      <MdAccountCircle />
                    </span>
                    Account
                  </Link>
                  <Link  href='' className="flex gap-2 items-center border-b p-2">
                    <span className="text-xl">
                      <MdLogout />
                    </span>
                    Logout
                  </Link>
                </div>
              ) : (
                <div className="absolute bottom-20 left-0 w-full flex flex-col mt-32 gap-6 p-4">
                  <PrimaryButton label="Login" link="/" />
                  <SecondaryButton label="Signup" link="/" />
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;

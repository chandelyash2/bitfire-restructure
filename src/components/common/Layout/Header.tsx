"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Container from "../Container";
import { PrimaryButton } from "../PrimaryButton";
import { CMSModal } from "@/context";
import { MdAccountCircle, MdLogout } from "react-icons/md";
import Link from "next/link";
import { deleteCookie } from "@/utils/cookies";
const Header = () => {
  const { menuActive, setMenuActive, userInfo, setLoginActive, setUserInfo } =
    useContext(CMSModal);

  return (
    <header className="bg-header">
      <Container>
        <div className="hidden lg:flex justify-between items-center">
          <Image src="/bitlogo.png" width={50} height={50} alt="logo" />
          {userInfo ? (
            <div className="flex gap-4 items-center font-semibold">
              <h3>
                Available Credit :
                <span className="text-primary">{userInfo.availableCredit}</span>
              </h3>
              <Link className="flex gap-2 items-center" href="">
                <span className="text-xl">
                  <MdAccountCircle />
                </span>
                Account
              </Link>
              <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => {
                  setUserInfo();
                  deleteCookie("token");
                }}
              >
                <span className="text-xl">
                  <MdLogout />
                </span>
                Logout
              </div>
            </div>
          ) : (
            <div onClick={() => setLoginActive(true)}>
              <PrimaryButton label="Login" type="button" />
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
            <div className="flex flex-col fixed top-0 left-0 z-[999] h-[100vh] bg-[#141c33] w-full p-4 gap-4">
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
              {userInfo ? (
                <div className="flex flex-col gap-4 mt-10 font-semibold ">
                  <h3 className="border-b p-2 font-s">
                    Available Credit :
                    <span className="text-primary">
                      {" "}
                      {userInfo.availableCredit}
                    </span>
                  </h3>
                  <Link
                    href=""
                    className="flex gap-2 items-center border-b p-2"
                  >
                    <span className="text-xl">
                      <MdAccountCircle />
                    </span>
                    Account
                  </Link>
                  <div
                    onClick={() => {
                      setUserInfo();
                      deleteCookie("token");
                    }}
                    className="flex gap-2 items-center border-b p-2"
                  >
                    <span className="text-xl">
                      <MdLogout />
                    </span>
                    Logout
                  </div>
                </div>
              ) : (
                <div
                  className="absolute bottom-20 left-0 w-full p-4"
                  onClick={() => {
                    setLoginActive(true);
                    setMenuActive(false);
                  }}
                >
                  <PrimaryButton label="Login" type="button" />
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

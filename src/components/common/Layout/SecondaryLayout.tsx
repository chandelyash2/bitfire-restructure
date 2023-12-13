"use client";
import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { MobileMenu } from "./MobileMenu";
import { twMerge } from "tailwind-merge";
import { CMSModal } from "@/context";
import { useMeQuery } from "@/graphql/generated/schema";
import { Loader } from "../Loader";
import { useRouter } from "next/navigation";
interface LayoutProps {
  children: React.ReactNode;
}

export const SecondaryLayout = ({ children }: LayoutProps) => {
  const { menuActive, loginActive, userInfo } = useContext(CMSModal);
  const router = useRouter();
  // if (loading) {
  //   return (
  //     <>
  //       <Loader />
  //     </>
  //   );
  // }

  if (!userInfo?._id) {
    router.push("/");
  }

  return (
    <>
      {userInfo && (
        <div
          className={twMerge(
            "absolute top-0 w-full z-1 flex flex-col h-full justify-between",
            menuActive ? "overflow-hidden" : "overflow-scroll"
          )}
        >
          <Header />
          {children}
          {!menuActive && <MobileMenu />}
          {/* {loading && <Loader />} */}
          <Footer />
        </div>
      )}
    </>
  );
};

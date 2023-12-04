"use client";
import {
  BetSlipType,
  GamesTypeEnum,
  MenuListEnum,
} from "@/components/common/types";
import { User } from "@/graphql/generated/schema";
import { useState } from "react";
import { createContext } from "react";
import { boolean } from "yup";

export const CMSModal = createContext<any>(null);

export const CMSContext = ({ children }: { children: React.ReactNode }) => {
  const [activeHiglight, setActiveHiglight] = useState<GamesTypeEnum>(
    GamesTypeEnum.CRICKET
  );
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [selectedBetData, setSelectedBetData] = useState<BetSlipType[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<MenuListEnum | string>("");
  const [loginActive, setLoginActive] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<User>();

  return (
    <CMSModal.Provider
      value={{
        activeHiglight,
        setActiveHiglight,
        menuActive,
        setMenuActive,
        mobileMenu,
        setMobileMenu,
        selectedBetData,
        setSelectedBetData,
        selectedMenu,
        setSelectedMenu,
        loginActive,
        setLoginActive,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </CMSModal.Provider>
  );
};

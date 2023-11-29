"use client";
import { GamesTypeEnum } from "@/components/common/types";
import { useState } from "react";
import { createContext } from "react";

export const CMSModal = createContext<any>(null);

export const CMSContext = ({ children }: { children: React.ReactNode }) => {
  const [activeHiglight, setActiveHiglight] = useState<GamesTypeEnum>(
    GamesTypeEnum.CRICKET
  );
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  return (
    <CMSModal.Provider
      value={{
        activeHiglight,
        setActiveHiglight,
        menuActive,
        setMenuActive,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </CMSModal.Provider>
  );
};

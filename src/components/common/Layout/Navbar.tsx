"use client";
import React, { useState } from "react";
import Container from "../Container";
import {
  MdOutlineLiveTv,
  MdHome,
  MdToday,
  MdSportsTennis,
  MdSportsBasketball,
  MdCasino,
} from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { GiHorseHead } from "react-icons/gi";

const navList = [
  {
    name: "Home",
    icon: <MdHome />,
  },
  {
    name: "Live",
    icon: <MdOutlineLiveTv />,
  },
  {
    name: "Today",
    icon: <MdToday />,
  },
  {
    name: "Football",
    icon: <IoIosFootball />,
  },
  {
    name: "Tennis",
    icon: <MdSportsTennis />,
  },
  {
    name: "BasketBall",
    icon: <MdSportsBasketball />,
  },
  {
    name: "Horse Racing",
    icon: <GiHorseHead />,
  },
  {
    name: "Casino",
    icon: <MdCasino />,
  },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  return (
    <div className="bg-header overflow-auto">
      <Container>
        <div className="hidden lg:flex flex-wrap gap-12">
          {navList.map((item) => (
            <span
              key={item.name}
              className="flex gap-2 items-center font-semibold"
            >
              <span className={active === item.name ? "" : "text-blue-400"}>
                {item.icon}
              </span>
              {item.name}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {navList.map((item) => (
            <div
              className="flex flex-col items-center justify-center shadowm-2xl border border-primary rounded gap-2 px-8 lg:hidden "
              key={item.name}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

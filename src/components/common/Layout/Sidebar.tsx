"use client";
import React, { useState } from "react";
import { TfiCup } from "react-icons/tfi";
import {
  MdOutlineSportsCricket,
  MdSportsTennis,
  MdSportsBasketball,
} from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { twMerge } from "tailwind-merge";

export const games = [
  {
    name: "Cricket",
    icon: <MdOutlineSportsCricket />,
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
];
const Sidebar = () => {
  const [matchStatus, setMatchStatus] = useState("Live");
  return (
    <div className="hidden lg:block bg-header h-screen w-[300px]">
      <div className="font-semibold text-center  flex flex-col gap-2">
        <h2 className="flex gap-2 items-center bg-heading p-2 border-b">
          <span className="text-blue-400">
            <TfiCup />
          </span>
          Popular Events
        </h2>
        <h2 className="border-b p-2">ICC World Cup</h2>
        <h2 className="border-b p-2">Asia League ,23</h2>
      </div>

      <div className="flex gap-2 p-2 bg-heading mt-6">
        <span
          className={twMerge(
            "border-b-2 cursor-pointer",
            matchStatus === "Live" && "border-primary"
          )}
          onClick={() => setMatchStatus("Live")}
        >
          Live
        </span>
        <span
          className={twMerge(
            "border-b-2 cursor-pointer",
            matchStatus === "Upcoming" && "border-primary"
          )}
          onClick={() => setMatchStatus("Upcoming")}
        >
          Upcoming
        </span>
      </div>
      {games.map((item) => (
        <div key={item.name} className="flex gap-2 items-center p-2 border-t">
          <span>{item.icon}</span>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

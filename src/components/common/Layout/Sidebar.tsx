"use client";
import React, { useContext, useState } from "react";
import { TfiCup } from "react-icons/tfi";
import {
    MdOutlineSportsCricket,
    MdSportsTennis,
    MdSportsBasketball,
    MdLiveTv,
    MdToday,
    MdUpcoming,
} from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { CMSModal } from "@/context";
import { GameHiglightEnum } from "../types";

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
    const [matchStatus, setMatchStatus] = useState(GameHiglightEnum.LIVE);
    const { activeHiglight, setActiveHiglight } = useContext(CMSModal);

    return (
        <div className="bg-header h-full lg:w-[300px]">
            <div className="font-semibold flex flex-col gap-2">
                <h2 className="flex gap-2 bg-heading p-2 border-b">
                    <span className="text-blue-400">
                        <TfiCup />
                    </span>
                    Popular Events
                </h2>
                <h2 className="border-b p-2 px-4">ICC World Cup</h2>
                <h2 className="border-b p-2 px-4">Asia League ,23</h2>
            </div>

            <div className="flex gap-3 p-2 bg-heading mt-6">
                <span
                    className={twMerge(
                        "border-b-2 cursor-pointer flex items-center gap-1",
                        matchStatus === GameHiglightEnum.LIVE &&
                            "border-primary"
                    )}
                    onClick={() => setMatchStatus(GameHiglightEnum.LIVE)}
                >
                    <MdLiveTv />
                    Live
                </span>
                <span
                    className={twMerge(
                        "border-b-2 cursor-pointer flex items-center gap-1",
                        matchStatus === GameHiglightEnum.TODAY &&
                            "border-primary"
                    )}
                    onClick={() => setMatchStatus(GameHiglightEnum.TODAY)}
                >
                    <MdToday />
                    Today
                </span>
                <span
                    className={twMerge(
                        "border-b-2 cursor-pointer flex items-center gap-1",
                        matchStatus === GameHiglightEnum.UPCOMING &&
                            "border-primary"
                    )}
                    onClick={() => setMatchStatus(GameHiglightEnum.UPCOMING)}
                >
                    <MdUpcoming />
                    Upcoming
                </span>
            </div>
            {games.map(item => (
                <div
                    key={item.name}
                    className={twMerge(
                        "flex gap-2 items-center p-2 border-t cursor-pointer",
                        activeHiglight === item.name && "text-primary"
                    )}
                    onClick={() => setActiveHiglight(item.name)}
                >
                    <span>{item.icon}</span>
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;

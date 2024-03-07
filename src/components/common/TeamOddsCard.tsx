"use client";
import { CMSModal } from "@/context";
import React, { useContext } from "react";
import { MenuListEnum, TeamOddsType } from "./types";
import { Event } from "@/graphql/generated/schema";

interface TeamOddsCardProp {
    event: Event;
}
export const TeamOddsCard = ({ event }: TeamOddsCardProp) => {
    const {
        selectedBetData,
        setSelectedBetData,
        setSelectedMenu,
        setMobileMenu,
    } = useContext(CMSModal);
    const marketData = event?.market?.map(market => market?.runners);
    const matchOdds:any = marketData?.map(odds => odds?.map(odd => odd?.ex)).flat();
    return (
        <div className="flex gap-2 p-3 items-center border-b overflow-auto">
            <div className="flex flex-col flex-1 gap-2 lg:flex-row">
                <h3 className="gap-1 font-semibold">{event.name}</h3>
            </div>
            <div className="flex gap-2 items-center">
                <span className="bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer">
                    {matchOdds[0]?.availableToBack[0]?.price}
                </span>

                <span className="bg-pink-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer">
                    {matchOdds[0]?.availableToLay[0]?.price}
                </span>
            </div>
            X
            <div className="flex gap-2 items-center">
                <span className="bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer">
                    {matchOdds[1]?.availableToBack[0]?.price}
                </span>

                <span className="bg-pink-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer">
                    {matchOdds[1]?.availableToLay[0]?.price}
                </span>
            </div>
        </div>
    );
};
{
    /* <span className="bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer">
                        1.12
                    </span> */
}

import React, { useContext, useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { CMSModal } from "@/context";
import { BetSlipType } from "./types";
import { twMerge } from "tailwind-merge";

export const BetSlip = () => {
    const { selectedBetData, setSelectedBetData } = useContext(CMSModal);
    const [activeSlip, setActiveSlip] = useState("Bet Slip");
    return (
        <div className="bg-header lg:w-[300px] h-[500px] z-[999] overflow-auto mt-4">
            <h3 className="bg-heading p-2 text-center font-semibold">
                Bet Slip
            </h3>
            <div className="flex gap-6 p-2 border-b">
                <h2
                    className={twMerge(
                        "border-b-2 cursor-pointer",
                        activeSlip === "Bet Slip" && "border-primary"
                    )}
                    onClick={() => setActiveSlip("Bet Slip")}
                >
                    Bet Slip
                </h2>
                <h2
                    className={twMerge(
                        "border-b-2 cursor-pointer",
                        activeSlip === "Open Bets" && "border-primary"
                    )}
                    onClick={() => setActiveSlip("Open Bets")}
                >
                    Open Bets
                </h2>
            </div>
            {activeSlip === "Bet Slip" && selectedBetData.length > 0 ? (
                selectedBetData.map((item: BetSlipType, i: number) => (
                    <div className="flex flex-col gap-2 mt-6 p-2" key={i}>
                        <h3 className="font-semibold">{item.label}</h3>
                        <div
                            className={twMerge(
                                "flex flex-col gap-4 p-2 text-black text-sm z-[999]",
                                item.selectedBet === "back"
                                    ? "bg-blue-300"
                                    : " bg-pink-300"
                            )}
                        >
                            <span className="font-semibold">
                                {item.selectedTeam}
                            </span>
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1">
                                    <label>Odds</label>
                                    <input
                                        value={item.odds}
                                        className="w-14"
                                        type="number"
                                        onChange={() => null}
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span>Stake</span>
                                    <input placeholder="100" className="w-20" />
                                </div>
                            </div>
                            <div className="text-white flex gap-2 items-center flex-wrap">
                                <span className="bg-heading p-2 rounded-lg w-14 text-center text-sm lg:text-md cursor-pointer">
                                    400
                                </span>
                                <span className="bg-heading p-2 rounded-lg w-14 text-center text-sm lg:text-md cursor-pointer">
                                    600
                                </span>
                                <span className="bg-heading p-2 rounded-lg w-14 text-center text-sm lg:text-md cursor-pointer">
                                    1000
                                </span>
                                <span className="bg-heading p-2 rounded-lg w-14 text-center text-sm lg:text-md cursor-pointer">
                                    2000
                                </span>
                            </div>
                            <div className="flex gap-2 text-white">
                                <PrimaryButton
                                    label="Place Bet"
                                    type="button"
                                />
                                <SecondaryButton
                                    label="Remove Bet"
                                    type="button"
                                    onClick={() => {
                                        const filterItem =
                                            selectedBetData.filter(
                                                (a: BetSlipType) =>
                                                    a.selectedTeam !==
                                                    item.selectedTeam
                                            );
                                        setSelectedBetData(filterItem);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h3 className=" mt-[40%] font-bold text-center left-[30%]">
                    No Bet Selected !!!
                </h3>
            )}
        </div>
    );
};

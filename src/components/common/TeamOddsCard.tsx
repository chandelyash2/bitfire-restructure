"use client";
import { CMSModal } from "@/context";
import React, { useContext } from "react";
import { MenuListEnum, TeamOddsType } from "./types";

interface TeamOddsCardProp {
  data: TeamOddsType;
}
export const TeamOddsCard = ({ data }: TeamOddsCardProp) => {
  const { selectedBetData, setSelectedBetData, setSelectedMenu } =
    useContext(CMSModal);

  return (
    <div className="grid grid-cols-2 p-3 items-center border-b overflow-auto">
      <div className="flex flex-col flex-1 gap-2 lg:flex-row">
        <h3 className="gap-1 font-semibold">{data.team1}</h3>
        <span className="text-primary font-semibold">VS</span>
        <h3>{data.team2}</h3>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-4 items-center">
          <span
            className="bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
            onClick={() => {
              setSelectedBetData([
                ...selectedBetData,
                {
                  label: `${data.team1} VS ${data.team2} `,
                  selectedTeam: data.team1,
                  selectedBet: "back",
                  odds: data.back1,
                },
              ]);
              setSelectedMenu(MenuListEnum.MYBET);
            }}
          >
            {data.back1}
          </span>
          <span
            className="bg-pink-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
            onClick={() => {
              setSelectedBetData([
                ...selectedBetData,
                {
                  label: `${data.team1} VS ${data.team2} `,
                  selectedTeam: data.team1,
                  selectedBet: "back",
                  odds: data.back1,
                },
              ]);
              setSelectedMenu(MenuListEnum.MYBET);
            }}
          >
            {data.lay1}
          </span>
          <span>X</span>
          <span
            className="bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
            onClick={() => {
              setSelectedBetData([
                ...selectedBetData,
                {
                  label: `${data.team1} VS ${data.team2} `,
                  selectedTeam: data.team1,
                  selectedBet: "back",
                  odds: data.back1,
                },
              ]);
              setSelectedMenu(MenuListEnum.MYBET);
            }}
          >
            {data.back2}
          </span>
          <span
            className="bg-pink-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer"
            onClick={() => {
              setSelectedBetData([
                ...selectedBetData,
                {
                  label: `${data.team1} VS ${data.team2} `,
                  selectedTeam: data.team1,
                  selectedBet: "back",
                  odds: data.back1,
                },
              ]);
              setSelectedMenu(MenuListEnum.MYBET);
            }}
          >
            {data.lay2}
          </span>
        </div>
      </div>
    </div>
  );
};

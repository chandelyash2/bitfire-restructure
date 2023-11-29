import React from "react";

interface TeamOddsCardProp {
  team1: string;
  team2: string;
  back1: number;
  lay1: number;
  back2: number;
  lay2: number;
}
export const TeamOddsCard = ({
  team1,
  team2,
  back1,
  lay1,
  back2,
  lay2,
}: TeamOddsCardProp) => {
  return (
    <div className="grid grid-cols-2 p-3 items-center border-b overflow-auto">
      <div className="flex flex-col flex-1 gap-2 lg:flex-row">
        <h3 className="gap-1 font-semibold">{team1}</h3>
        <span className="text-primary font-semibold">VS</span>
        <h3>{team2}</h3>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-4 items-center">
          <span className="bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer">
            {back1}
          </span>
          <span className="bg-pink-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer">
            {lay1}
          </span>
          <span>X</span>
          <span className="bg-blue-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer">
            {back2}
          </span>
          <span className="bg-pink-300 p-1 rounded-lg w-10 lg:w-14 text-center text-sm lg:text-md cursor-pointer">
            {lay2}
          </span>
        </div>
      </div>
    </div>
  );
};

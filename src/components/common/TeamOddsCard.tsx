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
    <div className="flex gap-8 p-3 items-center border-b overflow-auto">
      <div className="flex flex-col flex-1 gap-2 lg:flex-row">
        <h3 className="gap-2 font-semibold">{team1}</h3>
        <span className="text-primary font-semibold">VS</span>
        <h3>{team2}</h3>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-4 items-center">
          <span className="bg-blue-300 p-2 rounded-lg">{back1}</span>
          <span className="bg-pink-300 p-2 rounded-lg">{lay1}</span>
          <span>X</span>
          <span className="bg-blue-300 p-2 rounded-lg">{back2}</span>
          <span className="bg-pink-300 p-2 rounded-lg">{lay2}</span>
        </div>
      </div>
    </div>
  );
};

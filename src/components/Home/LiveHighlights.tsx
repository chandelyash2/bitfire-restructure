import React, { useState } from "react";
import { games } from "../common/Layout/Sidebar";
import { twMerge } from "tailwind-merge";
import { TeamOddsCard } from "../common/TeamOddsCard";

export const LiveHighlights = () => {
  const [activeHiglight, setActiveHiglight] = useState("Cricket");
  const selectedGame = games.find((item) => item.name === activeHiglight);
  return (
    <div className="bg-header p-2 rounded-lg">
      <h2 className="text-blue-400 lg:text-lg font-semibold p-2 border-b">
        Live Highlights
      </h2>
      <div className="flex gap-6 p-2 border-b overflow-auto">
        {games.map((item) => (
          <span
            key={item.name}
            className={twMerge(
              "flex gap-2 items-center font-semibold cursor-pointer",
              activeHiglight === item.name && "text-primary"
            )}
            onClick={() => setActiveHiglight(item.name)}
          >
            <span>{item.icon}</span>
            {item.name}
          </span>
        ))}
      </div>
      <div className="border-b p-2">
        <span className="flex items-center gap-2">
          <span>{selectedGame && selectedGame.icon}</span>
          {selectedGame && selectedGame.name}
        </span>
      </div>
      <TeamOddsCard
        team1="India"
        team2="Australia"
        back1={1.1}
        back2={2.1}
        lay1={1.4}
        lay2={1.5}
      />
      <TeamOddsCard
        team1="Srilanka"
        team2="Afghanistan"
        back1={1.1}
        back2={2.1}
        lay1={1.4}
        lay2={1.5}
      />
      <TeamOddsCard
        team1="India"
        team2="Australia"
        back1={1.1}
        back2={2.1}
        lay1={1.4}
        lay2={1.5}
      />
    </div>
  );
};

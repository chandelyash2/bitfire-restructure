export enum GamesTypeEnum {
    CRICKET = "Cricket",
    FOOTBALL = "Football",
    TENNIS = "Tennis",
    BASKETBALL = "BasketBall",
}

export enum GameHiglightEnum {
    LIVE = "Live",
    TODAY = "Today",
    UPCOMING = "Upcoming",
    TRENDING = "Trending",
}

export enum MenuListEnum {
    EVENTS = "Events",
    MYBET = "My Bet",
    ACCOUNT = "Account",
}
export type BetSlipType = {
    label: string;
    selectedTeam: string;
    selectedBet: string;
    odds: number;
};
export type TeamOddsType = {
    team1: string;
    team2: string;
    back1: number;
    lay1: number;
    back2: number;
    lay2: number;
};

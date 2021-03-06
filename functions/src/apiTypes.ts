export type ApiSchedule = {
  "Schedule": {
    "field": string;
    "tournamentLevel": string;
    "description": string;
    "startTime": string;
    "matchNumber": number;
    "teams": {
      "teamNumber": number;
      "station": string;
      "surrogate": boolean;
    }[]
  }[]
}

export type ApiAvatars = {
  "teams": {
    "teamNumber": number;
    "encodedAvatar": string
    }[];
  "teamCountTotal": number,
  "teamCountPage": number,
  "pageCurrent": number,
  "pageTotal": number
}

export type ApiMatchResults = {
  "Matches": {
    "actualStartTime": string;
    "tournamentLevel": string;
    "postResultTime": string;
    "description": string;
    "matchNumber": number;
    "scoreRedFinal": number;
    "scoreRedFoul": number;
    "scoreRedAuto": number;
    "scoreBlueFinal": number;
    "scoreBlueFoul": number;
    "scoreBlueAuto": number;
    "teams": {
        "teamNumber": number;
        "station": string;
        "dq": boolean;
      }[],
    }[];
  }

export type ApiRankings = {
  "Rankings": {
    "rank": number;
    "teamNumber": number;
    "sortOrder1": number; // 2022: Ranking score
    "sortOrder2": number; // 2022: Auto
    "sortOrder3": number; // 2022: Endgame
    "sortOrder4": number; // 2022: Teleop Cell CPanel
    "sortOrder5": number; // 2022: Unused
    "sortOrder6": number; // 2022: Unused
    "wins": number;
    "losses": number;
    "ties": number;
    "qualAverage": number; // Average score of all their qual matches
    "dq": number;
    "matchesPlayed": number;
  }[]
}

export type Scores = {
    scoreID: string;
    kills: Number;
    assists: Number;
    deaths: Number;
}

export type Player = {
    id: string;
    name: string;
    is_alive: Boolean;
    kills: Number;
    deaths: Number;
}
export type Team = {
    id: string;
    name: string;
    round_score: Number;
    score: Number;
    players: Player;
}

export type Game = {
    id: string;
    winner_id: string;
    finished: Boolean;
}

export type Map = {
    map_id: string;
    map_name: string;
}
export type Match = {
    counter_terrorists: Team;
    terrorists: Team;
    tournament_id: string;
    match_id: string;
    game: Game;
    map: Map;
    game_number: Number;
    round: Number;
    current_timestamp: Number;
}
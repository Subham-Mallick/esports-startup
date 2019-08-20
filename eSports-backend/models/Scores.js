const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let scoresSchema = new Schema(
    {
        scoreID: { type: String, unique: true },
        kills: { type: Number, default: 0 },
        deaths: { type: Number, default: 0 },
        assists: { type: Number, default: 0 },
        updatedOn: { type: Date, default: Date.now }
    }
);

mongoose.model('Scores', scoresSchema);

let playerDetailsSchema = new Schema(
    {
        // players: {
        id: { type: String, unique: true },
        name: { type: String, default: '' },
        is_alive: { type: Boolean, default: true },
        kills: { type: Number, default: 0 },
        deaths: { type: Number, default: 0 }
        // }
    }
);

mongoose.model('Players', playerDetailsSchema);

let teamsSchema = new Schema(
    {
        id: { type: String, unique: true },
        name: { type: String, default: '' },
        round_score: { type: Number, default: 0 },
        score: { type: Number, default: 0 },
        players: { type: playerDetailsSchema, default: [] }
    }
);

mongoose.model('Teams', teamsSchema);

let matchDetailsSchema = new Schema(
    {
        counter_terrorists: { type: teamsSchema, required: true },
        terrorists: { type: teamsSchema, required: true },
        tournament: { 
            id: {type: String, default: ''} 
        },
        match: {
            id: { type: String, default: '' }
        },
        game: {
            id: { type: String, default: '' },
            winner_id: { type: String, default: '' },
            finished: { type: Boolean, default: false }
        },
        map: {
            map_id: { type: String, default: '' },
            map_name: { type: String, default: '' },
        },
        game_number: { type: Number, default: 0 },
        round: { type: Number, default: 0 },
        current_timestamp: { type: Number, default: 0 },
    }
);

mongoose.model('Matches', matchDetailsSchema);

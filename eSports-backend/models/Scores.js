const mongoose = require('mongoose')
const Schema =  mongoose.Schema;

let scoresSchema = new Schema(
{

    scoreID : {
        type : String,
        unique : true
    },
    kills : {
        type : Number,
        default : 0
    },
    deaths : {
        type : Number,
        default : 0
    },
    assists : {
        type : Number,
        default : 0
    },
    updatedOn : {
        type : Date,
        default : Date.now
    }
  }
)

mongoose.model('Scores', scoresSchema);

let matchDetailsSchema = new Schema(
// {
//     "counter_terrorists": {
//       "id": 3391,
//       "name": "INTZ",
//       "round_score": 0,
//       "score": 0,
//       "players": [
//         {
//           "id": 17729,
//           "name": "chelo",
//           "is_alive": true,
//           "kills": 6,
//           "deaths": 4
//         },
//         {
//           "id": 17658,
//           "name": "felps",
//           "is_alive": false,
//           "kills": 6,
//           "deaths": 6
//         },
//         {
//           "id": 18180,
//           "name": "xand",
//           "is_alive": true,
//           "kills": 1,
//           "deaths": 5
//         },
//         {
//           "id": 18179,
//           "name": "horvy",
//           "is_alive": true,
//           "kills": 1,
//           "deaths": 5
//         },
//         {
//           "id": 17666,
//           "name": "kNgV-",
//           "is_alive": true,
//           "kills": 0,
//           "deaths": 5
//         }
//       ]
//     },
//     "terrorists": {
//       "id": 60201,
//       "name": "forZe",
//       "round_score": 5,
//       "score": 1,
//       "players": [
//         {
//           "id": 19246,
//           "name": "Jerry",
//           "is_alive": true,
//           "kills": 9,
//           "deaths": 1
//         },
//         {
//           "id": 19248,
//           "name": "almazer",
//           "is_alive": true,
//           "kills": 6,
//           "deaths": 3
//         },
//         {
//           "id": 19214,
//           "name": "FL1T",
//           "is_alive": true,
//           "kills": 5,
//           "deaths": 3
//         },
//         {
//           "id": 19247,
//           "name": "xsepower",
//           "is_alive": true,
//           "kills": 3,
//           "deaths": 3
//         },
//         {
//           "id": 19212,
//           "name": "facecrack",
//           "is_alive": true,
//           "kills": 2,
//           "deaths": 4
//         }
//       ]
//     },
//     "tournament": {
//       "id": 1990
//     },
//     "match": {
//       "id": 330466
//     },
//     "game": {
//       "id": 4822,
//       "winner_id": null,
//       "finished": false
//     },
//     "map": {
//       "map_id": 7,
//       "map_name": "Overpass"
//     },
//     "game_number": 2,
//     "round": 6,
//     "current_timestamp": 512
//   }
)

// {
//     "counter_terrorists": {
//       "id": 3391,
//       "name": "INTZ",
//       "round_score": 0,
//       "score": 0,
//       "players": [
//         {
//           "id": 17729,
//           "name": "chelo",
//           "is_alive": true,
//           "kills": 6,
//           "deaths": 4
//         },
//         {
//           "id": 17658,
//           "name": "felps",
//           "is_alive": false,
//           "kills": 6,
//           "deaths": 6
//         },
//         {
//           "id": 18180,
//           "name": "xand",
//           "is_alive": true,
//           "kills": 1,
//           "deaths": 5
//         },
//         {
//           "id": 18179,
//           "name": "horvy",
//           "is_alive": true,
//           "kills": 1,
//           "deaths": 5
//         },
//         {
//           "id": 17666,
//           "name": "kNgV-",
//           "is_alive": true,
//           "kills": 0,
//           "deaths": 5
//         }
//       ]
//     },
//     "terrorists": {
//       "id": 60201,
//       "name": "forZe",
//       "round_score": 5,
//       "score": 1,
//       "players": [
//         {
//           "id": 19246,
//           "name": "Jerry",
//           "is_alive": true,
//           "kills": 9,
//           "deaths": 1
//         },
//         {
//           "id": 19248,
//           "name": "almazer",
//           "is_alive": true,
//           "kills": 6,
//           "deaths": 3
//         },
//         {
//           "id": 19214,
//           "name": "FL1T",
//           "is_alive": true,
//           "kills": 5,
//           "deaths": 3
//         },
//         {
//           "id": 19247,
//           "name": "xsepower",
//           "is_alive": true,
//           "kills": 3,
//           "deaths": 3
//         },
//         {
//           "id": 19212,
//           "name": "facecrack",
//           "is_alive": true,
//           "kills": 2,
//           "deaths": 4
//         }
//       ]
//     },
//     "tournament": {
//       "id": 1990
//     },
//     "match": {
//       "id": 330466
//     },
//     "game": {
//       "id": 4822,
//       "winner_id": null,
//       "finished": false
//     },
//     "map": {
//       "map_id": 7,
//       "map_name": "Overpass"
//     },
//     "game_number": 2,
//     "round": 6,
//     "current_timestamp": 512
//   }
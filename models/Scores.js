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
        default : ''
    },
    deaths : {
        type : Number,
        default : ''
    },
    assists : {
        type : Number,
        default : ''
    },
    updatedOn : {
        type : Date,
        default : Date.now
    }
  }
)

mongoose.model('Scores', scoresSchema);

const express = require('express')
const mongoose = require('mongoose')
// const shortid = require('shortid')
const response = require('./../libs/responseLib')
// const time = require('./../libs/timeLib')
const check = require('./../libs/checkLib')
const logger = require('./../libs/loggerLib')
var Request = require('request');

//importing the model here
const ScoresModel = mongoose.model('Scores')
const MatchesModel = mongoose.model('Matches')

/**
 * function to get scores
 */
let getAllScores = (req, res) => {
    ScoresModel.find()
    .select('-_v, -_id')
    .lean()
    .exec((err, result) =>{
        if (err) {
            console.log(err)
            logger.error(err.message, 'Score Controller : getAllScores', 10)
            let apiResponse = response.generate(true, 'Failed to find Score details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) { // handling 404 case
            logger.info('No Score Found', 'Score Controller: getAllScores',7)
            let apiResponse = response.generate(true, 'No Score Found', 404, null)
            res.send(apiResponse)
        } else {
            logger.info('All Scores Found Successfully', 'Score Controller: getAllScores', 5)
            let apiResponse = response.generate(false, 'All Score details Found', 200, result)
            res.send(apiResponse)
        }
    }) 
}

/**
 * function to get matches and their details
 */
let getAllMatches = (req, res) => {
    MatchesModel.find()
    .select('-_v, -_id')
    .lean()
    .exec((err, result) =>{
        if (err) {
            console.log(err)
            logger.error(err.message, 'Score Controller : getAllMatches', 10)
            let apiResponse = response.generate(true, 'Failed to find Match details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) { // handling 404 case
            logger.info('No Match Found', 'Score Controller: getAllMatches',7)
            let apiResponse = response.generate(true, 'No Match Found', 404, null)
            res.send(apiResponse)
        } else {
            logger.info('All Match Found Successfully', 'Score Controller: getAllMatches', 5)
            let apiResponse = response.generate(false, 'All Match details Found', 200, result)
            res.send(apiResponse)
        }
    }) 
}


/**
 * function to get data through open source API (just a part of POC)
 */
let getLatestScores = (req, res) => {
Request.get('https://restcountries.eu/rest/v2/all', (error, body) => {

    let result = body; // might have to parse or stringify or do both in other cases.

    if (error) {
        console.log(error)
        logger.error(error, 'Score Controller : getLatestScores', 10)
        let apiResponse = response.generate(true, 'Failed to find Score details', 500, null)
        res.send(apiResponse)
    } else if (check.isEmpty(result)) { // handling 404 case
        logger.info('No Score Found', 'Score Controller: getLatestScores',7)
        let apiResponse = response.generate(true, 'No Score Found', 404, null)
        res.send(apiResponse)
    } else {
        logger.info('All Scores Found Successfully', 'Score Controller: getLatestScores', 5)
        let apiResponse = response.generate(false, 'All Score details Found', 200, result)
        res.send(apiResponse)
    }
});

}



/**
 * function to update the scores
 */
let updateScores = (req, res) => {
    if (check.isEmpty(req.params.scoreID)) {

        console.log('scoreID should be passed')
        let apiResponse = response.generate(true, 'scoreID is missing', 403, null)
        res.send(apiResponse)
    } else{
        let options = req.body
        console.log(options)
        ScoresModel.update({'scoreID' : req.params.scoreID}, options,{multi: true}).exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) { // handling 404 case
                logger.info('No Score Found', 'Score Controller: updateScores',7)
                let apiResponse = response.generate(true, 'Score Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('Score Edited Successfully', 'Score Controller: updateScores', 5)
                let apiResponse = response.generate(false, 'Score Edited Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
  }
} 



module.exports = {
    getAllScores : getAllScores,
    getAllMatches: getAllMatches,
    getLatestScores: getLatestScores,
    updateScores : updateScores
}
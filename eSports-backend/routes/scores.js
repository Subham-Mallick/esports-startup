const express = require('express')
const scoresController = require('./../Controllers/scoresController')
const appConfig = require('./../Config/appConfig')


let setRouter = (app) =>{
   
    let baseUrl = appConfig.apiVersion + '/scores'

    app.get(baseUrl +'/', scoresController.getAllScores)  // later have to fetch using matchID

    /**
     * @api {get} /api/v1/scores Get all scores
     * @apiVersion 0.0.1
     * @apiGroup read   
     * 
     * 
     * 
     * @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Scores Found",
	    "status": 200,
	    "data": [
					{
						scoreID: "string",
						kills: number,
						deaths: number,
						assists: number,
						updatedOn: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Scores",
	    "status": 500,
	    "data": null
	   }
	 */

	app.get(baseUrl +'/countries', scoresController.getLatestScores)

    app.put(baseUrl +'/:scoreID/update', scoresController.updateScores) //instead update using matchID

    /**
     * @api {put} /api/v1/scores/:scoreID/update update scores
     * @apiVersion 0.0.1
     * @apiGroup edit   
     * 
     * @apiParam {String} scoreID the scoreID should be passed as the URL parameter
     * 
     * @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Scores Found",
	    "status": 200,
	    "data": [
					{
						scoreID: "string",
						kills: number,
						deaths: number,
						assists: number,
						updatedOn: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Scores",
	    "status": 500,
	    "data": null
	   }
	 */
    
}

module.exports = {
    setRouter : setRouter
}
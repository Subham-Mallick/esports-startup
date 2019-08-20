const response = require('./../libs/responseLib')

let errorHandler = (err, req, res, next) => {
    console.log("Application error handler called.")
    console.log(err)
    let apiResponse = response.generate(true, 'Error Occured', 500, null)
    res.send(apiResponse)
}

let notFoundHandler = (req, res, next) => {
    console.log("Global Not Found handler called.")
    let apiResponse = response.generate(true, 'Route Not Found in the application.', 404, null)
    res.status(404).send(apiResponse)
}

module.exports = {
    globalErrorHandler : errorHandler,
    globalNotFoundHandler : notFoundHandler
}
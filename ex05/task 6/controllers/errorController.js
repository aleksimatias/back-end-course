const httpStatus = require("http-status-codes");

exports.respondNoResource = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | Oho`);
};
exports.respondMegaError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`)
    res.status(errorCode);
    res.send(`${errorCode} | Not working`);
};



const { StatusCodes } = require('http-status-codes');

class SerViceError extends Error {
    constructor(
        message = 'Something Went Wrong',
        explanation = 'Service layer error',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
        ) {
            super();
            this.name = 'ServiceError';
            this.message = message;
            this.explanation = explanation;
            this.statusCode = statusCode;
        }
}

module.exports = SerViceError;
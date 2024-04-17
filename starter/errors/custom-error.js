class CustomAPIError extends Error {
    constructor (message, statusCode) {
        super(Message);
        this.statusCode = statusCode;
    }
}

const createCustomError = (msg, statusCode) => {
    return new customAPIError(msg,statusCode);
}

module.exports = {
    createCustomError,
    CustomAPIError
};
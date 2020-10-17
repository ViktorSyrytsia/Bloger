const { INTERNAL_SERVER_ERROR } = require('http-status-codes');

class HttpError extends Error {
    status = 'fail';
    constructor(code, message) {
        super(message);
        if (!code) {
            this.code = INTERNAL_SERVER_ERROR;
        } else {
            this.code = code;
        }
    }
}

module.exports = HttpError;
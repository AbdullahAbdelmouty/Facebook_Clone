const CustomeApiError = require("./custom_error");

class BadRequestError extends CustomeApiError{
    constructor(message){
        super(message)
        this.statusCode = 400;
    }
}

module.exports = BadRequestError
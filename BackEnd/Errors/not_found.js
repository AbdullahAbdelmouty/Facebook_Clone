const CustomeApiError = require("./custom_error");

class NotFoundError extends CustomeApiError{
    constructor(message){
        super(message)
        this.statusCode = 404;
    }
}

module.exports = NotFoundError
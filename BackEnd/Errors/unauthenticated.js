const CustomeApiError = require("./custom_error");

class UnAuthenticatedError extends CustomeApiError{
    constructor(message){
        super(message)
        this.statusCode = 401
    }
}

module.exports = UnAuthenticatedError
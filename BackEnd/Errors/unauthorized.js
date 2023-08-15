const CustomeApiError = require("./custom_error");

class UnAuthorizedError extends CustomeApiError{
    constructor(message){
        super(message)
        this.statusCode = 403
    }
}

module.exports = UnAuthorizedError
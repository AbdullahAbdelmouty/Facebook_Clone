class CustomeApiError extends Error {
    constructor(message){
        super(message)
    }
}

module.exports = CustomeApiError;
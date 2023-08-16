const errorHandlerMidlleware = (err,req,res,next)=>{
    let customError = {
        msg: err.message || "Somesing went wrong please try again",
        statusCode: err.statusCode || 500
    }
    // Validation Error
    if(err.name === "ValidationError"){
        // convert value of oject to array to map messages values
        customError.msg = Object.values(err.errors).map(item=>item.message).join(',');
        customError.statusCode = 400 // bad request
    }
    // Duplicat Error
    if(err.code === 11000){
        customError.msg = `Duplicat ${Object.keys(err.keyValue)} entered`;
        customError.statusCode = 400 // bad request
    }
    // cast error
    if(err.name === "CastError"){
        customError.msg = `No item found with id: ${err.value}`,
        customError.statusCode = 404 // not found 
    }
    // JWT 
    if(err.name === "JsonWebTokenError"){
        customError.msg = "Invaild Token",
        customError.statusCode = 401 // unauthenticated 
    }
    // JWT Expired
    if(err.name === 'TokenExpiredError'){
        customError.msg = "Expired Token",
        customError.statusCode = 401 // unauthenticated
    }

    return res.status(customError.statusCode).json({msg: customError.msg})
}

module.exports = errorHandlerMidlleware;
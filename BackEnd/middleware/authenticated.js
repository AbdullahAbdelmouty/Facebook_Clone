const CustomeError = require('../Errors')
const {isTokenValid} = require('../utils')
const authenitcated = async(req,res,next)=>{
    const token = req.signedCookies.token
    if(!token){
    throw new CustomeError.UnAuthenticatedError("Authentication invalid")
    }
    try {
        const {userId,name,email,role} = isTokenValid({token})
        req.user = {userId,name,email,role}
    } catch (error) {
    throw new CustomeError.UnAuthenticatedError("Authentication invalid")
    }
    next()
}
const authorizePermissions = (...roles)=>{
    // must return function to prevent callback function error when invoked this function
    // in route file
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            throw new CustomeError.UnAuthorizedError("You don't have permissions to access this route")
        }
        next();
    }
}

module.exports = {
    authenitcated,
    authorizePermissions
}
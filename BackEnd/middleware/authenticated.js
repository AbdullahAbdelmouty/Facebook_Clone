const CustomeError = require('../Errors')
const {isTokenVaild} = require('../utils')
const authenitcated = async(req,res,next)=>{
    const token = req.signedCookies.token
    if(!token){
    throw new CustomeError.UnAuthenticatedError("Authentication invalid")
    }

    try {
        const {name,email,role} = isTokenVaild({token})
        req.user = {name,email,role}
    } catch (error) {
    throw new CustomeError.UnAuthenticatedError("Authentication invalid")
    }
    next()
}

module.exports = authenitcated
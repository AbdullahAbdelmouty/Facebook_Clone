const jwt = require('jsonwebtoken')

// create jwt token method
// will use jwt.sign to create token to use function when login and register controllers run
// jwt.sign(payload,secert,options) takes three parameters 
//1- what object contain what you need to return to frontend
//2- secert key 
//3-object contain some of properties about token such as expires date
const createJWT = ({payload})=>{
    const token = jwt.sign(payload,process.env.JWT_SECERT,{expiresIn:process.env.JWT_EXPIRE});
    return token
}

const isTokenVaild = ({token})=>{jwt.verify(token,process.env.JWT_SECERT)}

module.exports = {
    createJWT,
    isTokenVaild
}
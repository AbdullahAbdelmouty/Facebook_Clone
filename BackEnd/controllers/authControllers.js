const User = require('../models/user')

const signIn = async(req,res)=>{
    res.send("signIn")
}

const signUp = async(req,res)=>{
    res.send("signUp")
}

const logOut = async(req,res)=>{
    res.send("logOut")
}

module.exports = {
    signIn,
    signUp,
    logOut
}
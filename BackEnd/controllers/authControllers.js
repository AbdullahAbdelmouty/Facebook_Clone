const User = require('../models/user')
const CustomError = require('../Errors')
const register = async(req,res)=>{
    res.send("signUp")
}


const signUp = async(req,res)=>{
    const {name,email,password} = req.body;
    const user_with_email = await User.findOne({email})
    if(user_with_email){
        throw CustomError.BadRequestError("Email already exists")
    }
    // notes you must pass values distracted to prevent any one to become admin
    //and don't allow user to entire the value of role from frontend
    // if you woderful how can create admin 
    // you can from db
    // or using create admin as the first user and the dashboard will allow to admin to entire more admins ,by allow to add role value
    // const firstUser = User.countDocuments({}) === 0;
    // const role = firstUser? "admin":"user" and pass role to User.create({name,email,password})
    const user = await User.create({name,email,password});
    res.status(201).json({user});
}

const logOut = async(req,res)=>{
    res.send("logOut")
}

module.exports = {
    register,
    signUp,
    logOut
}
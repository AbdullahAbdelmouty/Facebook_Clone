const User = require('../models/user')
const CustomError = require('../Errors')
const {attachCookiesToResponse,createUserToken} = require('../utils');
const user = require('../models/user');
const login = async(req,res)=>{
    const{name,email,password}=req.body;
    if(!email||!password){
        throw new CustomError.BadRequestError("Please provide email and password")
    }
    const user = await User.findOne({email})
    if(!user){
        throw new CustomError.UnAuthenticatedError("Email not exist")
    }
    const isCorrectPassword = await user.comparePassword(password);
    if(!isCorrectPassword){
        throw new CustomError.UnAuthenticatedError("Password is wrong")
    }
    const tokenUser = createUserToken(user)
    attachCookiesToResponse({res,user:tokenUser})
    res.status(200).json({user})
}

const register = async(req,res)=>{
    const {name,email,password} = req.body;
    const user_with_email = await User.findOne({email})
    if(user_with_email){
        throw new CustomError.BadRequestError("Email already exists")
    }
    // notes you must pass values distracted to prevent any one to become admin
    //and don't allow user to entire the value of role from frontend
    // if you woderful how can create admin 
    // you can from db
    // or using create admin as the first user and the dashboard will allow to admin to entire more admins ,by allow to add role value
    // const firstUser = User.countDocuments({}) === 0;
    // const role = firstUser? "admin":"user" and pass role to User.create({name,email,password})
    const user = await User.create({name,email,password});
    // notice i will send the role value, because will use it i frontend 
    const tokenUser = createUserToken(user)
    attachCookiesToResponse({res,user:tokenUser})
    res.status(201).json({user});
}

const logOut = async(req,res)=>{
    // remove token from cookies and expires the cookies in the same moment of logout
    res.cookie('token','logout',{
        httpOnly:true,
        expires: new Date(Date.now())
    }
    )
    res.send("done!")
}

module.exports = {
    register,
    login,
    logOut
}
const CustomError = require('../Errors')
const User = require('../models/user');

const getAllUsers = async(req,res)=>{
    // select just users with user role and remove password from res
    const users = await User.find({role:"user"}).select('-password')
    res.status(200).json(users)
}

const getSingleUser = async(req,res)=>{
    const {id:userId} = req.params
    const user = await User.findOne({_id:userId}).select('-password')
    if(!user){
        throw new CustomError.NotFoundError(`not user exist with id: ${userId}`)
    }
    const {name,email,role} = user
    res.status(200).json({name,email,role})
}

const showCurrentUser = async(req,res)=>{
    res.status(200).json({user:req.user})
}

const updateUser = async (req,res)=>{
    res.send("update user")
}

const updateUserPassword = async(req,res)=>{
    const {newPassword} = req.body;
    const {userId} = req.user;
    const user = await User.findOne({_id:userId})
    const isCorrectPassword = user.comparePassword(newPassword)
    if(!isCorrectPassword){
        throw new CustomError.UnAuthenticatedError('Authentication invalid')
    }
    user.password = newPassword;
    const userUpdated = await  User.findByIdAndUpdate({_id:userId},{user},{
        new:true,
        runValidators:true
    })
    res.status(200).json(userUpdated)
}

module.exports = {
    getAllUsers,
    getSingleUser,
    getAllUsers,
    showCurrentUser,
    updateUser,
    updateUserPassword
}
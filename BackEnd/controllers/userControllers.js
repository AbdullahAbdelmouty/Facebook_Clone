const CustomError = require('../Errors')
const User = require('../models/user');
const {createUserToken,attachCookiesToResponse} = require('../utils')
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
// update password using findByIdAndUpdate
// const updateUser = async (req,res)=>{
//     const {name,email} = req.body;
//     const {userId} = req.user;
//     if(!newName||!newEmail){
//         throw new CustomError.BadRequestError('Please proivde name and email')
//     }
//     const user = await User.findByIdAndUpdate({_id:userId},{name,email},{
//         new:true,
//         runValidators:true
//     })
//     const userToken =  createUserToken(user)
//     attachCookiesToResponse({res,user:userToken})
//     res.status(200).json({user:userToken})
// }

// update password using .save()
const updateUser = async (req,res)=>{
    const {name,email} = req.body;
    const {userId} = req.user;
    if(!newName||!newEmail){
        throw new CustomError.BadRequestError('Please proivde name and email')
    }
    const user = await User.findOne({_id:userId})
    user.name = name;
    user.email = email;
    user.save();
    const userToken =  createUserToken(user)
    attachCookiesToResponse({res,user:userToken})
    res.status(200).json({user:userToken})
}

const updateUserPassword = async(req,res)=>{
    const {oldPassword,newPassword} = req.body;
    const {userId} = req.user;
    if(!oldPassword||!newPassword){
        throw new CustomError.BadRequestError('Please provide old and new password')
    }
    const user = await User.findOne({_id:userId})
    const isCorrectPassword = user.comparePassword(oldPassword)
    if(!isCorrectPassword){
        throw new CustomError.UnAuthenticatedError('Old password is not correct')
    }
    user.password = newPassword;
    //will call pre function with save event in user model that will lead to hashing new password
    user.save()
    res.status(200).json({ msg: 'Success! Password Updated.' })
}

module.exports = {
    getAllUsers,
    getSingleUser,
    getAllUsers,
    showCurrentUser,
    updateUser,
    updateUserPassword
}
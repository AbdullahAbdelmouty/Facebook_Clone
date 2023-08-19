const { NotFoundError } = require('../Errors');
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
        throw new NotFoundError(`not user exist with id: ${userId}`)
    }
    const {name,email,role} = user
    res.status(200).json({name,email,role})
}

const showCurrentUser = async(req,res)=>{
    res.send("get current user")
}

const updateUser = async (req,res)=>{
    res.send("update user")
}

const updateUserPassword = async(req,res)=>{
    res.send("update user password")
}

module.exports = {
    getAllUsers,
    getSingleUser,
    getAllUsers,
    showCurrentUser,
    updateUser,
    updateUserPassword
}
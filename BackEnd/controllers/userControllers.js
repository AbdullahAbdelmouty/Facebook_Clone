const User = require('../models/user');

const getAllUsers = async(req,res)=>{
    res.send("get all users")
}

const getSingleUser = async(req,res)=>{
    res.send("get signle user")
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
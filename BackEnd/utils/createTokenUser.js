const createUserToken = (user)=>{
    return  {name:user.name,email:user.email,userId:user._id,role:user.role}
}

module.exports = createUserToken
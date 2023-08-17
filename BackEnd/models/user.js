const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
        name:{
            type: String,
            required: [true,"Please Provide Name"],
            minlength:3,
            maxlength:50
        },
        email:{
            type:String,
            unique: true,
            validator:{
                validate: validator.isEmail,
                message: "Please provide vaild email"
            },
            required:[true,"Please Provide Email"]
        },
        password:{
            type:String,
            required:[true,"Plese Provide Password"],
            minlength:6
        },
        role:{
            type:String,
            required: true,
            enum:['user','admin'],
            default: "user"
        }
        },{timestamps:true}
)
// hashing password using pre hook in mongoose and becrpt for hashing
// notice i used function not arrow function to get access to this keyword 
userSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})
// compare password
userSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword,this.password);
    return isMatch
}

module.exports = mongoose.model('User',userSchema)
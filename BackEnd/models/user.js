const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = new mongoose.Schema(
    {
        id:{
            type:Number,
            required:true
        },
        name:{
            type: String,
            required: [true,"Please Provide Name"],
            minlength:3,
            maxlength:50
        },
        email:{
            type:String,
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

module.exports = mongoose.model('User',userSchema)
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:[true,"Please Provide Email"]
        },
        password:{
            type:String,
            required:[true,"Plese Provide Password"]
        },
        name:{
            type: String,
            required: [true,"Please Provide Name"]
        },
        },{timestamps:true}
)

module.exports = mongoose.model('User',userSchema)
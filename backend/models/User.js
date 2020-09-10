const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    name:{type: String, required: true },
    surname:{type: String, required: true},
    username:{type: String, required:true},
    email:{type: String, required:true},
    password:{type:String, required:true},
    country:{type: String, required: true},
    profilePic:{type: String},
})
const User = mongoose.model('user', userSchema)
module.exports = User
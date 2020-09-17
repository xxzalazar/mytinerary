const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    itId:{type: mongoose.Schema.ObjectId, ref:'itineraries'},
    userId:{type: mongoose.Schema.ObjectId, ref:'users'},
    text: {type: String, required: true},
})

const Comment= mongoose.model('comments', CommentSchema)
module.exports=Comment
const mongoose = require('mongoose')

const ActivitiesSchema =  new mongoose.Schema({
    activityTitle:{type: String, required:true},
    activityPic:{type: String, required: true},
    itineraryId:{type: mongoose.Schema.ObjectId, ref:'itineraries'}


})
const Activities = mongoose.model('Activities', ActivitiesSchema)
module.exports= Activities
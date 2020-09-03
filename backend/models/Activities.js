const mongoose = require('mongoose')

const ActivitiesSchema =  new mongoose.Schema({
    activities:{type: Array, required:true},
    itineraryId:{type: mongoose.Schema.ObjectId, ref:'itineraries'}

})
const Activities = mongoose.model('Activities', ActivitiesSchema)
module.exports= Activities
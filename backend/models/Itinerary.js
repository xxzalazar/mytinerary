const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  hashtag: { type: Array, default: ["#travel", "#fun", "#explore"] },
  title: { type: String, required: true },
  profilePhoto: { type: String, required: true },
  rating: { type: Number },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
  cityId: { type: mongoose.Schema.ObjectId, ref: "city" },
  likes: { type: Number, default: 0 },
  comments: { type: Array},
});
const Itinerary = mongoose.model('itinerary', itinerarySchema);
module.exports = Itinerary;

const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  pic: { type: String },
});

const City = mongoose.model('city', citySchema);
module.exports = City;

const Itinerary = require('../models/Itinerary');
const itineraryController = {
  itineraries: async (req, res) => {
    const itinerariesCity = await Itinerary.find();
    res.json({
      success: true,
      itineraries: itinerariesCity,
    });
  },
  newItinerary: async (req, res) => {
    const {
      hashtag,
      title,
      profilePhoto,
      rating,
      duration,
      price,
      cityId,
      comments,
    } = req.body;
    const newItinerary = new Itinerary({
      hashtag: hashtag,
      title: title,
      profilePhoto: profilePhoto,
      rating: rating,
      duration: duration,
      price: price,
      commments: comments,
      cityId: cityId,
    });
    const savedItinerary = await newItinerary.save();
    res.json({
      success: true,
      itineraries: savedItinerary,
    });
  },
};
module.exports = itineraryController;

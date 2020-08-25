const City = require('../models/City');

const citiesController = {
  citiesList: async (req, res) => {
    const list = await City.find();
    res.json({
      success: true,
      cities: list,
    });
  },
  newCity: (req, res) => {
    const { city, country, pic } = req.body;
    const newCity = new City({
      city: city,
      country: country,
      pic: pic,
    });
    newCity
      .save()
      .then((place) => {
        res.json({ success: true, ciudad: place });
      })
      .catch((error) => {
        res.json({ success: false, error: error });
      });
  },
};

module.exports = citiesController;

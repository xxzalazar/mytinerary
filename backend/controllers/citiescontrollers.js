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
    const { name, pic } = req.body;
    const newCity = new City({
      name: name,
      pic: pic,
    });
    newCity
      .save()
      .then((ciudad) => {
        res.json({ success: true, ciudad: ciudad });
      })
      .catch((error) => {
        res.json({ success: false, error: error });
      });
  },
};

module.exports = citiesController;

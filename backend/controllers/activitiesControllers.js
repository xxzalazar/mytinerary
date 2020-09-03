const Activities = require('../models/Activities');
const activitiesController = {
  itineraries: async (req, res) => {
    const activitiesData = await Activities.find();
    res.json({
      success: true,
      itineraries: activitiesData,
    });
  },
  newActivities: (req, res) => {
    const{ activities, itineraryId } = req.body;
    const activities = new Activities({
      activities: activities,
      itineraryId: itineraryId,
    });
    newActivities
      .save()
      .then((activities) => {
        res.json({ success: true, activities: activities });
      })
      .catch((error) => {
        res.json({ success: false, error: error });
      });
  },
  getActivities: async (req, res) => {
    const searchedAct = await Activities.find({
      itineraryId: req.params.id,
    });
    res.json({
      success: true,
      it: searchedAct,
    });
  },
};
module.exports = activitiesController;

const Activities = require('../models/Activities');
const activitiesController = {
  activitiesList: async (req, res) => {
    const activitiesData = await Activities.find();
    res.json({
      success: true,
      activities: activitiesData,
    });
  },
  newActivities: (req, res) => {
    const{ activityTitle, activityPic, itineraryId } = req.body;
    const activitiesData = new Activities({
      activityTitle: activityTitle,
      activityPic: activityPic,
      itineraryId: itineraryId,
    });
    activitiesData.save().then((activities) => {
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
      activity: searchedAct,
    });
  },
};
module.exports = activitiesController;

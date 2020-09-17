const Itinerary = require('../models/Itinerary');
const itineraryController = {
  itineraries: async (req, res) => {
    const itinerariesCity = await Itinerary.find();
    res.json({
      success: true,
      itineraries: itinerariesCity,
    });
  },
  newItinerary: (req, res) => {
    const {
      hashtag,
      title,
      profilePhoto,
      rating,
      duration,
      price,
      cityId,
      likes,
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
      likes: likes,
      cityId: cityId,
    });
    newItinerary
      .save()
      .then((itinerary) => {
        res.json({ success: true, Itinerary: itinerary });
      })
      .catch((error) => {
        res.json({ success: false, error: error });
      });
  },
  getItinerary: async (req, res) => {
    const searchedItineraries = await Itinerary.find({
      cityId: req.params.id,
    });
    res.json({
      success: true,
      it: searchedItineraries,
    });
  },
  addComment: async(req, res)=>{
    const comment= req.body 
    const itineraryComments= await Itinerary.findOneAndUpdate({_id: comment.itineraryId},{$push:{comments:comment}})
    res.json({
      success: true
    })
  },
  deleteComment: (req,res)=>{
    const deletedComment= req.body
    console.log(deletedComment)
    Itinerary.update({_id: deletedComment.itineraryId},{$pullAll:{comments:[{...deletedComment}]}})
    .then((resp) => res.json({success:true}))
     
  },
  
};
module.exports = itineraryController;

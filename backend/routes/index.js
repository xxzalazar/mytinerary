const express = require('express');
const routes = express.Router();
const citiesController = require('../controllers/citiescontrollers');
const itineraryController = require('../controllers/ItineraryController');
const activitiesController= require('../controllers/activitiesControllers')
routes
  .route('/Cities')
  .get(citiesController.citiesList)
  .post(citiesController.newCity);

routes.route('/Cities/:id').get(citiesController.getCity);
routes.route('/Itineraries/:id').get(itineraryController.getItinerary);

routes.route('/Activities').get(activitiesController.getActivities).post(activitiesController.newActivities)

routes
  .route('/Itineraries')
  .get(itineraryController.itineraries)
  .post(itineraryController.newItinerary);

module.exports = routes;

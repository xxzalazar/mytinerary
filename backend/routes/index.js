const express = require('express');
const routes = express.Router();
const citiesController = require('../controllers/citiescontrollers');
const itineraryController = require('../controllers/ItineraryController');
routes
  .route('/Cities')
  .get(citiesController.citiesList)
  .post(citiesController.newCity);

routes.route('/Itineraries/:id').get(itineraryController.getItinerary);

routes
  .route('/Itineraries')
  .get(itineraryController.itineraries)
  .post(itineraryController.newItinerary);

module.exports = routes;

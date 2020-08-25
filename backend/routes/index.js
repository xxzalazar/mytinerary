const express = require('express');
const rutas = express.Router();
const citiesController = require('../controllers/citiescontrollers');
const itineraryController = require('../controllers/ItineraryController');
rutas
  .route('/Cities')
  .get(citiesController.citiesList)
  .post(citiesController.newCity);
rutas
  .route('/Itinerary')
  .get(itineraryController.itineraries)
  .post(itineraryController.newItinerary);
module.exports = rutas;

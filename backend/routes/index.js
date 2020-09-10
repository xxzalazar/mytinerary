const express = require('express');
const routes = express.Router();
const citiesController = require('../controllers/citiescontrollers');
const itineraryController = require('../controllers/ItineraryController');
const activitiesController= require('../controllers/activitiesController');
const userControllers= require('../controllers/usersController')
const validator = require('../config/validator')
routes
  .route('/Cities')
  .get(citiesController.citiesList)
  .post(citiesController.newCity);

routes.route('/Cities/:id').get(citiesController.getCity);
routes.route('/Activities/:id').get(activitiesController.getActivities)
routes.route('/Activities').get(activitiesController.activitiesList).post(activitiesController.newActivities)

routes.route('/Itineraries/:id').get(itineraryController.getItinerary);
routes
  .route('/Itineraries')
  .get(itineraryController.itineraries)
  .post(itineraryController.newItinerary);
routes.route('/login').post(userControllers.loginUser)
routes.route('/user').post(validator.validateNewUser, userControllers.newUser) 
module.exports = routes;

const express = require('express');
const rutas = express.Router();
const citiesController = require('../controllers/citiescontrollers');
rutas
  .route('/Cities')
  .get(citiesController.citiesList)
  .post(citiesController.newCity);
module.exports = rutas;

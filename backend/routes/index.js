const express = require('express');
const rutas = express.Router();
const invitadoController = require('../controllers/invitadocontroller');

rutas.route('/invitados').get(invitadoController.listarInvitados).post();
rutas.route('/ausentes').get((req, res) => {
  res.send('Petición GET a la ruta de ausentes');
});
module.exports = rutas;

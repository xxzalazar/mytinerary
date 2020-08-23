const express = require('express');
const cors = require('cors');
const rutas = require('./routes/index');
require('dotenv').config();
require('./config/db');
const server = express();

//middleware
servidor.use(cors()); //con esto va aceptar peticiones de cualquier frontend aunque no sean peticiones del dominio original.
servidor.use(express.json()); //para interpretar los body de las peticiones que me manden los clientes que consuman nuestra api.

//rutas
servidor.use('./api', router);

//ENRUTADOr;
servidor.listen(4000, () => console.log('App listening on port 4000')); //esto va a ser dinámico/variable, y va a depender del puerto que le brinde el servidor en el que lo vamos a subir.

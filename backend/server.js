const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./config/db'); //para conrrerlo no neecsito guardarlo en variable

const servidor = express();

//Middleware (BUSCAR)
servidor.use(cors());
servidor.use(express.json());

//Rutas

const routes = require('./routes/index');

//ENRUTADOR:
servidor.use('/api', routes);

servidor.listen(4000, () => console.log('App listening on port 4000'));

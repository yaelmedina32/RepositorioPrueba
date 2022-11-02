import { Router } from 'express';

import {getPrueba} from '../controladores/productos.controllers.js';

//import {getCuadrillas} from '../controladores/productos.controllers.js';

const rutas = Router();

//Se exporta desde el controlador productos

rutas.get('/prueba', getPrueba);

//rutas.get('/prueba2', getCuadrillas);

export default rutas;

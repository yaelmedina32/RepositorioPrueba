import express from 'express';
//cuando es un default en el export de lo que se esta importando no se usan las {}
import rutas from './rutas/productos.routes.js';
import router from './rutas/index.router.js';
import ruta from './rutas/prueba.router.js';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(rutas);
app.use(router);
app.use(ruta);
app.listen(3700);
console.log("Servidor en el puerto 3700...");
console.log("buans");
console.log("noma");

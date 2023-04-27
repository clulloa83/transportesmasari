const express = require('express');
const cors = require('cors');
require('dotenv').config();

class Server {

    constructor(){
        this.app    = express();
        this.port   = process.env.PORT;

        this.paths = {
            demoapp: '/api/demoapp',
        };

        // Middlewares
        this.middleware();

        // Rutas de mi aplicación
        this.routes();
    }

    middleware = () => {
        // CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //Directorio Publico
        this.app.use( express.static('public'));
    }

    routes = () => {
        this.app.use(this.paths.demoapp, require('./routes/demoapp'));
    }
    
    listen = () => {
        // this.server.listen( this.port, () => {
        this.app.listen( this.port,  () => {
            console.log(`servidor corriendo en puerto ${ this.port }`);
        });
    }

}

module.exports = Server;

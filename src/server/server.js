const express = require('express');
const moviesRouter = require('../routes/moviesRoutes');
const server = express();
server.use(express.json());


server.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente')
})

server.use ('/api/movies', moviesRouter)


module.exports = server;
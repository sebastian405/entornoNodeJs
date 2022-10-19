console.clear();
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const server = express();
dotenv.config();
const port = process.env.PORT;

server.get('/', (req, res) => {
    res.send(`<h2>Hola mundo</h2>`);
});

server.listen(port, () => {
    console.log(`Funcionando en el puerto: ${port}`.america.bgBlack);
});
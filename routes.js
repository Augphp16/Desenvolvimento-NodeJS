const express = require('express');
const route = express.Router();
const homecontroller = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');


//rotas da home
    route.get('/', homecontroller.paginaInicial);
    route.post('/', homecontroller.trataPost);
    

//rotas de contato
    route.get('/contato', contatoController.paginaInicial);

module.exports = route;

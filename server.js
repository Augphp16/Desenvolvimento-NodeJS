require('dotenv').config();
const express = require('express');
const app = express();


// Conexão com o banco de dados
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING).then(() => {
  console.log('conectado ao mongoDB')  
  app.emit('pronto');
}).catch((e) => {
  console.log(e)
});

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middlewares');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(session({
  secret: 'foo',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING}),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000*60*24*7,
    httpOnly: true
  }
}));
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//rotas
app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => {
  app.listen(undefined, () => {
    console.log('Acessar http://localhost:8999');
    console.log('Servidor executando na porta 8999');
  });
});

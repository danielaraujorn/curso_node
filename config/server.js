var express = require('express');
var consign =  require('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));

consign()//já executa as funções retornadas
	.include('./app/routes')
	.then('config/dbConnection.js')//neste caso precisa colocar a extensão pra entender que é módulo e não diretorio .js ...
	.then('./app/models')
	.into(app);


module.exports = app;
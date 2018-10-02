var app = require('express')();
var consign =  require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()//já executa as funções retornadas
	.include('./app/routes')
	.then('config/dbConnection.js')//neste caso precisa colocar a extensão pra entender que é módulo e não diretorio .js ...
	.then('./app/models')
	.into(app);

module.exports = app;

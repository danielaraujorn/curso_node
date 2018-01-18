var app = require('./config/server');

var rotaHome = require('./app/routes/home.js')(app);

var rotaNoticias = require('./app/routes/noticias.js')(app);

var rotaFormIncNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(8080, function() {
	console.log("Server ON");
});
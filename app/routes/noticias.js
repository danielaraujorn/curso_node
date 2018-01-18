module.exports = function(application) {
	
	application.get('/noticias',function(req, res) {
		res.render("noticias/noticias");
	});

//	application.get('/noticia', function (req, res) {
//		res.render("noticias/noticia");
//	});
}
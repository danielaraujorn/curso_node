module.exports = function(application) {
	
	application.get('/noticias',function(req, res) {
	
		var mysql = require('mysql');

		var connection = mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : '1234',
			database : 'portalnoticias'
		});

		connection.query('select * from noticias', function(error, result){
			//res.send(result);
			res.render("noticias/noticias", {noticias : result});
		});


	});

	//	application.get('/noticia', function (req, res) {
	//		res.render("noticias/noticia");
	//	});
}
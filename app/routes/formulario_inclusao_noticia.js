module.exports = function(application){
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render ("admin/form_add_noticia");
		console.log('enviado');
	});
}

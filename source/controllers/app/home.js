var homeController=function(server){
	server.route('/').
		get(function(req,res){
				res.render('../source/views/index.html');
		});
	server.route('/logout').
		get(function(req,res){
			req.logout();
		});

	server.route('/fileUpload').
		get(function(req,res){
			res.render('../source/views/fileUpload.html');
		});
}

module.exports = homeController;
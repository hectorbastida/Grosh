module.exports=function(server){
	var User = require('../../models/user');
	var socialChange = require('../../middlewares/socialChange')();
	
	var socialConnection = function(req, res){
		if (req.user) {
			console.log('user');
			console.log(req.userSocial);
			console.log('userGrosh');
			console.log(req.user);
			
			res.send('bien');
		}else{
			res.send('error');
		}
	}

	//res.redirect('http://mydomain.com'+req.url)

	server.get('/socialConnection/', socialConnection);
}
module.exports = function () {
	return{
		changeUserSesion : function(req, res, next){
			req.userGrosh = req.user;
			console.log('in middleware');
			console.log(req.user.id);
			console.log('user groshhh');
			console.log(req.userGrosh.id);
			next();
		}
	}
}
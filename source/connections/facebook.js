var passport=require('passport'),
	FacebookStrategy=require('passport-facebook').Strategy;

var facebookConection=function(server){
	passport.use(new FacebookStrategy({
		clientID:'658979800874066',
		clientSecret:'32b0d42bb7e72dede64d044f5777c60c',
		callbackURL:'http://localhost:8000/auth/facebook/callback'
	},function(accessToken,RefreshToken,profile,done){
		done(null,profile);
	}));

	server.get('/auth/facebook',passport.authenticate('facebook'), function(req, res, next){
		req.userSocial = req.user;
		next();
	});

	server.get('/auth/facebook/callback',passport.authenticate('facebook',{successRedirect:'/socialConnection',
																			failureRedirect:'/socialConnection'}))
}

module.exports=facebookConection;
module.exports = function(server, io){
	require('./user')(server);
	require('./post')(server);
	require('./image')(server);
	require('./file')(server);
	require('./group')(server);
	require('./invitation')(server);
	require('./request')(server);
	require('./chat')(io);

	//connection with fb, twitter, google.
	require('./../../connections/facebook')(server);
	require('./../../connections/twitter')(server);
}
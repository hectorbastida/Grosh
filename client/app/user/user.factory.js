/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$http'];
/*
The controller's functionality
*/
var factory = function($http){

	function add(user){
			var data = {
				name:user.name,
				last_name:user.lastName,
				email:user.email,
				sex:user.gender,
				password:user.password
			}
		    return $http.post('/user/',data);
		    
	}
	function get(id){
		return $http.get('/user/'+id);
	}
	function getByName(name){
		return $http.get('/userName/'+name);
	}	
	function getByEmail(email){
		return $http.get('/user/'+email);
	}
    function update(user){
    	return $http.put('/user/'+user._id,{
    		name:user.name,
    		last_name:user.last_name,
    		password:user.password,
    		status:user.status,
    		email:user.email,
    		sex:user.sex
    	});
	}
	
	function addChatInvitation(receptor){
		var data = {
			receptor_user:receptor
		}
		return $http.post('/chatInvitation/',data);
	}
	function getChatInvitation(email){
		return $http.get('/chatInvitation/');
	}
	function getChatInvitationProfile(id){
		return $http.get('/chatInvitationProfile/'+id);
	}
	
	return {
		add:add,
		get:get,
		getByName:getByName,
		getByEmail:getByEmail,
		update:update,
		addChatInvitation:addChatInvitation,
		getChatInvitation:getChatInvitation,
		getChatInvitationProfile:getChatInvitationProfile
		
	}
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(factory);

module.exports = dependencies;
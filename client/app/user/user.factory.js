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
		    return $http.post('http://localhost:8000/user/',data);
		    
	}
	function get(email){
		return $http.get('http://localhost:8000/user/'+email);

	}

    function update(user){
    	return $http.put('http://localhost:8000/user/'+user._id,{
    		name:user.name,
    		last_name:user.last_name,
    		password:user.password,
    		status:user.status,
    		email:user.email,
    		sex:user.sex
    	});
	}


	return {
		add:add,
		get:get,
		update:update
	}
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(factory);

module.exports = dependencies;
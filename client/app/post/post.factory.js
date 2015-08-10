/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$http'];
/*
The controller's functionality
*/
var factory = function($http){

	function add(content,idUser,idGroup){
			var data = {
				content:content,
				id_group:idGroup
			}
		    return $http.post('/post/',data);
		    
	}
	function getByGroup(id){
		return $http.get('/postGroup/'+id);
	}

    function update(post){
    	return $http.put('/post/'+post._id,{
    		name:post.content,
    		status:post.status
    	});
	}

	function remove(id){
		return $http.delete('/post/'+id);
	}

	return {
		add:add,
		getByGroup:getByGroup,
		update:update,
		remove:remove
	}
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(factory);

module.exports = dependencies;
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
	function addImage(content,idGroup,file){
			var data = {
				content:content,
				id_group:idGroup,
				file:file
			}
		    return $http.post('/image',data);
	}
	
	function getByGroup(id){
		return $http.get('/postGroup/'+id);
	}
	
	function getImagesByGroup(id){
		return $http.get('/imageGroup/'+id);
	}	
	function getFilesByGroup(id){
		return $http.get('/fileGroup/'+id);
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
	function removeImage(id){
		return $http.delete('/image/'+id);
	}
	function removeFile(id){
		return $http.delete('/file/'+id);
	}	
	function addFileAnswer(id,answer){
		 return $http.put('/fileAnswer/'+id,{answer:answer});
	}
	function addImageAnswer(id,answer){
		 return $http.put('/imageAnswer/'+id,{answer:answer});
	}	
	
	function addTextAnswer(id,answer){
		 return $http.put('/textAnswer/'+id,{answer:answer});
	}	
	
	return {
		add:add,
		getByGroup:getByGroup,
		getImagesByGroup:getImagesByGroup,
		getFilesByGroup:getFilesByGroup,
		update:update,
		remove:remove,
		removeImage:removeImage,
		removeFile:removeFile,
		addFileAnswer:addFileAnswer,
		addImageAnswer:addImageAnswer,
		addTextAnswer:addTextAnswer
	}
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(factory);

module.exports = dependencies;
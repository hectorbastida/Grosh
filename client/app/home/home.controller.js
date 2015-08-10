
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','userService','loginService','$state','$rootElement','groupService'];
/*
The controller's functionality
*/
var controller = function($scope,userService,loginService,$state,$rootElement,groupService){
	var html = document.querySelector('html');
	html.id = 'home'
	 $rootElement.data("$$ngAnimateState").running = false;

	
	$scope.groups = [];
	
	groupService.getAll()
	.then(function(response){
		$scope.groups = response.data;
	})
	
	
	$scope.getUrlByGroup = function(group){
		return 	{
   	 "background": 'url( '+ group.url_image +')',
    	"background-size": "cover"
    	}
	}
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;
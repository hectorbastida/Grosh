
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','$state','loginService','$stateParams','userService','groupService'];
/*
The controller's functionality
*/
var controller = function($scope,$state,loginService,$stateParams,userService,groupService){
    
    $scope.results = [];
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;
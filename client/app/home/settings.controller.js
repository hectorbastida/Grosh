
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','userService','loginService','ngFoobar','$translate'];
/*
The controller's functionality
*/
var controller = function($scope,userService,loginService,ngFoobar,$translate){


	var html = document.querySelector('html');
	html.id = 'home'
	$scope.user = '';
	userService.get(loginService.getLoggedUser()._id)
		.success(function(data, status, headers, config) {
      		  $scope.user = data;
		})
		.error(function(data, status, headers, config) {
		   console.error('error'); 
		   console.info(data); 
		});

	$scope.updateUser = function(){
		userService.update($scope.user)
		.success(function(data, status, headers, config) {
       $scope.user = data;
       		ngFoobar.show("success", 'Your Information Was Updated');
		   $translate.use($scope.language);
		})
		.error(function(data, status, headers, config) {
		   console.error('error'); 
		   console.info(data); 
		})};




}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;
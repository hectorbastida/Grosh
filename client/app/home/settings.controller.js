var toastr = require("toastr")

/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','userService','loginService'];
/*
The controller's functionality
*/
var controller = function($scope,userService,loginService){
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
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-full-width",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "2000",
  "extendedTimeOut": "500",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
	$scope.updateUser = function(){
		userService.update($scope.user)
		.success(function(data, status, headers, config) {
      		  $scope.user = data;
      		  toastr.success('Your information was updated successfully!')
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
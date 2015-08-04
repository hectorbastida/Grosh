require('toastr');
var toastr = require("toastr")

/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','$state','userService','loginService'];
/*
The controller's functionality
*/
var controller = function($scope,$state,userService,loginService){
	var html = document.querySelector('html');
	html.id = 'login'
	$scope.loginPartial = 'signIn';
	$scope.newUser = {
		name:'',
		lastName:'',
		email:'',
		password:'',
		rePassword:'',
		gender:''
	}
	$scope.user = {
		email:'',
		password:''
	}

	function restarForm(){
		$scope.newUser = {
			name:'',
			lastName:'',
			email:'',
			password:'',
			rePassword:'',
			gender:''
		}
	} 
	
	$scope.activeLoginPartial = function(partial){
		if($scope.loginPartial === partial){
			return '';
		}
		return 'card-hide';
	}
	
	
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
	$scope.toggleLoginPartial = function(){
		if($scope.loginPartial === 'signIn'){
			$scope.loginPartial = 'signUp';
		}else{
			$scope.loginPartial = 'signIn';
		}
	}

	$scope.login = function(){
		if($scope.user.password !== '' && $scope.user.email !==''){
			loginService.login($scope.user.email,$scope.user.password)
		            .success(function(data, status, headers, config) {
                       loginService.setProfile(data.id,data.email,data.name,
                           data.last_name,
                           data.access_token);
                       toastr.success('Welcome Back '+data.name+' '+data.last_name)
                       $state.go('home');
		            })
		            .error(function(data, status, headers, config) {
		               console.error('error'); 
		               toastr.error('User credentials are invalid')

		            }); 
		}else{
			toastr.info('Please Complete all the fields')
		}
	}


	$scope.addNewUser = function(){
		if($scope.newUser.name !== '' && $scope.newUser.lastName !== '' && $scope.newUser.email !== ''
			&& $scope.newUser.password !== '' && $scope.newUser.rePassword !== '' && $scope.newUser.gender!==''){
				if($scope.newUser.password === $scope.newUser.rePassword){
					userService.add($scope.newUser)
		            .success(function(data, status, headers, config) {
		               restarForm();
		               toastr.success('You have been registered correctly ' + data.name + ' '+ data.last_name)
		            	$scope.loginPartial = 'signIn';
		            })
		            .error(function(data, status, headers, config) {
		               console.error('error'); 
		               console.info(data); 
		            }); 

				}else{
					toastr.info('Password and Repeat Password fields do not match')
				}

		}else{
			toastr.info('Please Complete all the fields, all field are required')

		}
	}


}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;
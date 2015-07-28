
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','$state','loginService','$stateParams','userService' ];
/*
The controller's functionality
*/
var controller = function($scope,$state,loginService,$stateParams,userService){

    $scope.currentUser = '';
    init();
    function init(){
       var current = loginService.getLoggedUser();

       userService.get($stateParams.profile)
       .then(function(response){
           $scope.currentUser = response.data;
       })
       .catch(function(response){
          console.log(response.data);
       })


       if(current){
         $scope.currentUser = {name:current.name,lastName:current.lastName,email:current.email};
       }else{
          $state.go('login');
       }
    }

}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;
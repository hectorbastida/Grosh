
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','$state'];
/*
The controller's functionality
*/
var controller = function($scope,$state){


	    
   
  /*  $scope.userIsLogged = function(){
      return userService.isLogged();
    }

    $scope.logout = function(){
      userService.logout();
      $state.go('index');
      LxNotificationService.notify('You Logged Out, See You Soon');

    }

    $scope.getGravatar = function(){
      if(userService.getLogged()){
        var email = userService.getLogged().email;
        return md5(email);
      }
        return null;
    }
    */
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;

/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','$state','loginService'];
/*
The controller's functionality
*/
var controller = function($scope,$state,loginService){
    $scope.user = '';

    function getUser(){
       var current = loginService.getLoggedUser();
       if(current){
         $scope.user = {name:current.name,lastName:current.lastName,email:current.email};
       }
    }
    getUser();
    $scope.closeThis = function () {
      if($scope.sideMenuOpen){
        $scope.sideMenuOpen = false;
        $scope.$apply();
      }        
    }

    $scope.menuBarActive = function(){
        if(loginService.loggedIn()){
              return 'menu-bar-active';
        }
        return 'menu-bar-inactive';
    }

    $scope.sideMenuOpen = false;
	  $scope.openSideMenu = function(){
        $scope.sideMenuOpen = ! $scope.sideMenuOpen;
    }
    
    $scope.isSideMenuOpened = function(){
      console.log($scope.sideMenuOpen);
      if($scope.sideMenuOpen){
        return 'menu open';
      }
      return '';
    }

    $scope.logout = function(){
      $scope.sideMenuOpen = false;
      if(loginService.logout()){
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
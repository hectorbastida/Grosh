
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','$state','loginService','$rootScope'];
/*
The controller's functionality
*/
var controller = function($scope,$state,loginService,$rootScope){
    $scope.user = loginService.getLoggedUser();

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams,fromState,fromParams){

    });
  
  	$rootScope.$on('$stateChangeStart', function(event, toState, toParams){
  	    $scope.sideMenuOpen = false;
  	})

  
  
    $scope.closeThis = function () {
      if($scope.sideMenuOpen){
        $scope.sideMenuOpen = false;
        $scope.$apply();
      }

    }
    $scope.closeThis2 = function () {

      if($scope.sideChatOpen){
        $scope.sideChatOpen = false;
        $scope.$apply();
      } 
    }
    
    $scope.closeChat = function(){
      if($scope.sideChatOpen){
        $scope.sideChatOpen = false;
      } 
    }
    $scope.menuBarActive = function(){
      
        if(loginService.loggedIn()){
              $scope.user = loginService.getLoggedUser();
              return 'menu-bar-active';
        }
        return 'menu-bar-inactive';
    }

    $scope.sideMenuOpen = false;
    $scope.sideChatOpen = false;
	  $scope.openSideMenu = function(menuName){

	      if(menuName === 'menu'){
          $scope.sideMenuOpen = ! $scope.sideMenuOpen;
          $scope.sideChatOpen = false;

	      }else if(menuName === 'chat'){
           $scope.sideChatOpen = ! $scope.sideChatOpen;
           $scope.sideMenuOpen = false;

	      }
	        
	      
    }
    
    $scope.isSideMenuOpened = function(){
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

    $scope.viewProfile = function(){
      $state.go('profile',{profile:$scope.user._id});
    }

    $scope.viewGroups = function(){
      $state.go('myGroups');
    }
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;
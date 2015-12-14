
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
    $scope.groups = [];
    $scope.users = []
    $scope.active = 'group';
    if($stateParams.query){
        $scope.query = $stateParams.query;
        $scope.init = function(){
            userService.getByName($stateParams.query)
            .then(function(response){
                    $scope.users = response.data;
            })
            
            groupService.getByName($stateParams.query)
            .then(function(response){
                    $scope.groups = response.data;
            })
        }
        
        $scope.init();
    }
    
    $scope.find = function(){
        if($scope.query){
            $state.go('search',{query:$scope.query})
        }
    }
    
    $scope.changeActive = function(active){
        
        if(active === 'group'){
            document.getElementById("joinedGroups").className = "tile ";
		    document.getElementById("createdGroups").className = "tile active-profile";
        }else {
            document.getElementById("createdGroups").className = "tile";
		    document.getElementById("joinedGroups").className = "tile active-profile";
        }
        $scope.active = active;
        
    }
    
    $scope.getUrlByGroup = function(group){
		return 	{
   	 "background": 'url( '+ group.url_image +')',
    	"background-size": "cover"
    	}
	}
    $scope.getUrlByUser = function(user){
		return 	{
   	 "background": 'url( '+ user.url_image +')',
    	"background-size": "cover",
    	"background-position":"center center"
    	}
	}
	
	
	
	

	



}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;
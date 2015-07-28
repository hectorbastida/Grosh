
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','userService','loginService','$state','groupService','$stateParams'];
/*
The controller's functionality
*/
var controller = function($scope,userService,loginService,$state,groupService,$stateParams){
	var html = document.querySelector('html');
	html.id = 'group'
	$scope.currentGroup='';
	$scope.groupId = '';
	$scope.isAdmin = false;
	if($stateParams.group){
		$scope.groupId = $stateParams.group;
		groupService.get($stateParams.group)
		.then(function(response){
			$scope.currentGroup=response.data;
			if($scope.currentGroup.administrators[0]===loginService.getLoggedUser()._id){
				$scope.isAdmin = true;
			}
		})
		.catch(function(response){
			console.error(response.data)
		})
	}

	$scope.group = {
		name:'',
		description:''
	}
	$scope.currentUser = '';

	$scope.createGroup = function(){
		if($scope.group !== '' && $scope.group.description !== ''){
			groupService.add(loginService.getLoggedUser(),$scope.group)
			.then(function(response){
				$scope.group = {
					name:'',
					description:''
				}			
				$state.go('group',{group:response.data._id});
				alert('Group Created Successfully!')
			})
			.catch(function(response){
				console.error(response.data)
			})

		}

	}
	$scope.image = {
		url:''
	}

	$scope.addUrlImage = function(){
		if($scope.image.url !== ''){

		}else{
			alert('Please complete iamge url field')
		}
	}


}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;
var toastr = require("toastr")

/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','userService','loginService','$state','groupService','$stateParams','$timeout','Upload','ngFoobar'];
/*
The controller's functionality
*/
var controller = function($scope,userService,loginService,$state,groupService,$stateParams,$timeout,Upload,ngFoobar){
	var html = document.querySelector('html');
	html.id = 'group'
	$scope.currentGroup='';
	$scope.groupId = '';
	$scope.isAdmin = false;
    $scope.back = ''

	init();
	function init(){
	if($stateParams.group){
		$scope.groupId = $stateParams.group;
		groupService.get($stateParams.group)
		.then(function(response){
			$scope.currentGroup=response.data;
			$scope.back = $scope.currentGroup.url_image;

			if($scope.currentGroup.administrators[0]===loginService.getLoggedUser()._id){
				$scope.isAdmin = true;
			}
		})
		.catch(function(response){
			console.error(response.data)
		})
	}
}
	$scope.group = {
		name:'',
		description:''
	}
	$scope.currentUser = '';




	$scope.createGroup = function(){
		if($scope.group !== '' && $scope.group.description !== ''){
			groupService.add(loginService.getLoggedUser()._id,$scope.group)
			.then(function(response){
				$scope.group = {
					name:'',
					description:''
				}			
				$state.go('group',{group:response.data._id});
				ngFoobar.show("Success", 'Group Created Successfully!');


			})
			.catch(function(response){
				console.error(response.data)
			})

		}else{
			ngFoobar.show("info", 'Please Complete All Fields');
		}
	}
	$scope.image = {
		url:''
	}

	$scope.addUrlImage = function(){
		if($scope.image.url !== ''){
			groupService.addImgUrl($scope.currentGroup._id,$scope.image.url)
			.then(function(response){
				$state.go('group',{group:$scope.groupId},{reload: true})
			})
			.catch(function(response){
				console.error(response.data)
			})
		}else{
			ngFoobar.show("info", 'Please complete iamge url field');
		}
	}


///////////ng-file-upload

    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
    	if($scope.file){
    	$scope.upload([$scope.file]);

    	}
    });

	    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                	method: 'POST',
                    url: '/image',
                    file: file,
                    params: {
		        		id_group : $scope.groupId
		        	}
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                                evt.config.file.name + '\n' + $scope.log;
                                console.log($scope.log);
                }).success(function (data, status, headers, config) {
                    $timeout(function() {
                        $scope.log = 'file: ' + config.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                        console.log(data)
                    });
                }).error(function (data, status, headers, config) {
                    console.log('error status: ' + status);
                })
            }
        }
    };


}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;



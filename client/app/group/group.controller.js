
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','userService','loginService','$state','groupService','$stateParams','$timeout','Upload','ngFoobar','postService'];
/*
The controller's functionality
*/
var controller = function($scope,userService,loginService,$state,groupService,$stateParams,$timeout,Upload,ngFoobar,postService){
	var html = document.querySelector('html');
	html.id = 'group'
	$scope.currentGroup='';
	$scope.groupId = '';
	$scope.isAdmin = false;
    $scope.back = ''
    $scope.aux = [];
	$scope.posts = [];
	$scope.images = [];
	$scope.files = [];
	
	$scope.init = function(){
	if($stateParams.group){
		$scope.groupId = $stateParams.group;
		groupService.get($stateParams.group)
		.then(function(response){
			$scope.currentGroup=response.data;
			$scope.back = $scope.currentGroup.url_image;

			if($scope.currentGroup.administrators[0]===loginService.getLoggedUser()._id){
				$scope.isAdmin = true;
			}
			postService.getByGroup($scope.currentGroup._id)
			.then(function(response){
				$scope.aux = response.data;
				for(var i=0;i<$scope.aux.length;i++){
					$scope.aux[i].postType = 'text'
				}	
				
					postService.getImagesByGroup($scope.currentGroup._id)
					.then(function(response){
						$scope.images = response.data;
						for(var i=0;i<$scope.images.length;i++){
							$scope.images[i].postType = 'image'
							$scope.aux.push($scope.images[i]);
						}
						
							postService.getFilesByGroup($scope.currentGroup._id)
							.then(function(response){
								$scope.files = response.data;
								for(var i=0;i<$scope.files.length;i++){
									$scope.files[i].postType = 'file'
									$scope.aux.push($scope.files[i]);
								}
								$scope.aux.sort(function(a,b){
								  return new Date(a.create_date) - new Date(b.create_date);
								});
								$scope.posts = $scope.aux;
							})
							.catch(function(response){
								
							})				
					})
					.catch(function(response){
						
					})				
				
				
			})	
			.catch(function(response){
				
			})

			
			
		})
		.catch(function(response){
			console.error(response.data)
		})
	}
}
	$scope.init();
	$scope.group = {
		name:'',
		description:''
	}
	$scope.currentUser = '';

	$scope.newPost = {
		content:''
	}
	$scope.addPost = function(){
		if($scope.newPost.content){
			postService.add($scope.newPost.content.trim(),loginService.getLoggedUser()._id,$scope.currentGroup._id)
			.then(function(response){
				$state.go('group',{group:$scope.groupId},{reload: true})
				ngFoobar.show("success", 'Your Post Was Added Succesfully');
			})
			.catch(function(response){
				
			})
		}else{
			ngFoobar.show("info", 'Please Complete Content Field');
		}
		
	}

	$scope.createGroup = function(){
		if($scope.group !== '' && $scope.group.description !== ''){
			groupService.add(loginService.getLoggedUser()._id,$scope.group)
			.then(function(response){
				$scope.group = {
					name:'',
					description:''
				}			
				$state.go('group',{group:response.data._id});
				ngFoobar.show("success", 'Group Created Successfully!');


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
			ngFoobar.show("info", 'Please complete image url field');
		}
	}


///////////ng-file-upload


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
                	method: 'patch',
                    url: '/group/'+$scope.currentGroup._id,
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                                evt.config.file.name + '\n' + $scope.log;
                               // console.log($scope.log);
                }).success(function (data, status, headers, config) {
                    $timeout(function() {
                        $scope.log = 'file: ' + config.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                     //   console.log(data)
                     $state.go('group',{group:$scope.groupId},{reload: true})

                    });
                }).error(function (data, status, headers, config) {
                    console.log('error status: ' + status);
                })
            }
        }
    };
		
		$scope.newImage = {
			content:''
		}
		$scope.addPostImage = function(imagepost){
			 if(imagepost){
    			$scope.addImageGroup([imagepost]);
    		}else{
    			ngFoobar.show("info", 'Please Select An Image ');
    		}
		}
	    $scope.addImageGroup = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                	method: 'POST',
                    url: '/image',
                    file: file,
                    params:{
                    	content:$scope.newImage.content,
						id_group:$scope.currentGroup._id,
                    }
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                                evt.config.file.name + '\n' + $scope.log;
                               // console.log($scope.log);
                }).success(function (data, status, headers, config) {
                    $timeout(function() {
                        $scope.log = 'file: ' + config.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                     //   console.log(data)
                     $state.go('group',{group:$scope.groupId},{reload: true})
                     ngFoobar.show("success", 'Your Post Was Added Succesfully');
                    });
                }).error(function (data, status, headers, config) {
                    console.log('error status: ' + status);
                })
            }
        }
    };
    
        $scope.$watch('filepost', function () {
        	if($scope.filepost){
			 	var input = document.getElementById('input-file');
			 	if(input.files[0].size > 5242880){
					  try {
					    input.value = null;
					  } catch(ex) { }
					  if (input.value) {
					    input.parentNode.replaceChild(input.cloneNode(true), input);
					  }
			 		ngFoobar.show("info", 'Please select a file under size of 5 megabytes');
			 	}
        	}
		});
    
		$scope.addPostFile = function(filepost){
			 if(filepost){

    			$scope.addFileGroup([filepost]);
    		}else{
    			ngFoobar.show("info", 'Please select a file');
    		}
		}
	    $scope.addFileGroup = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                	method: 'POST',
                    url: '/file',
                    file: file,
                    params:{
                    	content:$scope.newImage.content,
						id_group:$scope.currentGroup._id,
                    }
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                                evt.config.file.name + '\n' + $scope.log;
                               // console.log($scope.log);
                }).success(function (data, status, headers, config) {
                    $timeout(function() {
                        $scope.log = 'file: ' + config.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                     //   console.log(data)
                     $state.go('group',{group:$scope.groupId},{reload: true})
                     ngFoobar.show("success", 'Your Post Was Added Succesfully');
                    });
                }).error(function (data, status, headers, config) {
                    console.log('error status: ' + status);
                })
            }
        }
    };
    
    
    
    
    
    
    $scope.hasPermits = function(post){
    	var postUser = post.user_creator;
    	if(postUser.id === loginService.getLoggedUser()._id || $scope.isAdmin){
    		return true;
    	}
    	return false;
    }
    $scope.deletePost = function(post){
    	if(post.postType === 'text'){
    		postService.remove(post._id)
    		.then(function(response){
    			console.log('imhere')
    			$scope.init();
    		})
    	}else if(post.postType === 'image'){
    		postService.removeImage(post._id)
    		.then(function(response){
    			$scope.init();
    		})
    		
    	}else if(post.postType === 'file'){
    		postService.removeFile(post._id)
    		.then(function(response){
    			$scope.init();
    		})    		
    	}
    }
    
    
    $scope.activePost = '';
    $scope.postAnswerActive = function(post){
    	if(!$scope.activePost){
    		return false;
    	}else 
    	if(post._id === $scope.activePost._id){
    		return true;
    	}else{
    		return false;
    	}
    	
    }
    
    $scope.setActivePost  = function(post){
    	if(post._id===$scope.activePost._id){
    		$scope.activePost = '';
    	}else{
    		$scope.activePost = post;
    	}
    	
    }
    
    $scope.addAnswer = function(post){
    	console.log(post.newAnswer)
    	if(post.newAnswer){
    		var answerObject = {
    			content:post.newAnswer,
    			date:new Date(),
    			user:loginService.getLoggedUser().name + ' ' + loginService.getLoggedUser().lastName
    		}
	    	if(post.postType === 'text'){
	    		postService.addTextAnswer(post._id,answerObject)
	    		.then(function(response){
	    			$scope.init();
	    		})
	    	}else if(post.postType === 'image'){
	    		postService.addImageAnswer(post._id,answerObject)
	    		.then(function(response){
	    			$scope.init();
	    		})
	    		
	    	}else if(post.postType === 'file'){
	    		postService.addFileAnswer(post._id,answerObject)
	    		.then(function(response){
	    			$scope.init();
	    		})    		
	    	}
    	}else{
    		ngFoobar.show("info", 'Please complete Answer Field');
    	}
    }
    
	$scope.showNewPost = function(postType){
		if(postType === 'text'){
			$state.go('group.newPost');
		}else if(postType === 'image'){
			$state.go('group.newImage');
		}else if(postType === 'file'){
			$state.go('group.newFile');
		}
		
		window.scrollTo(0,200);
	}
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;



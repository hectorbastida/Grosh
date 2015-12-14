
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','$state','loginService','$stateParams','userService','ngFoobar','Upload','$timeout' ];
/*
The controller's functionality
*/
var controller = function($scope,$state,loginService,$stateParams,userService,ngFoobar,Upload,$timeout){

    $scope.currentUser = '';
    $scope.isAdmin = false;
    init();
    $scope.properties = {
     "background": "linear-gradient( to bottom, rgba(0, 0, 0, 0), rgba(1, 140, 127, 0.09) ),url('http://daphne-scott.com/wp-content/uploads/2014/03/Group-Sharing-good-news-Medium.jpg')",
    "background-attachment": "fixed",
    "background-size": "cover",
    "background-position": "center center",
    "background-repeat": "no-repeat",
    }
    function init(){
       var current = loginService.getLoggedUser();

       userService.get($stateParams.profile)
       .then(function(response){
           $scope.currentUser = response.data;
           
            if( loginService.getLoggedUser()._id === $stateParams.profile){
                $scope.isAdmin = true;
            }else{
                $scope.isAdmin = false;
            }
       })
       .catch(function(response){
          console.log(response.data);
       })


       if(current){
         $scope.currentUser = {name:current.name,lastName:current.lastName,email:current.email,url_image:current.url_image};
       }else{
          $state.go('login');
       }
       
       $scope.sendChatRequest = function(){
           userService.addChatInvitation($stateParams.profile)
           .then(function(response){
                ngFoobar.show("success", 'Your Invitation Has Been Sent!');
           })
       }
       
       $scope.invitationPerms = function(){
           
       //    userService.getChatInvitationProfile($stateParams.profile)
       //    .then(function(response){
        //       if(response.data.length!==0){
        //           return false;
        //       }
        //   })
               if($stateParams.profile === loginService.getLoggedUser()._id){
                 return false;
               }
                return true;
       }
       
       
        $scope.$watch('profileImage', function () {
            if($scope.profileImage){
            $scope.addProfileImage([$scope.profileImage]);
        
            }
        });
	    $scope.addProfileImage = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                	method: 'patch',
                    url: '/userImage/'+ loginService.getLoggedUser()._id,
                    file: file,
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                                evt.config.file.name + '\n' + $scope.log;
                               // console.log($scope.log);
                }).success(function (data, status, headers, config) {
                    $timeout(function() {
                        $scope.log = 'file: ' + config.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                     //   console.log(data)
                     $state.go('profile',{profile:$stateParams.profile},{reload: true})
                    });
                }).error(function (data, status, headers, config) {
                    console.log('error status: ' + status);
                })
            }
        }
    };
    }

}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;
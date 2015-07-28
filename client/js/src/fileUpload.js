var appAdministrador = angular.module("appAdministrador", ['angularFileUpload']);

appAdministrador.controller('administrador',function($scope,$http,$upload){

	$scope.uploadImage = function() {
		$files = document.getElementById("imageID").files;
		$scope.token = '8de7b55a6c576240e1308e353542216fcd70d07f';
		$scope.grupo = '559797f7fdd8a21317ab4543';

	    for (var i = 0; i < $files.length; i++) {
		    var file = $files[i];
		    $scope.$watch.upload = $upload.upload({
		        url: '/image',
		        method: 'POST',
		        headers: {
		        	'Content-Type': 'multipart/form-data',
		        	'Authorization' : 'Bearer '+$scope.token
		        },
		        file: file,
		        params: {
		        	content : $scope.contentImage,
		        	id_group : $scope.grupo
		        }
		    }).progress(function(evt) {
		      	//proceso mientras se carga el archivo
		    }).success(function(data, status, headers, config) {
		      	console.log(data);
		    }).error(function(data, status, headers ,config){
		      	console.log(data);
		    });
	    }
	}

	$scope.uploadFile = function() {
		$files = document.getElementById("fileID").files;
	    for (var i = 0; i < $files.length; i++) {
		    var file = $files[i];
		    $scope.$watch.upload = $upload.upload({
		        url: '/file',
		        method: 'POST',
		        headers: {
		        	'Content-Type': 'multipart/form-data',
		        	'Authorization' : 'Bearer '+$scope.token
		        },
		        file: file,
		        params: {
		        	content : $scope.contentFile,
		        	id_group : $scope.grupo
		        }
		    }).progress(function(evt) {
		      	//proceso mientras se carga el archivo
		    }).success(function(data, status, headers, config) {
		      	console.log(data);
		    }).error(function(data, status, headers ,config){
		      	console.log(data);
		    });
	    }
	}
});

require('angular');
require('angular-ui-router');
require('angular-local-storage');

var user = require('./user/user.module');
var menuBar = require('./menu-bar/menu-bar.module');
var login = require('./login/login.module');
var home = require('./home/home.module');

var Grosh = angular.module('grosh',['ui.router','menuBar','user','login','home','LocalStorageModule']);

Grosh.run(['$rootScope', '$state','loginService', function($rootScope, $state,loginService) {
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams){
		var requireLogin = toState.data.requireLogin;
		if(requireLogin && !(loginService.loggedIn())){
			event.preventDefault();
			$state.go('login');
		}
		if(!(requireLogin) && loginService.loggedIn()){
			event.preventDefault();
			$state.go('home');
		}
	});
}]);

Grosh.config([
	'$stateProvider','$urlRouterProvider','localStorageServiceProvider','$locationProvider','$httpProvider',
	function($stateProvider,$urlRouterProvider,localStorageServiceProvider,$locationProvider,$httpProvider){
		//$locationProvider.html5Mode(true);
		 $httpProvider.interceptors.push("addTokenService");
		 $httpProvider.interceptors.push("responseErrorService");
		 localStorageServiceProvider.setPrefix('grosh')
		 .setStorageCookie(45,'/')
		 .setStorageCookieDomain('')
		 .setNotify(true, true);
		 $urlRouterProvider.otherwise('/');
		$stateProvider
                .state('login', {
		            url: '/',
		            templateUrl: './app/login/login.partial.html',
		            controller: 'loginController',
				    data: {
				      requireLogin: false,
				      id:'login'
				    }		           
		        })	
                .state('home', {
		            url: '/home',
		            templateUrl: './app/home/home.partial.html',
		            controller: 'homeController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })
		        .state('settings', {
		            url: '/settings',
		            templateUrl: './app/home/settings.partial.html',
		            controller: 'settingsController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })
		    }]);

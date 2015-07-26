require('angular');
require('angular-ui-router');
require('angular-local-storage');

var User = require('./user/user.module');
var menuBar = require('./menu-bar/menu-bar.module');
var login = require('./login/login.module');
var Grosh = angular.module('grosh',['ui.router','menuBar','user','login','LocalStorageModule']);

Grosh.config([
	'$stateProvider','$urlRouterProvider','localStorageServiceProvider','$locationProvider',
	function($stateProvider,$urlRouterProvider,localStorageServiceProvider,$locationProvider){
		//$locationProvider.html5Mode(true);
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
		    }]);

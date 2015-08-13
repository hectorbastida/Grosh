require('angular');
require('angular-ui-router');
require('angular-local-storage');
require('angular-animate');
require("angular-ui-router-anim-in-out")
var ngUpload = require('ng-file-upload');
var ngTranslate = require('angular-translate');


var user = require('./user/user.module');
var menuBar = require('./menu-bar/menu-bar.module');
var login = require('./login/login.module');
var home = require('./home/home.module');
var profile = require('./profile/profile.module');
var group = require('./group/group.module');
var post = require('./post/post.module');
var ngFoobar = require('ng-foobar');
var search = require('./search/search.module');;

var Grosh = angular.module('grosh',['ngAnimate','ngFoobar','ngFileUpload','ui.router','menuBar','user','login','home','profile', 'group','post','LocalStorageModule','anim-in-out','search','pascalprecht.translate']);

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

		if(toState.name === 'group'){
			if(!toParams.group){
				event.preventDefault();
				$state.go('home');
			}
		}
		if(toState.name === 'profile'){
			if(!toParams.profile){
				event.preventDefault();
				$state.go('home');
			}
		}
	});
}]);

Grosh.config([
	'$stateProvider','$urlRouterProvider','localStorageServiceProvider','$locationProvider','$httpProvider','$translateProvider',
	function($stateProvider,$urlRouterProvider,localStorageServiceProvider,$locationProvider,$httpProvider,$translateProvider){
		//$locationProvider.html5Mode(true);
		
		//translate config
		$translateProvider.translations('en', {
			//Settings Messages
			FRENCH_RADIO:"French",
			ENGLISH_RADIO:"Enlighs",
			SPANISH_RADIO:"Spanish",
			LABEL_LANGUAGE:"Language",
			SETTINGS_TITLE:"Settings",
			SETTINGS_SUBTITLE:"Profile Information",
			SETTINGS_CARD_HEADER:"Here you can edit your personal information.",
			BUTTON_APPLY_CHANGES:"Save",					
			//Login Messages
			EMAIL:'Email',
			PASSWORD:"Password",
			SIGN_IN:'Sign In',
			SIGN_UP:'Sign Up',
			CHANGE_SIGNUP:"Don't have an account?",
			CHANGE_SIGNIN:'Already have an account?',
			NAME_FIELD:"Name",
			LAST_NAME_FIELD:"Last Name",
			EMAIL_FIELD:"Email",
			PASSWORD_FIELD:"Password",
			RE_PASSWORD_FIELD:"Repeat Password",
			MALE_RADIO:"Male",
			FEMALE_RADIO:"Female",
			//Home Messages
			HOME_TITLE:'Home',
			HOME_SUBTITLE:'Latest Groups',
			CARD_VIEW:'View',
			GROUP_CREATE:'Create New Group!',
			//Menubar Messages
			SIDEMENU_HOME:'Home',
			SIDEMENU_PROFILE:'Profile',
			SIDEMENU_SETTINGS:'Settings',
			SIDEMENU_LOGOUT:'Logout',
			SIDEMENU_GROUPS:"My Groups",
			// Create Group Messages
			CREATE_GROUP_TITLE:"Create New Group",
			CREATE_GROUP_SUBTITLE:"Group Information",	
			CREATE_GROUP_CARD_HEADER:"Here you can create a new group!",
			DESCRIPTION_FIELD:"Description",
			BUTTON_CANCEL:"Cancel",
			BUTTON_CREATE:"Create New",
			//Notifications Messages
			CREDENTIALS_INVALID:'User credentials are invalid',
			WELCOME_BACK:"Welcome Back ",
			COMPLETE_FIELDS:"Please Complete all the fields",
			REGISTERED_SUCCESS:'You have been registered correctly',
			PASSWORD_DISMATCH:'Password and Repeat Password fields do not match',
			REQUIRED_FIELDS:' ,All fields are required.'
			
			
  		});
		$translateProvider.translations('es', {
			//Settings Messages
			FRENCH_RADIO:"Frances",
			ENGLISH_RADIO:"Ingles",
			SPANISH_RADIO:"Español",	
			LABEL_LANGUAGE:"Idioma",
			SETTINGS_TITLE:"Ajustes",
			SETTINGS_SUBTITLE:"Información de tu perfil",
			SETTINGS_CARD_HEADER:"Aqui puedes editar tu información personal.",
			BUTTON_APPLY_CHANGES:"Guardar",			
			//Login Messages
			EMAIL:'Email',
			PASSWORD:"Contraseña",
			SIGN_IN:'Ingresar',
			SIGN_UP:'Registrate',
			CHANGE_SIGNUP:"No tienes una cuenta?",
			CHANGE_SIGNIN:'Ya tienes una cuenta?',
			NAME_FIELD:"Nombre",
			LAST_NAME_FIELD:"Apellidos",
			EMAIL_FIELD:"Email",
			PASSWORD_FIELD:"Contraseña",
			RE_PASSWORD_FIELD:"Repetir Contraseña",
			MALE_RADIO:"Hombre",
			FEMALE_RADIO:"Mujer",
			//Home Messages
			HOME_TITLE:'Inicio',
			HOME_SUBTITLE:'Grupos Recientes',
			CARD_VIEW:'Ver',
			GROUP_CREATE:'Crear Nuevo Grupo!',
			//Menubar Messages
			SIDEMENU_HOME:'Inicio',
			SIDEMENU_PROFILE:'Perfil',
			SIDEMENU_SETTINGS:'Ajustes',
			SIDEMENU_LOGOUT:'Cerrar Sesión',
			SIDEMENU_GROUPS:"Mis Grupos",
			// Create Group Messages
			CREATE_GROUP_TITLE:"Crear Un Nuevo Grupo",
			CREATE_GROUP_SUBTITLE:"Información Acerca del Grupo",	
			CREATE_GROUP_CARD_HEADER:"Aqui puedes crear un nuevo grupo!",
			DESCRIPTION_FIELD:"Descripción",
			BUTTON_CANCEL:"Cancelar",
			BUTTON_CREATE:"Crear Nuevo",
			//Notifications Messages
			CREDENTIALS_INVALID:'Correo y/o Contraseñas son invalidas',
			WELCOME_BACK:"Bienvenido ",
			COMPLETE_FIELDS:"Por favor complete todos los campos",
			REGISTERED_SUCCESS:'Te has registrado satisfactoriamente!',
			PASSWORD_DISMATCH:'Campos de Contraseña y Repetir Contraseña no coinciden',
			REQUIRED_FIELDS:' ,Todos los campos son requeridos.'
  		});
		$translateProvider.translations('fr', {
			//Settings Messages
			FRENCH_RADIO:"Français",
			ENGLISH_RADIO:"Anglais",
			SPANISH_RADIO:"Espagnol",
			LABEL_LANGUAGE:"Langue",
			SETTINGS_TITLE:"Paramètres",
			SETTINGS_SUBTITLE:"Informations sur le profil",
			SETTINGS_CARD_HEADER:"Ici vous pouvez modifier vos informations personnelles.",
			BUTTON_APPLY_CHANGES:"Sauver",
			//Login Messages
			EMAIL:'Email',
			PASSWORD:"Mot de Passe",
			SIGN_IN:'Se Connecter',
			SIGN_UP:'Créer un compte',
			CHANGE_SIGNUP:"Vous ne possédez pas de compte?",
			CHANGE_SIGNIN:'Déjà vous avez un compte?',
			NAME_FIELD:"Nom",
			LAST_NAME_FIELD:"Noms de famille",
			EMAIL_FIELD:"Email",
			PASSWORD_FIELD:"Mot de Passe",
			RE_PASSWORD_FIELD:"Répéter Mot de Passe",
			MALE_RADIO:"Homme",
			FEMALE_RADIO:"Femme",
			//Home Messages
			HOME_TITLE:'Sur Démarrer',
			HOME_SUBTITLE:'Groupes récents',
			CARD_VIEW:'Voir la',
			GROUP_CREATE:'Créer un nouveau groupe',
			//Menubar Messages
			SIDEMENU_HOME:'Sur Démarrer',
			SIDEMENU_PROFILE:'Profil',
			SIDEMENU_SETTINGS:'Paramètres',
			SIDEMENU_LOGOUT:'Déconnecter',
			SIDEMENU_GROUPS:"Mes groupes",
			// Create Group Messages
			CREATE_GROUP_TITLE:"Créer un nouveau groupe",
			CREATE_GROUP_SUBTITLE:"Informations sur le groupe",	
			CREATE_GROUP_CARD_HEADER:"Ici vous pouvez créer un nouveau groupe!",
			DESCRIPTION_FIELD:"Description",
			BUTTON_CANCEL:"Annuler",
			BUTTON_CREATE:"Créer nouveau",			
			//Notifications Messages
			CREDENTIALS_INVALID:"Identification de l'utilisateur ne sont pas valides",
			WELCOME_BACK:"Bienvenue ",
			COMPLETE_FIELDS:"S'il vous plaît compléter tous les champs",
			REGISTERED_SUCCESS:'Vous avez successfully registered!',
			PASSWORD_DISMATCH:'Champs Mot de passe et Répéter Mot de Passe ne correspondent pas',
			REQUIRED_FIELDS:' ,Tous les champs sont requis.'
  		});
  		
  		$translateProvider.preferredLanguage('fr');
  		$translateProvider.useSanitizeValueStrategy('escaped');
  		
  		//interceptors for auth
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
		        .state('createGroup', {
		            url: '/createGroup',
		            templateUrl: './app/group/group.partial.html',
		            controller: 'groupController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })
		        .state('profile', {
		            url: '/profile/:profile',
		            templateUrl: './app/profile/profile.partial.html',
		            controller: 'profileController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })
		        .state('group', {
		            url: '/group/:group',
		            templateUrl: './app/group/group-detail.partial.html',
		            controller: 'groupController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })
		        .state('search', {
		            url: '/search?query',
		            templateUrl: './app/search/search.partial.html',
		            controller: 'searchController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })		        
		        .state('group.newPost', {
		            url: '/newPost',
		            templateUrl: './app/post/post.partial.html',
		            controller: 'groupController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })
		        .state('group.newImage', {
		            url: '/newImage',
		            templateUrl: './app/post/post-image.partial.html',
		            controller: 'groupController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })
		        .state('group.newFile', {
		            url: '/newFile',
		            templateUrl: './app/post/post-file.partial.html',
		            controller: 'groupController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })		        
		        .state('group.addCover', {
		            url: '/addCover',
		            templateUrl: './app/home/add-img.partial.html',
		            controller: 'groupController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })
		       .state('myGroups', {
		            url: '/myGroups/',
		            templateUrl: './app/group/group-list.partial.html',
		            controller: 'groupListController',
				    data: {
				      requireLogin: true,
				      id:'home'
				    }		           
		        })			        
		    }]);

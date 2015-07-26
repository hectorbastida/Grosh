require('angular');
var controller = require('./login.controller');
var utils = require('../utils/utils.module');
var loginService = require('./login.factory');
var addTokenService = require('./addToken.factory');

var login = angular.module('login',['utils']);

login.controller('loginController',controller);
login.factory('loginService',loginService);
login.factory('addTokenService',addTokenService);

module.exports = login;
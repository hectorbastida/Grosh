require('angular');
var userController = require('./user.controller');
var userService = require('./user.factory');
var user = angular.module('user',[]);
user.controller('userController',userController);
user.factory('userService',userService);

module.exports = user;

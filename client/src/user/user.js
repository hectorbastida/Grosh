var Angular = require('angular');
var userController = require('./user-controller');

var user = Angular.module('user',[]);
user.controller('userController',userController);

module.exports = user;

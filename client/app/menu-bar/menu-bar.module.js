require('angular');
var directive = require('./menu-bar.directive');
var controller = require('./menu-bar.controller');

var module = angular.module('menuBar',[]);
module.controller('menuBarController',controller);
module.directive('menuBar',directive);

module.exports = module;
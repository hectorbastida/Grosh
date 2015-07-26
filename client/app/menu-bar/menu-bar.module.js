require('angular');
var directive = require('./menu-bar.directive');
var controller = require('./menu-bar.controller');
var utils = require('../utils/utils.module');

var module = angular.module('menuBar',['utils']);
module.controller('menuBarController',controller);
module.directive('menuBar',directive);

module.exports = module;
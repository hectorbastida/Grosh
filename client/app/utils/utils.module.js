require('angular');
var formEncode = require('./formEncode.factory');
var clickOutside = require('./clickoutside.directive');
var utils = angular.module('utils',[]);
utils.factory('formEncode',formEncode);
utils.directive('clickOutside',clickOutside);

module.exports = utils;

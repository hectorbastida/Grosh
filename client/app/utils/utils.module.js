require('angular');
var formEncode = require('./formEncode.factory');

var utils = angular.module('utils',[]);
utils.factory('formEncode',formEncode);

module.exports = utils;

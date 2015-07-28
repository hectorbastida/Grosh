require('angular');
var controller = require('./group.controller');
var groupService = require('./group.factory');

var group = angular.module('group',[]);

group.controller('groupController',controller);
group.factory('groupService',groupService);

module.exports = group;
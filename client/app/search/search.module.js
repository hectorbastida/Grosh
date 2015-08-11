require('angular');
var searchController = require('./search.controller');
var searchService = require('./search.factory');
var search = angular.module('search',[]);
search.controller('searchController',searchController);
search.factory('searchService',searchService)
module.exports = search;

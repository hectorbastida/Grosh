require('angular');
var controller = require('./home.controller');
var settings =  require('./settings.controller');

var home = angular.module('home',[]);

home.controller('homeController',controller);
home.controller('settingsController',settings);

module.exports = home;
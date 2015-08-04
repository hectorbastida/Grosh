require('angular');
var profileController = require('./profile.controller');

var profile = angular.module('profile',[]);
profile.controller('profileController',profileController);
profile.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(url) {
            console.log('asas');
            element.css({
                'background': 'linear-gradient( to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.37) ),url( '+ url +')',
                'background-size': 'cover',
                'background-position':'center center'
            });
        });
    };
});
module.exports = profile;

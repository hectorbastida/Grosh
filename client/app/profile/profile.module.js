require('angular');
var profileController = require('./profile.controller');

var profile = angular.module('profile',[]);
profile.controller('profileController',profileController);
profile.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(url) {
            element.css({
                'background':'url( '+ url +')',
                'background-size': 'cover',
                'background-position':'center center'
            });
        });
    };
});
module.exports = profile;

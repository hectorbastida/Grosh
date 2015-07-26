var menuBarController = require('./menu-bar.controller');

var directive = function(){
	return {
		restrict: 'E',
		templateUrl:'./app/menu-bar/menu-bar.html',
		controller:menuBarController,
		scope:true
	}
}

module.exports = directive;
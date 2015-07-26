/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$q','$injector'];
/*
The controller's functionality
*/
var factory = function($q,$injector){


        var request = function (config) {
            var loginService = $injector.get('loginService');
            if (loginService.loggedIn()) {
                var user = loginService.getLoggedUser();
                config.headers.Authorization = "Bearer " + user.token;
            }
            return $q.when(config);
        };

        return {
            request: request
        }




}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(factory);

module.exports = dependencies;
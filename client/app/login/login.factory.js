/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$http','localStorageService','formEncode'];
/*
The controller's functionality
*/
var factory = function($http,localStorageService,formEncode){


        var USERKEY = "user";

        var setProfile = function (email,username, token) {
            profile.username = username;
            prfile.email = email;
            profile.token = token;
            localStorageService.set(USERKEY,profile);
        };

        var initialize = function () {
            var user = {
                username: "",
                email:"",
                token: "",
                loggedIn: function() {
                    return this.token;
                }
            };

            var localUser = localStorageService.get(USERKEY);
            if (localUser) {
                user.username = localUser.username;
                user.email = localUser.email;
                user.token = localUser.token;
            }
            return user;
        };

        var profile = initialize();
        
        var login = function (email, password) {

            var config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }

            var data = formEncode.encode({
                email: email,
                client_id:'449363d8187d9898abb265e50d1adc20',
                client_secret:'ec899ab5530e0cd33e4aa4815d927477',
                password: password,
                grant_type: "password"
            });

            return $http.post("/oauth/token", data, config)
                        .then(function (response) {
                        	console.info(response.data);
                           // setProfile(username, response.data.access_token);
                            return email;
                        });
        };	


        return {
            profile: profile,
            login:login
        };




}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(factory);

module.exports = dependencies;
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [];
/*
The controller's functionality
*/
var factory = function(){


    function encode(data) {
        var pairs = [];
        for (var name in data) {
            pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        }
        return pairs.join('&').replace(/%20/g, '+');
    };

	return {
		encode:encode,
	}
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/


module.exports = factory;
















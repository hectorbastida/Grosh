
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$document'];
/*
The controller's functionality
*/
var directive = function ($document) {
        return {
            restrict: 'A',
            scope: {
                clickOutside: '&'
            },
            link: function ($scope, elem, attr) {
                var classList = (attr.outsideIfNot !== undefined) ? attr.outsideIfNot.replace(', ', ',').split(',') : [];
                if (attr.id !== undefined) classList.push(attr.id);

                $document.on('click', function (e) {
                    var i = 0,
                        element;

                    if (!e.target) return;

                    for (element = e.target; element; element = element.parentNode) {
                        var id = element.id;
                        var classNames = element.className;

                        if (id !== undefined) {
                            for (i = 0; i < classList.length; i++) {
                                if (id.indexOf(classList[i]) > -1 || classNames.indexOf(classList[i]) > -1) {
                                    return;
                                }
                            }
                        }
                    }

                    $scope.$eval($scope.clickOutside);
                });
            }
        };
    }


/*
Whe push the directive to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(directive);

module.exports = dependencies;
module.exports = angular
    .module('labelModule', [])
    .directive('labelDirective', function() {
        return {
            templateUrl: 'lib/write/label/label.html',
            scope: {
                color: '@',
                name: '@'
            }
        }
    });
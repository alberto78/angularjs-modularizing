angular
    .module('inputModule', [])
    .directive('inputDirective', function() {
        return {
            templateUrl: 'lib/write/input/input.html',
            scope: {
                val: '@'
            }
        }
    });
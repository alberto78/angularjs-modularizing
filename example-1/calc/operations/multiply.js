angular
    .module('calcMultiplyModule', [])
    .factory('calcMultiplyFactory', function() {
        return {
            do: function(a, b) {
                return a * b;
            }
        }
    });
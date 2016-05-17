module.exports = angular
    .module('calcSumModule', [])
    .factory('calcSumFactory', function() {
        return {
            do: function(a, b) {
                return a + b;
            }
        }
    });
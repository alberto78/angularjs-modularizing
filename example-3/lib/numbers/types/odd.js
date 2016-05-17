module.exports = angular
    .module('numbersOddModule', [])
    .factory('numbersOddFactory', function() {
        return {
            get: function() {
                return [1, 3, 5, 7];
            }
        }
    });
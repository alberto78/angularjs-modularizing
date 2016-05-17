module.exports = angular
    .module('numbersEvenModule', [])
    .factory('numbersEvenFactory', function() {
        return {
            get: function() {
                return [2, 4, 6, 8];
            }
        }
    });
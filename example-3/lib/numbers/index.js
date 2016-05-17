var numbersEvenModule = require('./types/even'),
    numbersOddModule = require('./types/odd');

module.exports = angular
    .module('numbersModule', ['numbersOddModule', 'numbersEvenModule'])
    .factory('numbersFactory', function(numbersOddFactory, numbersEvenFactory) {
        return {
            getOdd: numbersOddFactory.get,
            getEven: numbersEvenFactory.get
        }
    });
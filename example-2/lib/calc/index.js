angular
    .module('calcModule', ['calcSumModule', 'calcMultiplyModule'])
    .factory('calcFactory', function(calcSumFactory, calcMultiplyFactory) {
        return {
            doSum: calcSumFactory.do,
            doMultiply: calcMultiplyFactory.do
        }
    });
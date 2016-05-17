var calcSumModule = require('./operations/sum'),
    calcMultiplyModule = require('./operations/multiply');

module.exports = angular
    .module('calcModule', ['calcSumModule', 'calcMultiplyModule'])
    .factory('calcFactory', function(calcSumFactory, calcMultiplyFactory) {
        return {
            doSum: calcSumFactory.do,
            doMultiply: calcMultiplyFactory.do
        }
    });
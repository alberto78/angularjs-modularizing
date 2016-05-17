angular
    .module('numbersModule', ['numbersOddModule', 'numbersEvenModule'])
    .factory('numbersFactory', function(numbersOddFactory, numbersEvenFactory) {
        return {
            getOdd: numbersOddFactory.get,
            getEven: numbersEvenFactory.get
        }
    });
var numbersModule = require('./lib/numbers/index'),
    calcModule = require('./lib/calc/index'),
    writeModule = require('./lib/write/index');

angular
    .module('mainApp', ['numbersModule', 'calcModule', 'writeModule'])
    .controller('mainController', function($scope, numbersFactory, calcFactory) {
        $scope.result_1 = numbersFactory.getOdd().reduce(calcFactory.doSum, 0);
        $scope.result_2 = numbersFactory.getEven().reduce(calcFactory.doMultiply, 1);
    });
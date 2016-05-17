angular
    .module('mainApp', ['numbersModule', 'calcModule', 'writeModule'])
    .controller('mainController', function($scope, numbersFactory, calcFactory) {
        $scope.result_1 = numbersFactory.getOdd().reduce(calcFactory.doSum, 0);
        $scope.result_2 = numbersFactory.getEven().reduce(calcFactory.doMultiply, 1);
    });
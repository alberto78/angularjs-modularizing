angular
    .module('mainApp', ['calcModule'])
    .controller('mainController', function($scope, calcFactory) {
        $scope.result_1 = calcFactory.doSum(18, 73);
        $scope.result_2 = calcFactory.doMultiply(9, 14);
    });
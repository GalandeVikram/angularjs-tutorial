'use strict';

mainApp.controller('CalcController', ['$scope', 'CalcService', function($scope, CalcService) {
        $scope.square = function() {
            $scope.result1 = CalcService.square($scope.number1);
        };

        $scope.qube = function() {
            $scope.result2 = CalcService.qube($scope.number2);
        };

        $scope.area = function(param) {
            $scope.result3 = CalcService.calculateArea(param);
        };
    }]);
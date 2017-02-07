'use strict';

mainApp.controller('CarController', ['$scope', 'CarService', function($scope, CarService) {
        $scope.getMaruti = function(type) {
            $scope.result1 = CarService.getMaruti(type);
        };
    }]);
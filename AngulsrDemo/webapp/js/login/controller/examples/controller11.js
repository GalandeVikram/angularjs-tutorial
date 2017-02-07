'use strict';

angular.module('mainApp').controller('shapeController', ['$scope', function($scope) {
        $scope.message = "In shape controller";
        $scope.type = "Shape";
    }]);

angular.module('mainApp').controller('circleController', ['$scope', function($scope) {
        $scope.message = "In circle controller";
        $scope.radious = "Want to know radious";
    }]);

angular.module('mainApp').controller('squareController', ['$scope', function($scope) {
        $scope.message = "In square controller";
    }]);
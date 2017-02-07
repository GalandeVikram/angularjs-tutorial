'use strict';

angular.module('mainApp')
        .controller('StudentController10', ['$scope', '$http', function($scope, $http) {
                var url = "students/data.json";

                $http.get(url).success(function(response) {
                    $scope.students = response;
                });
            }]);
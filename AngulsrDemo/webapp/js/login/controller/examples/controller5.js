'use strict';

angular.module('mainApp')
        .controller('StudentController5', ['$scope', function($scope) {
                $scope.student = {
                    firstName: "Amit",
                    lastName: "Kumar",
                    fees: 500,
                    subjects: [
                        {name: 'Physics', marks: 70},
                        {name: 'Chemistry', marks: 80},
                        {name: 'Math', marks: 65},
                        {name: 'Hindi', marks: 80}
                    ],
                    fullName: function() {
                        var studentObject;
                        studentObject = $scope.student;
                        return studentObject.firstName + " " + studentObject.lastName;
                    }
                };
            }]);
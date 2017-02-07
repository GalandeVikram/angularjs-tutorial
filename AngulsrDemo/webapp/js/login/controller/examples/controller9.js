'use strict';

angular.module('mainApp')
        .controller('StudentController9', ['$scope', function($scope) {
                $scope.student = {
                    firstName: "Yuvraj",
                    lastName: "Singh",
                    fees: 500,
                    subjects: [
                        {name: 'Physics-II', marks: 70},
                        {name: 'Chemistry', marks: 80},
                        {name: 'Math', marks: 65},
                        {name: 'English', marks: 75},
                        {name: 'Hindi', marks: 67}
                    ],
                    fullName: function() {
                        var studentObject;
                        studentObject = $scope.student;
                        return studentObject.firstName + " " + studentObject.lastName;
                    }
                };
            }]);
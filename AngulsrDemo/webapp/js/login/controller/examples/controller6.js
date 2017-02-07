'use strict';

angular.module('mainApp')
        .controller('StudentController6', ['$scope', function($scope) {
                $scope.student = {
                    firstName: "Mahendrasingh",
                    lastName: "Dhoni",
                    fees: 500,
                    subjects: [
                        {name: 'Physics', marks: 70},
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
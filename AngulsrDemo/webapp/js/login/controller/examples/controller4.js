'use strict';

angular.module('mainApp')
        .controller('StudentController4', ['$scope', function($scope) {
            $scope.student = {
                firstName: "Vikram",
                lastName: "Galande",                
                fullName: function() {
                    var studentObject;
                    studentObject = $scope.student;
                    return studentObject.firstName + " " + studentObject.lastName;
                }
            };
            
            /*var update = function(firstName, middleName, lastName){
                this.firstName = name;
                this.age = age;
                this.size = size;
            };

            
            function getFullName(){
            	var studentObject = $scope.student;
            	return "Hello Mr :"+studentObject.firstName;
            };*/
           
        }]);


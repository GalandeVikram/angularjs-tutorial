'use strict';

mainApp.controller('StudentController8', ['$scope', 'fileUploadService', function($scope, fileUploadService) {
        $scope.reset = function() {
            $scope.firstName = "Vikram";
            $scope.lastName = "Galande";
            $scope.email = "vikram.galande@atos.net";
        };

        $scope.reset();

        $scope.uploadFile = function() {
            var file = $scope.myFile;

            console.log('file is ');
            console.dir(file);

            var uploadUrl = "/fileUpload";
            fileUploadService.uploadFileToUrl(file, uploadUrl);
        };
    }]);
'use strict';

mainApp.service('CarService', function(CarFactory) {
    this.getMaruti = function(type) {
        return CarFactory.getMaruti(type);
    };
});


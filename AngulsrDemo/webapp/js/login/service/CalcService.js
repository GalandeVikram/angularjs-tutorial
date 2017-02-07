'use strict';

mainApp.service('CalcService', function(MathService) {
    this.square = function(a) {
        return MathService.square(a);
    };
    
    this.qube = function(a) {
        return MathService.qube(a);
    };
    
    this.calculateArea = function(param){
        return MathService.circle(param);
    }
});


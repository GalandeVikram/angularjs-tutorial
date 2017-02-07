'use strict';

mainApp.factory('MathService', function(PI) {
    var factory = {};

    factory.square = function(a) {
        return a * a;
    };
    
    factory.qube = function(a) {
        return a * a * a;
    };
    
    factory.circle = function(r) {
        return PI * r * r;
    };
    return factory;
});



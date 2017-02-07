'use strict';

/* App Module */
angular.module('Authentication', []);
angular.module('Home', []);
var mainApp = angular.module("mainApp", []);

mainApp.value("PI", 3.14);

mainApp.config(function($provide) {
   $provide.provider('CarFactory', function() {
      this.$get = function() {
         var factory = {};  
         
         factory.getMaruti = function(type) {
             if(type === "hatchback"){
                return "Swift"; 
             }else if(type === "sedan"){
                return "Dezire"; 
             }else if(type === "cross"){
                return "S-Cross"; 
             }else{
                 return "Maruti 800"; 
             }
         };
         
         factory.getHyundai = function(type) {
             if(type === "hatchback"){
                return "i20 Ellite"; 
             }else if(type === "sedan"){
                return "Verana"; 
             }else if(type === "cross"){
                return "i20 Active"; 
             }else{
                 return "Hyundai Eon"; 
             }
         };
         return factory;
      };
   });
});

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatAnimations',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices'
]);

//PhoneCat
phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
                when('/phones', {
                    templateUrl: 'partials/phone-list.html',
                    controller: 'PhoneListCtrl'
                }).
                when('/phones/:phoneId', {
                    templateUrl: 'partials/phone-detail.html',
                    controller: 'PhoneDetailCtrl'
                }).
                when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl'
                }).
                otherwise({
                    redirectTo: '/login'
                });
    }]);

//LoginExample Module
var loginExample = angular.module('loginExample', [
    'Authentication',
    'Home',
    'ngRoute',
    'ngCookies',
    'AngularChart',
    'mainApp'
]);

loginExample.config(['$routeProvider', function($routeProvider) {

        $routeProvider
                .when('/login', {
                    controller: 'LoginController',
                    templateUrl: 'views/authentication/login.html',
                    hideMenus: true
                })
                
                .when('/example1', {
                    templateUrl: 'views/examples/example1.html',
                    hideMenus: true
                })
                
                .when('/example2', {
                    templateUrl: 'views/examples/example2.html',
                    hideMenus: false
                })
                
                .when('/example3', {
                    templateUrl: 'views/examples/example3.html',
                    hideMenus: false
                })
                
                .when('/example4', {
                    controller: 'StudentController4',
                    templateUrl: 'views/examples/example4.html',
                    hideMenus: true
                })
                
                .when('/example5', {
                    controller: 'StudentController5',
                    templateUrl: 'views/examples/example5.html',
                    hideMenus: true
                })
                
                .when('/example6', {
                    controller: 'StudentController6',
                    templateUrl: 'views/examples/example6.html',
                    hideMenus: true
                })
                
                .when('/example7', {
                    controller: 'StudentController7',
                    templateUrl: 'views/examples/example7.html',
                    hideMenus: true
                })
                
                .when('/example8', {
                    controller: 'StudentController8',
                    templateUrl: 'views/examples/example8.html',
                    hideMenus: true
                })
                
                .when('/example9', {
                    controller: 'StudentController9',
                    templateUrl: 'views/examples/example9.html',
                    hideMenus: true
                })
                
                .when('/example10', {
                    controller: 'StudentController10',
                    templateUrl: 'views/examples/example10.html',
                    hideMenus: true
                })
                
                .when('/example11', {
                    //controller: 'StudentController11',
                    templateUrl: 'views/examples/example11.html',
                    hideMenus: true
                })
                
                .when('/example12', {
                    //controller: 'StudentController12',
                    templateUrl: 'views/examples/example12.html',
                    hideMenus: true
                })
                
                .when('/example13', {
                    //controller: 'StudentController13',
                    templateUrl: 'views/examples/example13.html',
                    hideMenus: true
                })
                
                .when('/example14', {
                    controller: 'StudentController14',
                    templateUrl: 'views/examples/example14.html',
                    hideMenus: true
                })
                
                
                .when('/chartApp', {
                    controller: 'Chartcontroller',
                    templateUrl: 'views/assignment/chart.html',                   
                    hideMenus: true
                })
                
                .when('/advancedAngular', {
                    controller: 'Chartcontroller',
                    templateUrl: 'views/assignment/chart.html',                   
                    hideMenus: true
                })
                
                .when('/', {
                    controller: 'HomeController',
                    templateUrl: 'views/home/home.html'
                })

                .otherwise({redirectTo: '/login'});
    }]);

loginExample.run(['$rootScope', '$location', '$cookieStore', '$http',
    function($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function(event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
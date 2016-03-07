define([
    'angular-route',
    'angular-messages'
], function() {
    var coreModule = angular.module('coreModule', ['ngRoute', 'ngMessages']);

    require(['js/controllers/controllerReference'], function(controllerReference) {
        require(controllerReference, function() {
            angular.bootstrap(document, ['coreModule']);
        });
    });

    coreModule.config(['$routeProvider', function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'mainController'
            })

            .when('/name', {
                templateUrl: 'pages/name.html',
                controller: 'mainController'
            })

            .when('/school', {
                templateUrl: 'pages/school.html',
                controller: 'mainController'
            })

            .when('/role', {
                templateUrl: 'pages/role.html',
                controller: 'mainController'
            })

            .when('/personal', {
                templateUrl: 'pages/personal.html',
                controller: 'mainController'
            })

            .when('/behaviour', {
                templateUrl: 'pages/behaviour.html',
                controller: 'mainController'
            })

            .when('/quality', {
                templateUrl: 'pages/quality.html',
                controller: 'mainController'
            })
    }]);
});
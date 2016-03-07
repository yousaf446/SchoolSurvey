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
                templateUrl: 'pages/home.html'
            })

            .when('/name', {
                templateUrl: 'pages/name.html'
            })

            .when('/school', {
                templateUrl: 'pages/school.html'
            })

            .when('/role', {
                templateUrl: 'pages/role.html'
            })

            .when('/personal', {
                templateUrl: 'pages/personal.html'
            })

            .when('/behaviour', {
                templateUrl: 'pages/behaviour.html'
            })

            .when('/quality', {
                templateUrl: 'pages/quality.html'
            })

            .when('/response', {
                templateUrl: 'pages/response.html'
            })

            .when('/thankyou', {
                templateUrl: 'pages/thanks.html'
            })
    }]);
});
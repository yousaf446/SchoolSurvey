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
                controller: 'nameController'
            })

            .when('/school', {
                templateUrl: 'pages/school.html',
                controller: 'schoolController'
            })

            .when('/role', {
                templateUrl: 'pages/role.html',
                controller: 'roleController'
            })

            .when('/personal', {
                templateUrl: 'pages/personal.html',
                controller: 'personalController'
            })

            .when('/behaviour', {
                templateUrl: 'pages/behaviour.html',
                controller: 'behaviourController'
            })

            .when('/quality', {
                templateUrl: 'pages/quality.html',
                controller: 'qualityController'
            })

            .when('/response', {
                templateUrl: 'pages/response.html',
                controller: 'responseController'
            })

            .when('/thankyou', {
                templateUrl: 'pages/thanks.html',
                controller: 'mainController'
            })
    }]);
});
define([
        'js/services/progressService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('responseController', ['$scope', 'progressService', function($scope, progressService) {
            progressService.getProgress();
        }]);
    });
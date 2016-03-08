define([
        'js/services/progressService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('qualityController', ['$scope', 'progressService', function($scope, progressService) {
            progressService.getProgress();
        }]);
    });
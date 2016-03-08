define([
        'js/services/progressService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('schoolController', ['$scope', 'progressService', function($scope, progressService) {
            progressService.setProgress()
            progressService.getProgress();
        }]);
    });
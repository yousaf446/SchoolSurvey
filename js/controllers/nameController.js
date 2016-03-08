define([
        'js/services/progressService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('nameController', ['$scope', 'progressService', function($scope, progressService) {
            var prev_progress = progressService.progress;
            progressService.getProgress(prev_progress);
        }]);
    });
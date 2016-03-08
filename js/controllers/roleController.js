define([
        'js/services/progressService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('roleController', ['$scope', 'progressService', function($scope, progressService) {
            var prev_progress = progressService.progress;
            progressService.getProgress(prev_progress);
        }]);
    });
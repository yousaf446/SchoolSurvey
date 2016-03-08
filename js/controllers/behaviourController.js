define([
        'js/services/progressService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('behaviourController', ['$scope', 'progressService', function($scope, progressService) {
            $scope.options = [
                {
                    name: 'Strongly agree',
                    value: 1,
                },
                {
                    name: 'Agree',
                    value: 2,
                },
                {
                    name: 'Neither agree nor disagree',
                    value: 3,
                },
                {
                    name: 'Disagree',
                    value: 4,
                },
                {
                    name: 'Strongly disagree',
                    value: 5,
                },
                {
                    name: 'N/A',
                    value: 0,
                }
            ];
            progressService.getProgress();
        }]);
    });
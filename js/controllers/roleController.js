define([
        'js/services/progressService',
        'js/services/roleService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('roleController', ['$scope', 'progressService', 'roleService', function($scope, progressService, roleService) {
            $('html, body').animate({'scrollTop': $(".progress-bar").offset().top-100}, 500);
            $scope.progress = 15;
            progressService.setProgress($scope.progress);
            progressService.getProgress();

            $scope.role = {
                ft: false,
                pt: false,
                ta: false,
                sm: false,
                hod: false,
                mentor: false,
                admin: false,
                prem: false,
                other: false,
                otherRole: "",
                na: false
            }

            $scope.saveRole = function() {
                roleService.setRole($scope.role);
            };

        }]);
    });
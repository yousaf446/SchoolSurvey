define([
        'js/services/progressService',
        'js/services/roleService',
        'js/services/schoolService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('roleController', ['$scope', '$window', 'progressService', 'roleService', 'schoolService',
            function($scope, $window, progressService, roleService, schoolService) {

            if(schoolService.getSchool() == "") {
                    $window.location.href = '#/school';
            }
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
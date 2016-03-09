define([
        'js/services/progressService',
        'js/services/roleService',
        'js/services/schoolService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('roleController', ['$scope', 'progressService', 'roleService', 'schoolService',
            function($scope, progressService, roleService, schoolService) {

            if(schoolService.getSchool() == "") {
                    location.href = '#/school';
            }
            $('html, body').animate({'scrollTop': $(".progress-bar").offset().top-100}, 500);
            $scope.progress = 15;
            progressService.setProgress($scope.progress);
            progressService.getProgress();

            $scope.role = {
                ft: { status: false, name: 'Teacher (Full Time)'},
                pt: { status: false, name: 'Teacher (part Time)'},
                ta: { status: false, name: 'Teacher (Assistant)'},
                sm: { status: false, name: 'Senior Management'},
                hod: { status: false, name: 'Head of Year / Department / Faculty'},
                mentor: { status: false, name: 'Mentor'},
                admin: { status: false, name: 'Administrative'},
                prem: { status: false, name: 'Premises'},
                other: { status: false, name: ''},
                na: { status: false, name: "I dont work at a school"}
            };

            $scope.saveRole = function() {
                roleService.setRole($scope.role);
            };

        }]);
    });
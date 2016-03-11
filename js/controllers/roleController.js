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

            $scope.role = [
                { status: false, name: 'Teacher (Full Time)'},
                { status: false, name: 'Teacher (part Time)'},
                { status: false, name: 'Teacher (Assistant)'},
                { status: false, name: 'Senior Management'},
                { status: false, name: 'Head of Year / Department / Faculty'},
                { status: false, name: 'Mentor'},
                { status: false, name: 'Administrative'},
                { status: false, name: 'Premises'},
                { status: false, name: ''},
                { status: false, name: "I dont work at a school"}
            ];

            $scope.saveRole = function() {
                roleService.setRole($scope.role);
            };

        }]);
    });
define([
        'js/services/progressService',
        'js/services/teacherService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('nameController', ['$scope', 'progressService', 'teacherService', function($scope, progressService, teacherService) {
            $scope.$watch('teacher', function() {
                teacherService.setTeacher($scope.teacher);
            });
            $('html, body').animate({'scrollTop': $(".progress-bar").offset().top-100}, 500);
        }]);
    });
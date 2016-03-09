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
            $scope.progress = 0;
            progressService.progress = 0;
            progressService.setProgress($scope.progress);
            progressService.getProgress();
            $('html, body').animate({'scrollTop': $(".progress-bar").offset().top-100}, 500);
        }]);
    });
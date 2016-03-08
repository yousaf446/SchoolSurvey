define([
        'js/services/progressService',
        'js/services/teacherService',
        'js/services/schoolService',
        'js/services/roleService',
        'js/services/questionService',
        'js/services/qualityService',
        'js/services/reviewService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('responseController', ['$scope', 'progressService', 'teacherService', 'schoolService',
            'roleService', 'questionService', 'qualityService', 'reviewService', function($scope, progressService, teacherService, schoolService,
                                                                         roleService, questionService, qualityService, reviewService) {

                if(qualityService.getQuality() == "") {
                    location.href = '#/quality';
                }
                $('html, body').animate({'scrollTop': $(".progress-bar").offset().top-100}, 500);
            $scope.progress = 10;
            progressService.setProgress($scope.progress);
            progressService.getProgress();

            reviewService.addReview(teacherService.getTeacher(), schoolService.getSchool(), roleService.getRole(), questionService.getPersonalQuestion(),
                                    questionService.getBehaviourQuestion(), qualityService.getQuality(), qualityService.getWorkhour()). then(function (response) {

                    $scope.status = response.data.status;
                    $scope.reviewID = response.data.data;
                }, function (response) {
                    $scope.status = response.data.status;

                });
            $scope.opinion = "";
            $scope.addResponse = function() {
                reviewService.addResponse($scope.reviewID, $scope.email, $scope.opinion).then(function (response) {

                    $scope.status = response.data.status;
                }, function (response) {
                    $scope.status = response.data.status;

                });
            };
        }]);
    });
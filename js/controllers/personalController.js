define([
        'js/services/progressService',
        'js/services/questionService',
        'js/services/roleService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('personalController', ['$scope', 'progressService', 'questionService', 'roleService',
            function($scope, progressService, questionService, roleService) {

            if(roleService.getRole() == "") {
                location.href = '#/role';
            }
            $('html, body').animate({'scrollTop': $(".progress-bar").offset().top-100}, 500);
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
            $scope.progress = 25;
            progressService.setProgress($scope.progress);
            progressService.getProgress();

            $scope.answer = {
                q11: "",
                q12: "",
                q13: "",
                q21: "",
                q22: "",
                q23: "",
                q24: "",
                q31: "",
                q32: "",
                q33: "",
            }

            $scope.saveAnswer = function() {
                questionService.setPersonalQuestion($scope.answer);
            }
        }]);
    });
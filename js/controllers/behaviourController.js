define([
        'js/services/progressService',
        'js/services/questionService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('behaviourController', ['$scope', '$window', 'progressService', 'questionService',
            function($scope, $window, progressService, questionService) {

            if(questionService.getPersonalQuestion() == "") {
                $window.location.href = '#/personal';
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
                s4: {q1: "", q2: "", q3: "", q4: "", q5: ""},
                s5: {q1: "", q2: "", q3: "", q4: ""},
                s6: {q1: "", q2: "", q3: "", q4: ""},
            }

            $scope.saveAnswer = function() {
                questionService.setBehaviourQuestion($scope.answer);
            }
        }]);
    });
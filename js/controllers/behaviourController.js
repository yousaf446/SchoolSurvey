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
                q41: "",
                q42: "",
                q43: "",
                q44: "",
                q45: "",
                q51: "",
                q52: "",
                q53: "",
                q54: "",
                q61: "",
                q62: "",
                q63: "",
                q64: "",
            }

            $scope.saveAnswer = function() {
                questionService.setBehaviourQuestion($scope.answer);
            }
        }]);
    });
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
                    s1: [
                        {q: "I would be happy if my children attended a school like this one", a: "", name: "q11", options: $scope.options},
                        {q: "I would advise my friends to send their children to this school", a: "", name: "q12", options: $scope.options},
                        {q: "My role in this school makes a significant and positive difference", a: "", name: "q13", options: $scope.options}
                    ],
                    s2: [
                        {q: "I am trusted to teach the way I want", a: "", name: "q21", options: $scope.options},
                        {q: "Management overly interferes with my day-to-day work", a: "", name: "q22", options: $scope.options},
                        {q: "I am trusted in how I choose to spend my working hours", a: "", name: "q23", options: $scope.options},
                        {q: "I feel heavily pressured by school accountability measures", a: "", name: "q24", options: $scope.options}
                    ],
                    s3: [
                        {q: "There is a positive atmosphere amongst staff at my school", a: "", name: "q31", options: $scope.options},
                        {q: "I am happy working at my school", a: "", name: "q32", options: $scope.options},
                        {q: "My colleagues are happy in their jobs", a: "", name: "q33", options: $scope.options}
                    ],
                }

            $scope.saveAnswer = function() {
                questionService.setPersonalQuestion($scope.answer);
            }
        }]);
    });
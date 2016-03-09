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
                s4: [
                    {q: "My department supports me in relation to students behavioural issues", a: "", name: "q41", options: $scope.options},
                    {q: "The pastoral team and senior leadership support me in relation to students’ behavioural issues", a: "", name: "q42", options: $scope.options},
                    {q: "The school pastoral support systems for behaviour work well", a: "", name: "q43", options: $scope.options},
                    {q: "My colleagues are helpful and understanding about issues with student behaviour", a: "", name: "q44", options: $scope.options},
                    {q: "Staff feel comfortable to speak openly about behavioural problems in school", a: "", name: "q45", options: $scope.options}
                ],
                s5: [
                    {q: "There is a good relationship between management and teachers", a: "", name: "q51", options: $scope.options},
                    {q: "I respect the management at my school", a: "", name: "q52", options: $scope.options},
                    {q: "Management listens to my opinion", a: "", name: "q53", options: $scope.options},
                    {q: "Additional work that I do is noticed and appreciated by management", a: "", name: "q54", options: $scope.options}
                ],
                s6: [
                    {q: "I am happy with the training opportunities at my school", a: "", name: "q61", options: $scope.options},
                    {q: "There are opportunities for me to progress my career rapidly at my school", a: "", name: "q62", options: $scope.options},
                    {q: "I am encouraged and supported in my career development", a: "", name: "q63", options: $scope.options},
                    {q: "I am learning in my job", a: "", name: "q64", options: $scope.options},
                ],
            }

            $scope.saveAnswer = function() {
                questionService.setBehaviourQuestion($scope.answer);
            }
        }]);
    });
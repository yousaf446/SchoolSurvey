define([
        'js/services/progressService',
        'js/services/schoolService',
        'js/services/teacherService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('schoolController', ['$scope', 'progressService', 'schoolService', 'teacherService',
            function($scope, progressService, schoolService, teacherService) {
            $('html, body').animate({'scrollTop': $(".progress-bar").offset().top-100}, 500);
            if(teacherService.getTeacher() == "" || teacherService.getTeacher() == undefined) {
                location.href = '#/name';
            }
            $scope.progress = 10;
            progressService.setProgress($scope.progress);
            progressService.getProgress();
            $scope.schooled = false;

            $scope.getSuggestions = function() {
                if($scope.school.length > 4) {
                    schoolService.getAllSchool($scope.school).then(function (response) {

                        $scope.status = response.data.status;
                        $scope.schools = response.data.data;
                        $('#school').autocomplete({
                            lookup: $scope.schools,
                            onSelect: function (suggestion) {
                                schoolService.setSchool(suggestion.data);
                                $scope.$apply(function(){
                                    $scope.schooled = true;
                                });

                            },
                            showNoSuggestionNotice: true,
                            noSuggestionNotice: 'Sorry, no matching results'
                        });
                    }, function (response) {
                        $scope.status = response.data.status;

                    });
                }
            };
        }]);
    });
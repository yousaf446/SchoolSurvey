define([
    'js/services/progressService',
    'js/services/schoolService'
],
    function() {
    var coreModule = angular.module('coreModule');
    coreModule.controller('mainController', ['$scope', '$location', 'schoolService', 'progressService', function($scope, $location, schoolService, progressService) {
        $scope.loc = $location.path();
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
        if($scope.loc == '/school') {
            schoolService.getSchool().then(function (response) {

                $scope.status = response.data.status;
                $scope.schools = response.data.data;
                $('#school').autocomplete({
                    lookup: $scope.schools,
                    onSelect: function (suggestion) {
                        $scope.schoolid = suggestion.data;
                    },
                    showNoSuggestionNotice: true,
                    noSuggestionNotice: 'Sorry, no matching results'
                });
            }, function (response) {
                $scope.status = response.data.status;

            });
        }
        $scope.workhours = 0;
        if($scope.loc == '/quality') {
            $( "#slider" ).slider({
                min: 0,
                mix: 1000,
                change: function( event, ui ) {
                    $scope.$apply( function() {
                        $scope.workhours = ui.value;
                    });
                    console.log(ui.value);
                }
            });
        }
        $scope.progress = progressService.getProgress($scope.progress);
        console.log($scope.progress);
    }]);
});
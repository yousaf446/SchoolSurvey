define([
    'js/services/reviewService'
],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('reviewController', ['$scope', 'reviewService', function($scope, reviewService) {
            reviewService.getReview().then(function (response) {
                $scope.status = response.data.status;
                $scope.reviews = response.data.data;
            }, function (response) {
                $scope.status = response.data.status;

            });
        }]);
});
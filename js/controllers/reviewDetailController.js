define([
    'js/services/reviewService'
],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('reviewDetailController', ['$scope', '$routeParams', 'reviewService', function($scope, $routeParams, reviewService) {
            $scope.school = $routeParams.school || 0;
            console.log($scope.school);
            if($scope.school > 0) {
                reviewService.getReviewDetail($scope.school).then(function (response) {
                    $scope.status = response.data.status;
                    $scope.reviews = response.data.data;
                }, function (response) {
                    $scope.status = response.data.status;

                });
            }
        }]);
});
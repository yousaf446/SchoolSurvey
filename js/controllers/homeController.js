define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.controller('homeController', ['$scope', function($scope) {
        $('html, body').animate({'scrollTop': $(".progress-bar").offset().top-100}, 500);
    }]);
});
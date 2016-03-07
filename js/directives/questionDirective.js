define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.directive('question', function() {
        return {
            restrict: 'E',
            templateUrl: 'directives/question.html',
            replace: true,
            scope: {
                weatherDay: "=",
                convertTemp: "&",
                convertDate: "&",
                dateFormat: "@"
            }
        };
    });
});
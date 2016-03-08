define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('schoolService', ['$http', '$q', function($http, $q) {
        this.school = 0;
        this.setSchool = function (school) {
            this.school = school;
        };
        this.getSchool = function () {
            return this.school;
        };
        this.getAllSchool = function(word) {
            var deffered = $q.defer();
            return $http.get('api/api.php?key=schools&word='+word).then(function successCallback(response) {
                deffered.resolve(response);
                return deffered.promise;

            }, function errorCallback(response) {
                deffered.reject(response);
                return deffered.promise;
            });
        };
    }]);
});
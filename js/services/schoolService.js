define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('schoolService', ['$http', '$q', function($http, $q) {
        this.getSchool = function() {
            var deffered = $q.defer();
            return $http.get('api/api.php?key=schools').then(function successCallback(response) {
                deffered.resolve(response);
                return deffered.promise;

            }, function errorCallback(response) {
                deffered.reject(response);
                return deffered.promise;
            });
        };
    }]);
});
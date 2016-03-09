define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('reviewService', ['$http', '$q', function($http, $q) {

        this.addReview = function(teacher, school, role, personal, behaviour, quality, workhour) {
            var deffered = $q.defer();
            var data = {
                teacher: teacher,
                school: school,
                role: role,
                personal: personal,
                behaviour: behaviour,
                quality: quality,
                workhour: workhour
            };

            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            return $http.post('api/api.php?key=reviews', data, config).then(function successCallback(response) {
                deffered.resolve(response);
                return deffered.promise;

            }, function errorCallback(response) {
                deffered.reject(response);
                return deffered.promise;
            });
        };

        this.addResponse = function(reviewID, email, response) {
            var deffered = $q.defer();
            var data = {
                reviewID: reviewID,
                email: email,
                response: response,
            };

            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            return $http.post('api/api.php?key=response', data, config).then(function successCallback(response) {
                deffered.resolve(response);
                return deffered.promise;

            }, function errorCallback(response) {
                deffered.reject(response);
                return deffered.promise;
            });
        };

        this.getReview = function() {
            var deffered = $q.defer();

            return $http.get('api/api.php?key=get_reviews').then(function successCallback(response) {
                deffered.resolve(response);
                return deffered.promise;

            }, function errorCallback(response) {
                deffered.reject(response);
                return deffered.promise;
            });
        };

        this.getReviewDetail = function(school) {
            var deffered = $q.defer();

            return $http.get('api/api.php?key=review_detail&school='+school).then(function successCallback(response) {
                deffered.resolve(response);
                return deffered.promise;

            }, function errorCallback(response) {
                deffered.reject(response);
                return deffered.promise;
            });
        };
    }]);
});
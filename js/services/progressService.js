define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.factory('progressService', ['$location', function($location) {
        var progressService = {};
        progressService.setProgress = function(progress) {
            progressService.progress = 0;
        };
        progressService.getProgress = function() {
            var path = $location.path();

            if(path == '/school' || path == '/response') {

                progressService.progress = progressService.progress + 10;
            }

            else if(path == '/role' || path == '/quality') {
                progressService.progress = progressService.progress + 15;
            }

            else if(path == '/personal' || path == '/behaviour') {
                progressService.progress = progressService.progress + 25;
            }
            console.log(progressService.progress);
            $('.progress-bar').css('width', progressService.progress+'%').attr('aria-valuenow', progressService.progress);
        };
        return progressService.progress;
    }]);
});
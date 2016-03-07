define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('progressService', ['$location', function($location) {
        this.getProgress = function(prev_progress) {
            var path = $location.path();
            var progress;
            if(path == '/home') {
                progress = 0;
            }
            else if(path == '/school' || path == '/response') {

                progress = parseInt(prev_progress) + 10;
            }

            else if(path == '/role' || path == '/quality') {
                progress = parseInt(prev_progress) + 15;
            }

            else if(path == '/personal' || path == '/behaviour') {
                progress = parseInt(prev_progress) + 25;
            }

            $('.progress-bar').css('width', progress+'%').attr('aria-valuenow', progress);
            return progress
        };
    }]);
});